import avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08111d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Wordmark */}
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#3dd9f5]/20 blur-md" />
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#3dd9f5]/50 shadow-[0_0_20px_rgba(61,217,245,0.3)]">
              <img src={avatar} alt="Daniel Barnett" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div>
            <p className="text-base font-semibold tracking-wide text-white">Daniel Barnett</p>
            <p className="text-xs text-slate-400">IT Delivery Leader · Games · AI · Blockchain</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          {['About', 'Work', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#3dd9f5] after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://linkedin.com/in/danielbarnett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-white/30 hover:text-white"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.19h.05C11.92 8.98 13.64 7.5 16.4 7.5 22.14 7.5 23 11.28 23 16.2V24h-4v-6.9c0-1.64-.03-3.75-2.28-3.75-2.28 0-2.63 1.78-2.63 3.63V24h-4V8Z" />
            </svg>
          </a>
          <a
            href="#"
            className="rounded-full bg-[#3dd9f5] px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-[#7ae8f8]"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
