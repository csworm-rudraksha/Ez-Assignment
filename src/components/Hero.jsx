import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Instrument+Sans:wght@400;500;600&family=Crimson+Text:ital@0;1&display=swap');
        
        .handwriting-font {
          font-family: 'Island Moments', cursive;
        }
        
        .body-font {
          font-family: 'Instrument Sans', sans-serif;
        }
        
        .serif-font {
          font-family: 'Crimson Text', serif;
        }
        
        .texture-bg {
          background-color: #FFF8F0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 157, 125, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 157, 125, 0.03) 0%, transparent 50%);
        }
      `}</style>

      <section className="hero-page texture-bg body-font">
        <main className="hero-main">
          <div className="hero-section">
            {/* Top Left - Sticky Note with Clip */}
            <div className="sticky-note-container">
              <img 
                src="/assets/images/Group 9.png" 
                alt="Sticky Note" 
                className="sticky-note-img"
              />
            </div>

            {/* Left Side - Building/Gate Icon */}
            <div className="gate-container">
              <img 
                src="/assets/images/136881584_562ce9a4-ee1d-4be1-8b12-5b603ee14c6b 1.png" 
                alt="Gateway Monument"
                className="gate-image"
              />
            </div>

            {/* Arrow 1 - Bottom left to center - Branding Experts */}
            <div className="branding-arrow">
              <img 
                src="/assets/vectors/Vector.svg" 
                alt=""
                className="arrow-img"
                aria-hidden="true"
              />
              <div className="branding-label handwriting-font">
                Branding Experts
              </div>
            </div>

            {/* Center - Silhouettes */}
            <div className="silhouettes-container">
              <img 
                src="/assets/vectors/Group 2.svg"
                alt="Team silhouettes"
                className="silhouettes-img"
              />

              {/* Film Makers */}
              <div className="filmmakers-label handwriting-font">
                Film Makers
              </div>

              {/* Arrow to Film Makers */}
              <div className="filmmakers-arrow">
                <img 
                  src="/assets/vectors/Vector (1).svg"
                  alt=""
                  className="arrow-img"
                  aria-hidden="true"
                />
              </div>

              {/* Art Curators */}
              <div className="artcurators-label handwriting-font">
                Art Curators
              </div>

              {/* Arrow to Art Curators */}
              <div className="artcurators-arrow">
                <img 
                  src="/assets/vectors/Vector (2).svg"
                  alt=""
                  className="arrow-img"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Bottom Center - CTA Section */}
            <div className="cta-container">
              <h2 className="cta-heading serif-font">
                Take a closer look at the stories V bring to life.
              </h2>
              <a href="#portfolio" className="cta-button">
                View Portfolio
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Hero

