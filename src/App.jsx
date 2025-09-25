import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Kontakt from './components/Kontakt.jsx'
import Gallery from './components/Gallery.jsx'
import Cenik from './components/Cenik.jsx'
import Ekipa from './components/Ekipa.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <Hero />
      <Kontakt />
      <Gallery />
      <Cenik />
      <Ekipa />
      <Footer />
    </div>
  )
}

export default App
