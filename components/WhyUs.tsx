import { reasons } from "@/lib/why";

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h2 data-reveal className="text-4xl font-medium sm:text-6xl">Why work with us</h2>
      <ul className="mt-12 grid border-t border-green-deep/40 sm:grid-cols-2">
        {reasons.map((r, i) => (
          <li key={r.title} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties} className="group border-b border-green-deep/40 py-8 sm:pr-10">
            <span className="inline-block text-sm font-medium text-gold-dark transition-transform duration-300 group-hover:scale-125">0{i + 1}</span>
            <h3 className="mt-3 text-2xl font-medium text-green-deep transition-transform duration-300 group-hover:translate-x-1.5">{r.title}</h3>
            <p className="mt-2 max-w-md text-ink/80">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
