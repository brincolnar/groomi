import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Kontakt from './components/Kontakt.jsx'
import Gallery from './components/Gallery.jsx'
import Cenik from './components/Cenik.jsx'
import Ekipa from './components/Ekipa.jsx'
import Footer from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <Hero />
      <Cenik />
      <Ekipa />
      <Gallery />
      <Kontakt />
      <Footer />
    </div>
  )
}

export default App
