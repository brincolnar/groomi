import groomiLogo from '../assets/groomilogo.png'

function Footer() {
  return (
    <footer className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <div className="border-t border-neutral-300 pt-3 mt-2">
          <div className="grid grid-cols-1 gap-4 text-sm leading-6 md:grid-cols-3">
            <div className="space-y-1 text-neutral-700">
              <div className="space-y-0.5 leading-5">
                <div>Ljubljanska cesta 13, Domžale</div>
                <div>sandri@groomibarbershop.com</div>
                <div>+386 51 213 123</div>
              </div>

              <div className="mt-4 flex gap-3 text-neutral-600">
                <a
                  href="https://instagram.com/groomi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Groomi"
                  className="transition-colors hover:text-neutral-900"
                >
                  <i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Groomi"
                  className="transition-colors hover:text-neutral-900"
                >
                  <i className="fa-brands fa-linkedin-in text-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <img src={groomiLogo} alt="Groomi logo" className="h-25 w-auto" />
              <div className="text-xs text-neutral-600">Copyright © {new Date().getFullYear()} Groomi. Vse pravice pridržane.</div>
            </div>

            <div className="flex flex-col items-start gap-2 text-neutral-700 md:items-end">
              <div className="leading-5">
                <div>Pon - Pet: 8.00 - 18.00</div>
                <div>Sob - Ned: 8.00 - 20.00</div>
              </div>
              <a
                href="http://form.lime-booking.com/sl/groomi"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_18px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
              >
                <span className="text-sm font-medium tracking-wide">Naroči se</span>
                <span aria-hidden="true" className="text-base">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
