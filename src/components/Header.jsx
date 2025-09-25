import groomiLogo from '../assets/groomilogo.png'

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-3 items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={groomiLogo} alt="Groomi logo" className="h-[104px] w-auto invert brightness-0" />
          </div>

          {/* Nav */}
          <nav className="hidden md:block justify-self-center">
            <div className="flex items-center gap-6 rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/15">
              <a href="#" className="rounded bg-white/20 px-2 py-1">Domov</a>
              <a href="#" className="px-2 py-1">Ponudba</a>
              <a href="#" className="px-2 py-1">Kontakt</a>
              <a href="#" className="px-2 py-1">Ekipa</a>
            </div>
          </nav>

          {/* CTA */}
          <div className="justify-self-end">
            <a
              href="#rezervacija"
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-[#fca95c] px-5 py-2 text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f99949] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fca95c]/40"
            >
              <span className="text-base font-medium tracking-wide">Naroči se</span>
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
