import Image from "next/image";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-4xl font-medium sm:text-6xl">Our products</h2>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Current range. More processed and fresh products are on the way.
        </p>
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug} className="flex flex-col">
              <Image
                src={p.image}
                alt={p.imageAlt}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-5 text-2xl font-medium text-green-deep">{p.name}</h3>
              <p className="mt-2 text-ink/80">{p.description}</p>
              <p className="mt-4 text-sm">
                <span className="font-medium text-green-deep">Uses:</span> {p.uses.join(" · ")}
              </p>
              <p className="mt-1 text-sm">
                <span className="font-medium text-green-deep">Buyers:</span> {p.buyers}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
