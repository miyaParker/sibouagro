import Image from "next/image";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

const nav = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why us" },
];

export default function Footer() {
  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone / WhatsApp", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
    { label: "Based in", value: `${site.city}, ${site.country}` },
  ];

  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-green-deep text-white/90"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 100% 0%, rgba(224,169,22,0.22), transparent 70%), radial-gradient(60% 50% at 0% 100%, rgba(140,210,100,0.16), transparent 70%), linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Request a quote
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] sm:text-5xl">
              Ready to place an order?{" "}
              <span className="text-white/55">
                Tell us the product and volume you need and we will send availability and pricing.
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink hover:bg-white"
              >
                Email us
              </a>
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-medium hover:bg-white/10"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-md sm:p-8">
            <ul className="divide-y divide-white/15">
              {rows.map((r) => (
                <li key={r.label} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm text-white/60">{r.label}</p>
                  {r.href ? (
                    <a href={r.href} className="mt-1 block text-xl font-medium hover:text-gold sm:text-2xl">
                      {r.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-xl font-medium sm:text-2xl">{r.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-12 sm:mt-24 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-horizontal-white.png"
              alt="Sibou Agro Ltd"
              width={1389}
              height={546}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Agro-processing and trading from Nigeria, supplying local and export buyers.
            </p>
          </div>
          <nav aria-label="Company">
            <h3 className="text-sm font-medium text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Products">
            <h3 className="text-sm font-medium text-white">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {products.map((p) => (
                <li key={p.slug}>
                  <a href="#products" className="hover:text-gold">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Connect">
            <h3 className="text-sm font-medium text-white">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/15 py-6 text-sm text-white/65">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
