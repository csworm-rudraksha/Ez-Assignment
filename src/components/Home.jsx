import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Instrument+Sans:wght@400;500;600;700&family=Halant:wght@400;500;600;700&display=swap');
        
        .tagline-font {
          font-family: 'Island Moments', cursive;
        }
        
        .body-font {
          font-family: 'Instrument Sans', sans-serif;
        }
      `}</style>

      <section id="home" className="home-section body-font">
        <main className="home-main">
          <section className="home-content">
            {/* Left Side - Logo with Mandala */}
            <div className="mandala-wrapper">
              <div className="mandala-background">
                <img
                  src="/assets/images/Hero Mandala.png"
                  alt="Mandala"
                  className="mandala-image"
                />
              </div>
              <div className="logo-overlay">
                <img
                  src="/assets/logo/VFilms Logo.png"
                  alt="VFilms"
                  className="vfilms-logo"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <article className="content-section">
              <div className="tagline-container">
                <h1 className="tagline-font">
                  Varnan is where stories find their voice and form
                </h1>
              </div>

              <div className="services-container">
                <span>Films</span>
                <span className="dot">.</span>
                <span>Brands</span>
                <span className="dot">.</span>
                <span>Art</span>
              </div>

              <p className="description-text">
                Since 2009, V've been telling stories - stories of people, their
                journeys, and the places that shape them. Some begin in polished
                boardrooms, others in humble village squares. But every story
                starts the same way - by listening with intention. V believes it
                takes trust, patience, and an eye for the unseen to capture what
                truly matters. V doesn't just tell stories - V honors them.
              </p>
            </article>
          </section>
        </main>
      </section>
    </>
  )
}

export default Home

