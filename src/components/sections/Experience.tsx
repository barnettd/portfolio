import { timeline, operatingSystem, processChips } from '@/data/timeline'

export function Experience() {
  return (
    <>
      {/* Timeline */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="section-hidden max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">Trajectory</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A timeline of expansion across roles, products, and technologies.
          </h2>
        </div>

        {/* Connecting line (desktop) */}
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-px bg-gradient-to-r from-transparent via-[#3dd9f5]/25 to-transparent xl:block" />

          <div className="grid gap-6 xl:grid-cols-4">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="timeline-card relative rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#3dd9f5]/20"
              >
                {/* Number bubble */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#3dd9f5]">{item.era}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3dd9f5]/30 bg-[#08111d] font-['Clash_Display',sans-serif] text-sm text-[#3dd9f5]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating System */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="section-hidden max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">Operating system</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hands-on, iterative planning — supported by real feedback loops.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            My strongest value shows up where complexity, communication, and momentum need to coexist.
            That means process, but also judgment; tools, but also relationships; plans, but also the
            ability to adapt them without losing the goal.
          </p>
        </div>

        <div className="stagger-group mt-12 grid gap-6 lg:grid-cols-2">
          {operatingSystem.map((item) => (
            <div key={item.title} className="stagger-card rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
              <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Tool chips */}
        <div className="section-hidden mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            {processChips.map((chip) => (
              <span
                key={chip}
                className="chip-cascade rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-slate-300 transition hover:border-[#3dd9f5]/30 hover:text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
