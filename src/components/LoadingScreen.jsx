import { useState, useEffect } from 'react'
import groomiLogo from '../assets/groomilogowhite.png'

function LoadingScreen({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false)
  const [showStatement, setShowStatement] = useState(false)
  const [visibleWords, setVisibleWords] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const statement = "Nalagam boljšo verzijo tebe..."
  const words = statement.split(' ')

  useEffect(() => {
    // Show logo immediately with fade-in
    setShowLogo(true)
    
    // Show statement after logo animation is completely finished (2s)
    const statementTimer = setTimeout(() => {
      setShowStatement(true)
    }, 2000)

    return () => clearTimeout(statementTimer)
  }, [])

  useEffect(() => {
    if (showStatement) {
      // Animate words one by one (faster - 1.5 seconds total)
      const wordInterval = setInterval(() => {
        setVisibleWords(prev => {
          const nextCount = prev + 1
          if (nextCount >= words.length) {
            clearInterval(wordInterval)
            // Wait 0.5 second after last word, then notify parent
            setTimeout(() => {
              if (typeof onComplete === 'function') {
                onComplete()
              }
            }, 500)
          }
          return nextCount
        })
      }, 1500 / words.length) // Total 1.5 seconds divided by number of words

      return () => clearInterval(wordInterval)
    }
  }, [showStatement, words.length, onComplete])

  useEffect(() => {
    if (showStatement) {
      // Animate loading bar
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2 // Increment by 2% every 30ms (total ~1.5s)
        })
      }, 30)

      return () => clearInterval(progressInterval)
    }
  }, [showStatement])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-groomiblue">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo with fade-in animation */}
        <div 
          className={`transition-opacity duration-[2000ms] ${
            showLogo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={groomiLogo}
            alt="Groomi Barbershop"
            className="h-96 w-auto"
          />
        </div>
        
        {/* Statement - word by word animation */}
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-8">
          <div className="text-2xl font-medium text-white text-center">
            {words.map((word, index) => {
              const isHighlighted = word === 'boljšo' || word === 'tebe...'
              return (
                <span
                  key={index}
                  className={`transition-opacity duration-300 ${
                    index < visibleWords ? 'opacity-100' : 'opacity-0'
                  } ${isHighlighted ? 'text-groomizenf' : ''}`}
                >
                  {word}
                  {index < words.length - 1 && ' '}
                </span>
              )
            })}
          </div>
          
          {/* Loading bar */}
          {showStatement && (
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-groomizenf transition-all duration-100 ease-out rounded-full"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
