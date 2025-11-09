import React from 'react'
import '../styles/AboutUs.css'

const AboutUs = () => {
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
      `}</style>

      <div id="ourstory" className="aboutus-page body-font">
        <main className="aboutus-main">
          <section className="aboutus-section">
            {/* LEFT CONTENT */}
            <div className="aboutus-left">
              <h2 className="aboutus-heading serif-font">
                A montage of familiar faces and names.
              </h2>
              <p className="aboutus-description">
                Some stories come from the biggest names.
                Others begin with bold, rising voices.
                We've been fortunate to walk alongside both –
                listening, creating, and building stories that matter.
              </p>

              {/* Yellow Cards */}
              <div className="cards-container">
                <div className="card card-1">
                  <img src="/assets/images/Frame 9.png" alt="Frame 1" className="card-img" />
                </div>
                <div className="card card-2">
                  <img src="/assets/images/Frame 22.png" alt="Frame 2" className="card-img" />
                </div>
                <div className="card card-3">
                  <img src="/assets/images/Frame 23.png" alt="Frame 3" className="card-img" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="aboutus-right">
              {/* Handwriting Quote */}
              <div className="quote-text handwriting-font">
                Every project is more than just a brief –
                it's a new chapter waiting to be written.
                Together, we've crafted tales that inspire,
                connect, and endure.
              </div>

              {/* Brand Logos Placeholder */}
              <div className="circular-container">
                <img src="/assets/images/Group 10.png" alt="Brand Logos" className="circular-img" />
              </div>

              {/* Mountain + Circular Image Placeholder */}
              <div className="mountain-container">
                <img src="/assets/images/OBJECTS.png" alt="Mountain" className="mountain-img" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default AboutUs

