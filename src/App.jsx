import React, { useEffect } from 'react'
import Navbar from './components/NavBarComponent/Navbar'
import Home from './components/Home'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './styles/App.css'

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-header')
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home" className="page-section">
          <Home />
        </section>

        <section id="varnan" className="page-section">
          <Hero />
        </section>

        <section id="ourstory" className="page-section">
          <AboutUs />
        </section>

        <section id="services" className="page-section">
          <Services />
        </section>

        <section id="portfolio" className="page-section">
          <Portfolio />
        </section>

        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App

