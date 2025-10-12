

function Kontakt() {

  return (
    <section id="kontakt" className="bg-white py-28 md:py-36 text-black bg-cover">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left: title, paragraph, button */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold md:text-4xl">Striženje in oblikovanje brade, ki naredi razliko</h2>
            <p className="mt-6 max-w-md text-md leading-6 text-black">
              Če iščeš barbershop v Domžalah, kjer boš dobil več kot samo frizuro, si na pravem mestu.
              Nudimo popolno moško nego – od natančnega striženja do klasičnega britja z brivsko britvico.
            </p>
            <a
              href="#rezervacija"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-groomiblue-dark px-5 py-2 text-sm font-semibold text-groomizenf shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
            >
              <span className="text-base font-medium tracking-wide">Naroči se</span>
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>

          {/* Right: map and side details */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
              {/* Map embed */}
              <div className="md:col-span-2">
                <div className="h-96 w-full overflow-hidden rounded shadow-sm ring-1 ring-black/5">
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

              {/* Location + phone stacked */}
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-groomiblue-dark p-1.5">
                    <i className="fa-solid fa-location-dot text-groomizenf text-xl" aria-hidden="true"></i>
                  </div>
                  <div className="text-md">Ljubljanska 81<br />Domžale 1230</div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-groomiblue-dark p-2">
                    <i className="fa-solid fa-phone text-groomizenf text-xl" aria-hidden="true"></i>
                  </div>
                  <div className="text-md">+386 51 213 123</div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-groomiblue-dark p-2">
                    <i className="fa-regular fa-clock text-groomizenf text-xl" aria-hidden="true"></i>
                  </div>
              <div className="text-md leading-5 text-black">
                    <div>Ponedeljek - Petek:<br />9.00 - 18.00</div>
                    <div>Sobota, Nedelja:<br />9.00 - 20.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
