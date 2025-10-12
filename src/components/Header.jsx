import { useState } from 'react'
import groomiLogo from '../assets/groomilogo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-3 items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={groomiLogo} alt="Groomi logo" className="h-[89px] w-auto invert brightness-0 md:h-[146px]" />
          </div>

          {/* Nav */}
          <nav className="hidden md:block justify-self-center">
            <div className="flex items-center gap-6 rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/15">
              <a href="#hero" className="rounded bg-white/20 px-2 py-1">Domov</a>
              <a href="#cenik" className="px-2 py-1">Ponudba</a>
              <a href="#kontakt" className="px-2 py-1">Kontakt</a>
              <a href="#ekipa" className="px-2 py-1">Ekipa</a>
            </div>
          </nav>

          {/* CTA + Language */}
          <div className="hidden justify-self-end md:flex items-center gap-4">
            <button
              onClick={() => alert('English translation coming soon!')}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-150 hover:bg-white/20"
            >
              <span className="text-base font-medium">ENG</span>
            </button>
            <a
              href="http://form.lime-booking.com/sl/groomi"
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-groomizenf px-5 py-2 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#ed570c] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fca95c]/40"
            >
              <span className="text-base font-medium tracking-wide">Naroči se</span>
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-2 top-4 z-30">
            <button
              type="button"
              aria-label="Odpri meni"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                {menuOpen ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="mt-2 rounded-lg bg-neutral-900/90 p-4 text-white shadow-lg backdrop-blur-md ring-1 ring-white/15 md:hidden">
            <div className="flex flex-col gap-2">
              <a href="#hero" className="rounded px-2 py-2 hover:bg-white/10" onClick={() => setMenuOpen(false)}>Domov</a>
              <a href="#cenik" className="rounded px-2 py-2 hover:bg-white/10" onClick={() => setMenuOpen(false)}>Ponudba</a>
              <a href="#kontakt" className="rounded px-2 py-2 hover:bg-white/10" onClick={() => setMenuOpen(false)}>Kontakt</a>
              <a href="#ekipa" className="rounded px-2 py-2 hover:bg-white/10" onClick={() => setMenuOpen(false)}>Ekipa</a>
              <a href="http://form.lime-booking.com/sl/groomi" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-[#fca95c] px-4 py-2 text-sm font-semibold text-neutral-900 shadow">Naroči se</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
