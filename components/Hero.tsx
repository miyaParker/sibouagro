import Image from "next/image";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export default function Hero() {
  const tags = [...products.map((p) => p.name), "More products coming"];
  return (
    <section id="top" className="p-3 sm:p-4">
      <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-3xl text-white/90 sm:min-h-[760px]">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-32 text-center">
          <h1 className="text-white/90 max-w-3xl text-4xl font-medium leading-[1.08] drop-shadow-md sm:text-7xl">
            Agro-processing and trading from Nigeria
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Quality produce for local and export buyers.
          </p>
          <a
            href="#contact"
            className="mt-8 rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-ink hover:bg-white"
          >
            Request a quote
          </a>
        </div>

        <div className="px-6 pb-6 sm:px-10 sm:pb-8">
          <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
            <p className="text-2xl font-medium sm:text-3xl">Rooted in quality and consistency.</p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2 border-t border-white/50 pt-5 text-sm">
            {tags.map((t) => (
              <li key={t} className="rounded-full border border-white/60 px-4 py-1.5">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
