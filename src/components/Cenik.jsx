import { useState, useEffect, useRef } from 'react'

const priceList = [
  { name: 'Frizura', price: '25€' },
  { name: 'Brada', price: '10€' },
  { name: 'Frizura + Brada', price: '30€' },
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
  const [visibleItems, setVisibleItems] = useState([])
  const [titleVisible, setTitleVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const testimonial = testimonials[activeIndex]

  // Animate title
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true)
          } else {
            setTitleVisible(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  // Animate price items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and sequentially reveal items with delay
            setVisibleItems([])
            priceList.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])])
              }, index * 300) // 300ms delay between each item
            })
          } else {
            // Reset when scrolling away
            setVisibleItems([])
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="cenik" ref={sectionRef} className="bg-stone-900 py-28 md:py-36 text-black">
      <div className="mx-auto max-w-6xl px-4">
        <div 
          ref={titleRef}
          className={`mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">Cenik <span className="text-groomizenf">storitev</span></h2>
          <p className="text-xl text-white/80 mt-4">Profesionalna nega za vsakega.</p>
        </div>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
          <div>
            <ul className="space-y-8">
              {priceList.map((item, index) => (
                <li 
                  key={item.name} 
                  className={`transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-12'
                  }`}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2 md:text-3xl">{item.name}</div>
                    <div className="text-4xl font-black text-groomizenf md:text-5xl">{item.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-lg bg-groomizenf p-10 shadow-sm">
              <p className="text-sm leading-6 text-black">{testimonial.quote}</p>
              <div className="mt-8 text-sm font-semibold text-black">{testimonial.author}</div>

              <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={'h-0.5 w-10 ' + (index === activeIndex ? 'bg-amber-900' : 'bg-groomizenf-dark')}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-900 text-lg text-amber-900 hover:bg-groomizenf-dark"
                  aria-label="Prejšnja izjava"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-900 text-lg text-amber-900 hover:bg-groomizenf-dark"
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
