import { useState, useEffect, useRef } from 'react'
import heroImage from '../assets/hero.jpg'
import heroWebp from '../assets/hero.webp'
import plantwallImage from '../assets/congogreen.png'
import heroVideo from '../assets/groomiherovideo.mp4'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [showParagraph, setShowParagraph] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const fullText = 'Premium grooming izkušnja.'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            // Reset when scrolling away
            setIsVisible(false)
            setDisplayedText('')
            setShowParagraph(false)
            setShowCursor(true)
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

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          // Hide cursor after typing is complete
          setShowCursor(false)
          // Show paragraph after typing is complete
          setTimeout(() => {
            setShowParagraph(true)
          }, 300)
        }
      }, 80) // 80ms per character

      return () => clearInterval(typingInterval)
    }
  }, [isVisible])

  return (
    <main id="hero" ref={sectionRef} className="relative overflow-hidden text-white h-screen">
      <div aria-hidden="true" className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-radial from-black/60 via-black/85 to-black to-90%" aria-hidden="true"></div>
      <div className="relative z-10 h-full flex items-center mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-6 w-full">
          <h1 className="mb-2 text-[42px] font-semibold md:text-[70px] leading-tight min-h-[110px] md:min-h-[140px]">
            {displayedText.split(' ').map((word, index) => {
              const isHighlighted = word === 'Premium' || word === 'izkušnja.'
              return (
                <span key={index}>
                  {isHighlighted ? (
                    <span className="text-groomizenf">{word}</span>
                  ) : (
                    word
                  )}
                  {index < displayedText.split(' ').length - 1 && ' '}
                </span>
              )
            })}
            {showCursor && <span className="animate-pulse">|</span>}
          </h1>
          <p 
            className={`text-[25px] leading-9 text-white transition-all duration-1000 ${
              showParagraph 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Strokovna natančnost, nepozabna atmosfera. Vsak obisk je ritual, ki te bo navdušil.
          </p>
          
          <div className={`transition-all duration-1000 delay-300 ${
            showParagraph 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="http://form.lime-bookin g.com/sl/groomi"
              className="inline-flex items-center gap-3 rounded-lg bg-groomizenf px-8 py-4 text-lg font-bold text-black shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
            >
              <span>Naroči se zdaj</span>
              <span aria-hidden="true" className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero


