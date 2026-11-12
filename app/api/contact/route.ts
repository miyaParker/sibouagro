import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const d = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    country: clean(body.country, 80),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    product: clean(body.product, 80),
    volume: clean(body.volume, 160),
    message: clean(body.message, 4000),
  };

  if (!d.name || !d.country || !d.product || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    return NextResponse.json(
      { error: "Please fill in name, country, a valid email and product." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", d.name],
    ["Company", d.company],
    ["Country", d.country],
    ["Email", d.email],
    ["Phone / WhatsApp", d.phone],
    ["Product", d.product],
    ["Estimated volume", d.volume],
    ["Message", d.message],
  ];

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Sibou Agro Website <onboarding@resend.dev>",
    to: [to],
    replyTo: d.email,
    subject: `Quote request: ${d.product} – ${d.name}${d.company ? ` (${d.company})` : ""}`,
    html: `<h2>New quote request</h2><table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v || "-").replace(/\n/g, "<br>")}</td></tr>`)
      .join("")}</table>`,
    text: rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n"),
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "We could not send your request." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
