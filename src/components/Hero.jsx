import heroImage from '../assets/hero.jpg'
import heroWebp from '../assets/hero.webp'

function Hero() {
  return (
    <main className="relative overflow-hidden text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <picture>
          <source type="image/webp" srcSet={heroWebp} />
          <img
            src={heroImage}
            alt=""
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/50" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column: copy + reservation card below */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="mb-2 text-3xl font-semibold md:text-5xl">Profesionalna nega za sodobnega moškega</h1>
            <p className="max-w-xl text-md leading-6 text-neutral-200">
              Pri nas ne gre le za striženje – gre za celostno izkušnjo.
              Z vrhunskim znanjem, pozornostjo do detajlov in osebnim pristopom poskrbimo, da vsak moški izstopi
              samozavesten, urejen in sproščen.
            </p>

            {/* Rezervacija - below paragraph, left aligned */}
            <div id="rezervacija" className="w-full max-w-md mt-4">
              <div className="w-full rounded-xl bg-[#ebe1cc] p-6 text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-neutral-200 ring-1 ring-black/5">
                <div className="mb-4 text-center text-md text-neutral-900">Rezerviraj termin:</div>
                <form className="space-y-3">
                  <input type="text" placeholder="Ime" className="w-full rounded border border-neutral-900/40 bg-transparent px-3 py-2 text-neutral-900 placeholder-neutral-700" />
                  <input type="email" placeholder="Email" className="w-full rounded border border-neutral-900/40 bg-transparent px-3 py-2 text-neutral-900 placeholder-neutral-700" />
                  <input type="tel" placeholder="Telefon" className="w-full rounded border border-neutral-900/40 bg-transparent px-3 py-2 text-neutral-900 placeholder-neutral-700" />
                  <div className="flex items-center gap-3">
                    <input type="datetime-local" className="w-full rounded border border-neutral-900/40 bg-transparent px-3 py-2 text-neutral-900" />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
                    >
                      Rezerviraj
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero


