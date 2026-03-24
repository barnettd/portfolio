import { highlights } from '@/data/highlights'

export function Highlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
      <div className="stagger-group grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="stagger-card rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#3dd9f5]/25 hover:bg-white/[0.06]"
          >
            <div className="font-['Clash_Display',sans-serif] text-2xl font-semibold text-white">{item.value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[#3dd9f5]">{item.label}</div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
