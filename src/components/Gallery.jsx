import { useEffect, useState, useRef } from 'react'
import haircut1 from '../assets/haircut1.jpg'
import haircut2 from '../assets/haircut2.jpg'
import haircut3 from '../assets/haircut3.jpg'
import haircut4 from '../assets/haircut4.jpg'
import haircut5 from '../assets/haircut5.jpg'
import haircut6 from '../assets/haircut6.jpg'
import haircut7 from '../assets/haircut7.jpg'
import haircut8 from '../assets/haircut8.jpg'

const galleryItems = [
  { id: 0, src: haircut1, alt: 'Galerija fotografija 1', size: 'large' },
  { id: 1, src: haircut2, alt: 'Galerija fotografija 2', size: 'medium' },
  { id: 2, src: haircut3, alt: 'Galerija fotografija 3', size: 'medium' },
  { id: 3, src: haircut4, alt: 'Galerija fotografija 4', size: 'small' },
  { id: 4, src: haircut5, alt: 'Galerija fotografija 5', size: 'large' },
  { id: 5, src: haircut6, alt: 'Galerija fotografija 6', size: 'small' },
  { id: 6, src: haircut7, alt: 'Galerija fotografija 7', size: 'medium' },
  { id: 7, src: haircut8, alt: 'Galerija fotografija 8', size: 'large' },
]

function Gallery() {
  const [activeItem, setActiveItem] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const [visibleWords, setVisibleWords] = useState(0)
  const [titleVisible, setTitleVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const titleWords = ["Proof", "We", "Don't", "Miss"]

  // Title typing animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true)
            setVisibleWords(0)
            
            // Type words one by one
            titleWords.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords(index + 1)
              }, index * 300) // 300ms between words
            })
          } else {
            setTitleVisible(false)
            setVisibleWords(0)
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

  // Stacking animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and sequentially reveal items with stacking effect
            setVisibleItems([])
            galleryItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 150 + 1200) // Start after title animation (4 words * 300ms)
            })
          } else {
            // Reset when scrolling away
            setVisibleItems([])
          }
        })
      },
      { threshold: 0.2 }
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

  // Modal management
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

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-2'
      case 'small':
        return 'md:col-span-1'
      default:
        return 'md:col-span-1'
    }
  }

  return (
    <section ref={sectionRef} id="galerija" className="bg-groomiblue py-28 md:py-36 text-white overflow-hidden">
      <div ref={titleRef} className="mx-auto max-w-7xl px-4 mb-16">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`transition-opacity duration-500 ${
                index < visibleWords ? 'opacity-100' : 'opacity-0'
              } ${word === 'Miss' ? 'text-groomizenf' : ''}`}
            >
              {word}
              {index < titleWords.length - 1 && ' '}
            </span>
          ))}
        </h2>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className={`group relative overflow-hidden transition-all duration-700 ${getSizeClass(item.size)} ${
                visibleItems.includes(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              } hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-groomizenf`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                decoding="async" 
                className="block h-full w-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
