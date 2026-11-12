import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
      <div data-reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-3xl text-4xl font-medium leading-[1.1] sm:text-6xl">
          Supplying local and export buyers with consistent-quality{" "}
          <span className="text-green-deep">Nigerian produce</span>.
        </h2>
        <a
          href="#products"
          className="self-start rounded-full bg-green-deep px-7 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-lg active:translate-y-0 active:scale-[0.97] sm:self-auto"
        >
          Our products
        </a>
      </div>
      <hr className="mt-12 border-green-deep/40" />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div data-reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Sibou Agro Ltd is an agro-processing and trading company based in Lagos, Nigeria. We
            process maize into corn grits and maize bran, and supply fresh, export-grade white yam.
          </p>
          <p>
            We work with local food manufacturers and farms, and with importers and grocers abroad.
            Our focus is consistent quality, order after order, and we are building our range of
            processed and fresh agro products.
          </p>
        </div>
        <div data-reveal style={{ "--d": "150ms" } as React.CSSProperties} className="group overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Woman sieving maize meal by hand on a woven tray"
          width={800}
          height={600}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        </div>
      </div>
    </section>
  );
}
