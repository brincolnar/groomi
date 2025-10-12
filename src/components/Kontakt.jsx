import { useState, useEffect, useRef } from 'react'

function Kontakt() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const [buttonVisible, setButtonVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title
            setTitleVisible(true)
            
            // Animate subtitle after title
            setTimeout(() => setSubtitleVisible(true), 500)
            
            // Animate info items one by one
            setTimeout(() => setVisibleItems([0]), 800)
            setTimeout(() => setVisibleItems([0, 1]), 1100)
            setTimeout(() => setVisibleItems([0, 1, 2]), 1400)
            
            // Animate button
            setTimeout(() => setButtonVisible(true), 1700)
          } else {
            // Reset animations
            setTitleVisible(false)
            setSubtitleVisible(false)
            setVisibleItems([])
            setButtonVisible(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="kontakt" className="bg-white py-28 md:py-36 text-black">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className={`mb-6 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          <h2 className="text-3xl font-bold text-groomiblue md:text-5xl">
            Piči do <span className="text-groomizenf">Groomija</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`mb-16 transition-all duration-1000 ${
          subtitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
        }`}>
          <p className="text-xl text-neutral-600 max-w-3xl">
            V Groomi-ju te čakamo od ponedeljka do sobote. Rezerviraj, pokliči, piši ali samo stopi not — svež fade je vedno dobra ideja.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className={`flex items-start gap-6 transition-all duration-700 ${
              visibleItems.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-groomiblue-dark">
                <i className="fa-solid fa-location-dot text-groomizenf text-2xl" aria-hidden="true"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Lokacija</div>
                <div className="text-xl font-medium text-groomiblue">Ljubljanska 81<br />Domžale 1230</div>
              </div>
            </div>

            {/* Phone */}
            <div className={`flex items-start gap-6 transition-all duration-700 ${
              visibleItems.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-groomiblue-dark">
                <i className="fa-solid fa-phone text-groomizenf text-2xl" aria-hidden="true"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Telefon</div>
                <div className="text-xl font-medium text-groomiblue">+386 51 213 123</div>
              </div>
            </div>

            {/* Hours */}
            <div className={`flex items-start gap-6 transition-all duration-700 ${
              visibleItems.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-groomiblue-dark">
                <i className="fa-regular fa-clock text-groomizenf text-2xl" aria-hidden="true"></i>
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-1">Delovni čas</div>
                <div className="text-xl font-medium text-groomiblue leading-relaxed">
                  Ponedeljek - Petek: 9.00 - 18.00<br />
                  Sobota, Nedelja: 9.00 - 20.00
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-4 transition-all duration-700 ${
              buttonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <a
                href="http://form.lime-booking.com/sl/groomi"
                className="inline-flex items-center gap-3 rounded-lg bg-groomizenf px-8 py-4 text-lg font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
              >
                <span>Naroči se zdaj</span>
                <span aria-hidden="true" className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="h-[600px] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/10">
            <iframe
              title="Lokacija Groomi Barbershop"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ljubljanska%2081%2C%20Dom%C5%BEale%201230&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
