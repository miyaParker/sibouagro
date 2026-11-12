"use client";

import { useState, type FormEvent } from "react";
import { products } from "@/lib/products";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1 w-full rounded-xl border border-green-deep/30 bg-white px-4 py-3 text-base focus:border-green-deep";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-forest text-white/90">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-4xl font-medium sm:text-6xl">Request a quote</h2>
        <p className="mt-4 text-lg text-white/80">
          Tell us what you need and we will reply with availability and pricing.
        </p>

        {status === "success" ? (
          <div role="status" className="mt-8 rounded-2xl bg-cream p-6 text-ink">
            <p className="font-medium text-green-deep">Thank you. Your request has been sent.</p>
            <p className="mt-1">We will get back to you by email as soon as we can.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 font-medium underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate={false}>
            {/* Honeypot: hidden from people and assistive tech; bots tend to fill it */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label>
                Leave this field empty
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-white/80">Name *</span>
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-white/80">Company</span>
              <input name="company" autoComplete="organization" className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-white/80">Country *</span>
              <input name="country" required autoComplete="country-name" className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-white/80">Email *</span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-white/80">Phone / WhatsApp</span>
              <input name="phone" type="tel" autoComplete="tel" className={field} />
            </label>
            <label className="block">
              <span className="text-sm text-white/80">Product of interest *</span>
              <select name="product" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Other / not sure yet">Other / not sure yet</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-white/80">Estimated volume</span>
              <input
                name="volume"
                placeholder="e.g. 1 x 20ft container, 10 tonnes per month"
                className={field}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-white/80">Message</span>
              <textarea name="message" rows={5} className={field} />
            </label>

            <div className="sm:col-span-2">
              {status === "error" && (
                <p role="alert" className="mb-4 rounded-xl bg-red-50 p-3 text-red-800">
                  {error} You can also email or WhatsApp us using the details below.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-ink hover:bg-white disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
