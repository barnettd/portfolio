export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(61,217,245,0.1),rgba(255,255,255,0.025))] p-8 md:p-12 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.35em] text-[#3dd9f5]">Let's connect</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Let's start a conversation.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Whether you're exploring leadership hiring, consulting support, collaboration, or simply
              want to compare notes on product delivery — feel free to reach out or connect on LinkedIn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/daniel-barnett-uy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-white/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.19h.05C11.92 8.98 13.64 7.5 16.4 7.5 22.14 7.5 23 11.28 23 16.2V24h-4v-6.9c0-1.64-.03-3.75-2.28-3.75-2.28 0-2.63 1.78-2.63 3.63V24h-4V8Z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Download CV
              </a>
              <a
                href="#"
                className="rounded-full bg-[#3dd9f5] px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-[#7ae8f8]"
              >
                Schedule time
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal rounded-[1.5rem] border border-white/10 bg-[#08111d]/60 p-6 backdrop-blur-sm">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#3dd9f5]/40 focus:ring-1 focus:ring-[#3dd9f5]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can I help?"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#3dd9f5]/40 focus:ring-1 focus:ring-[#3dd9f5]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="A few lines about your project, role, or idea..."
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#3dd9f5]/40 focus:ring-1 focus:ring-[#3dd9f5]/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
