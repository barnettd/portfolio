import { beyondTracking } from '@/data/timeline'

export function About() {
  return (
    <>
      {/* Bio */}
      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.42fr_0.58fr] lg:px-10">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">About</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Executive enough to lead. Hands-on enough to move the work.
          </h2>
        </div>
        <div className="reveal space-y-6 text-lg leading-9 text-slate-300">
          <p>
            My career has been built across execution, growth, and reinvention. I've worked on more than 15 titles
            across my trajectory — not all of them became hits, but even the ones that didn't succeed became part
            of the learning systems that shaped the next stronger product.
          </p>
          <p>
            Over time, my role expanded well beyond classic project management. I've coordinated remote teams across
            time zones, supported dev operations and delivery workflows, connected creative and technical disciplines,
            worked with stakeholders and clients, and helped teams move from ambiguity into structured execution.
          </p>
          <p>
            A big part of what I'm proud of is impact at scale: helping ship games that have entertained millions
            of people across the world. Alongside that, I've been fortunate to work close to the edge of
            experimentation — from blockchain products used in campaigns by premium brands like Ducati and
            Lamborghini, to AI solutions solving real operational problems for businesses in the US.
          </p>
        </div>
      </section>

      {/* Beyond Tracking */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">It's not about tracking</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Project tracking is only the surface layer.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            What teams usually need most is not just someone to monitor tasks, but someone who can connect
            communication, judgment, decision making, timelines, scope, budget, priorities, people, and
            execution — and keep all of it moving in the same direction.
          </p>
        </div>
        <div className="stagger-group mt-12 grid gap-6 md:grid-cols-2">
          {beyondTracking.map((item) => (
            <div
              key={item.title}
              className="stagger-card group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-8 transition hover:border-[#3dd9f5]/25 hover:bg-white/[0.05]"
            >
              <div className="mb-6 h-[2px] w-12 rounded-full bg-[#3dd9f5]/60 transition-all group-hover:w-20" />
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
