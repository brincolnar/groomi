import groomiLogoWhite from '../assets/groomilogowhite.png'

function Footer() {
  return (
    <footer className="bg-groomiblue text-white py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/groomi"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-groomizenf transition-colors"
            >
              <i className="fa-brands fa-instagram text-xl" aria-hidden="true"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-groomizenf transition-colors"
            >
              <i className="fa-brands fa-linkedin-in text-xl" aria-hidden="true"></i>
            </a>
          </div>

          {/* Right: Logo + Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <img src={groomiLogoWhite} alt="Groomi Barbershop" className="h-12 w-auto" />
            <div className="text-xs text-white/70 text-center md:text-right">
              <div>Ljubljanska 81, Domžale 1230</div>
              <div>+386 51 213 123</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/70 mt-4">
          © {new Date().getFullYear()} Groomi. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  )
}

export default Footer
