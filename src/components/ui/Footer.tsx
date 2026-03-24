export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-['Clash_Display',sans-serif] text-base font-semibold text-white">Daniel Barnett</p>
          <p className="mt-1">IT Delivery Leader · Games · AI · Blockchain</p>
        </div>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/danielbarnett" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="mailto:daniel@barnettd.com" className="transition hover:text-white">Email</a>
          <a href="#" className="transition hover:text-white">CV</a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Daniel Barnett</p>
      </div>
    </footer>
  )
}
