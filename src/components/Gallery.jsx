import { useEffect, useState } from 'react'
import haircut1 from '../assets/haircut1.jpg'
import haircut2 from '../assets/haircut2.jpg'
import haircut3 from '../assets/haircut3.jpg'
import haircut4 from '../assets/haircut4.jpg'
import haircut5 from '../assets/haircut5.jpg'
import haircut6 from '../assets/haircut6.jpg'
import haircut7 from '../assets/haircut7.jpg'
import haircut8 from '../assets/haircut8.jpg'

const galleryItems = [
  { id: 0, src: haircut1, alt: 'Galerija fotografija 1' },
  { id: 1, src: haircut2, alt: 'Galerija fotografija 2' },
  { id: 2, src: haircut3, alt: 'Galerija fotografija 3' },
  { id: 3, src: haircut4, alt: 'Galerija fotografija 4' },
  { id: 4, src: haircut5, alt: 'Galerija fotografija 5' },
  { id: 5, src: haircut6, alt: 'Galerija fotografija 6' },
  { id: 6, src: haircut7, alt: 'Galerija fotografija 7' },
  { id: 7, src: haircut8, alt: 'Galerija fotografija 8' },
]

function Gallery() {
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    if (activeItem === null) {
      document.body.style.removeProperty('overflow')
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.removeProperty('overflow')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeItem])

  return (
    <section id="galerija" className="bg-[#ebe1cc] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Stil, ki pove več kot besede</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative aspect-square w-full overflow-hidden rounded shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-500"
            >
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="block h-full w-full object-cover transform-gpu [backface-visibility:hidden] [image-rendering:auto]" />
              <span className="sr-only">{item.alt}</span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/80 px-4"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-sm font-medium text-neutral-900 shadow-md"
            >
              Zapri
            </button>

            <img src={activeItem.src} alt={activeItem.alt} className="w-full rounded shadow-xl" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
