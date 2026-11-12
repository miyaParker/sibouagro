import { reasons } from "@/lib/why";

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="text-4xl font-medium sm:text-6xl">Why work with us</h2>
      <ul className="mt-12 grid border-t border-green-deep/40 sm:grid-cols-2">
        {reasons.map((r, i) => (
          <li key={r.title} className="border-b border-green-deep/40 py-8 sm:pr-10">
            <span className="text-sm font-medium text-gold-dark">0{i + 1}</span>
            <h3 className="mt-3 text-2xl font-medium text-green-deep">{r.title}</h3>
            <p className="mt-2 max-w-md text-ink/80">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
