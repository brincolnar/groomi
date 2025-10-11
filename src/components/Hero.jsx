import heroImage from '../assets/hero.jpg'
import heroWebp from '../assets/hero.webp'
import plantwallImage from '../assets/congogreen.png'

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
      <div className="absolute inset-0 opacity-55 bg-radial from-blue-700 to-blue-900 to-75%" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">



          {/* Left column: copy + reservation card below */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="mb-2 text-3xl font-semibold md:text-5xl"><span className="text-groomizenf">Profesionalna</span> nega za sodobnega <span className="text-groomizenf">moškega.</span></h1>
            <p className="max-w-xl text-md leading-6 text-neutral-200">
              Pri nas ne gre le za striženje – gre za celostno izkušnjo.
              Z vrhunskim znanjem, pozornostjo do detajlov in osebnim pristopom poskrbimo, da vsak moški izstopi
              samozavesten, urejen in sproščen.
            </p>

            {/* Rezervacija - below paragraph, left aligned */}
            <div id="rezervacija" className="w-full max-w-md mt-4">
                    <button
                      type="submit"
                      className="bg-groomizenf cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]  backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#ed570c] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fca95c]/40"
                    >
                      Rezerviraj
                    </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero


