import { stats } from "@/lib/stats";

export default function Stats() {
  return (
    <section aria-label="At a glance" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
            <dd className="order-1 text-6xl font-normal tracking-tighter text-green-deep sm:text-7xl">
              {s.value}
            </dd>
            <dt className="mt-4 max-w-[16rem] text-lg leading-snug text-ink/70">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
