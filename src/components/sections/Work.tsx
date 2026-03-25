import { work } from '@/data/work'

export function Work() {
  const featured = work[0]
  const rest = work.slice(1)

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="reveal max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">Selected work</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Flagship product work.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Three representative examples of how I operate across multiplatform games, liveOps, design support,
          timelines, budgeting, premium digital products, and applied AI delivery.
        </p>
      </div>

      {/* Featured card */}
      <div className="reveal mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
        <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
          {/* Visual panel */}
          <div
            className="relative min-h-[26rem] p-6 md:p-8"
            style={{ background: `linear-gradient(135deg, ${featured.accentFrom}, ${featured.accentVia}, transparent)` }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.8rem] border border-white/10 bg-[#08111d]/50 p-6 backdrop-blur-sm">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3dd9f5]">{featured.eyebrow}</p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/20 text-sm text-white font-['Clash_Display',sans-serif]">01</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Concept → LiveOps', 'Web + App Stores', 'Players at scale', 'Content + Support'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-center text-xs uppercase tracking-[0.18em] text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs text-slate-300">
                {featured.metricCards.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-2 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{featured.title}</h3>
            <p className="mt-3 text-xl leading-8 text-slate-300">{featured.subtitle}</p>
            <p className="mt-6 text-base leading-8 text-slate-400">{featured.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {featured.bullets.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3dd9f5]" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-500">Multiplatform casual game still live today.</p>
              <a href={featured.linkHref} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#3dd9f5] transition hover:text-[#7ae8f8] hover:underline">
                {featured.linkLabel} ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary cards */}
      <div className="stagger-group mt-8 grid gap-8 xl:grid-cols-2">
        {rest.map((project, i) => (
          <div key={project.title} className="stagger-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
            {/* Visual header */}
            <div
              className="relative h-56 p-6 md:p-7"
              style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentVia}, transparent)` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_30%)]" />
              <div className="relative flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-[#08111d]/50 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3dd9f5]">{project.eyebrow}</p>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/20 text-sm text-white font-['Clash_Display',sans-serif]">0{i + 2}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs text-slate-300">
                  {project.metricCards.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-2 py-3">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mt-3 text-lg leading-8 text-slate-300">{project.subtitle}</p>
              <p className="mt-5 text-base leading-8 text-slate-400">{project.description}</p>
              <div className="mt-7 space-y-3">
                {project.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3dd9f5]" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-500">External reference.</p>
                <a href={project.linkHref} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#3dd9f5] transition hover:text-[#7ae8f8] hover:underline">
                  {project.linkLabel} ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
