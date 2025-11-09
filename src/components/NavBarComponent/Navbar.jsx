import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'varnan', 'ourstory', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 80 // Navbar height
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img 
            src="/assets/logo/VFilms Logo.png" 
            alt="VFilms Logo" 
            className="logo-img"
          />
        </div>

        <div className="navbar-right">
          <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
            <li>
              <a 
                href="#services" 
                className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('services')
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`navbar-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('portfolio')
                }}
              >
                Their Stories
              </a>
            </li>
            <li>
              <a 
                href="#ourstory" 
                className={`navbar-link ${activeSection === 'ourstory' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('ourstory')
                }}
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#varnan" 
                className={`navbar-link ${activeSection === 'varnan' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('varnan')
                }}
              >
                Varnan
              </a>
            </li>
            <li>
              <button 
                className="navbar-cta"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                Let's Talk
              </button>
            </li>
          </ul>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <img 
              src="/assets/Menu.svg" 
              alt="Menu" 
              className={`menu-icon menu-icon-menu ${isOpen ? 'hidden' : ''}`}
            />
            <img 
              src="/assets/Open.svg" 
              alt="Close menu" 
              className={`menu-icon menu-icon-open ${isOpen ? '' : 'hidden'}`}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

