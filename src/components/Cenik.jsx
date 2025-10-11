import { useState } from 'react'

const priceList = [
  { name: 'Buzz cut', price: '20€' },
  { name: 'Striženje', price: '35€' },
  { name: 'Striženje + beard trim', price: '50€' },
  { name: 'Premium care', price: '70€' },
]

const testimonials = [
  {
    quote:
      'Nisem več šel drugam, odkar sem odkril ta barbershop. Ekipa je friendly, styling pa tak, da se vedno počutim samozavestno.',
    author: 'Matej',
  },
  {
    quote:
      'Profesionalni, natančni in vedno nasmejani. Vsak obisk je mini reset za moj stil.',
    author: 'Luka',
  },
  {
    quote:
      'Od prvega termina naprej me poznajo po imenu in to šteje. Super vzdušje in top storitev.',
    author: 'Žan',
  },
]

function Cenik() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="cenik" className="bg-groomiblue py-28 md:py-36 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Cenik</h2>
            <ul className="mt-10 space-y-6 text-sm uppercase tracking-wide text-white">
              {priceList.map((item) => (
                <li key={item.name} className="flex items-center justify-between border-b border-white/30 pb-3">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-lg bg-groomizenf p-10 shadow-sm">
              <p className="text-sm leading-6 text-groomiblue">{testimonial.quote}</p>
              <div className="mt-8 text-sm font-semibold text-groomiblue">{testimonial.author}</div>

              <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={'h-0.5 w-10 ' + (index === activeIndex ? 'bg-groomiblue' : 'bg-groomizenf-dark')}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-groomizenf-dark text-lg text-groomizenf-dark hover:bg-groomizenf-dark"
                  aria-label="Prejšnja izjava"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-groomizenf-dark text-lg text-groomizenf-dark hover:bg-groomizenf-dark"
                  aria-label="Naslednja izjava"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cenik
