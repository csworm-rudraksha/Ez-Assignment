import React from 'react'
import '../styles/Services.css'

const Services = () => {
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

      <div id="services" className="services-page texture-bg body-font">
        <header className="services-header">
          <div>
            <h1 className="services-title serif-font">
              The storyboard reveals the breadth of our craft
            </h1>
          </div>
          <div className="vector-container">
            <img src="/assets/vectors/Vector 5.svg" alt="" className="vector-img" />
          </div>
        </header>
        <main className="services-main">
          <div className="services-grid">
            <div className="service-item service-1">
              <div className="sticker sticker-1">
                <img src="/assets/images/servicesimg/image 6.png" alt="" className="sticker-img" />
              </div>
              <img src="/assets/images/servicesimg/Frame 31.png" alt="Service 1" className="service-img" />
            </div>
            <div className="service-item service-2">
              <div className="sticker sticker-2">
                <img src="/assets/images/servicesimg/image 6.png" alt="" className="sticker-img" />
              </div>
              <img src="/assets/images/servicesimg/Frame 31 (1).png" alt="Service 2" className="service-img" />
            </div>
            <div className="service-item service-3">
              <div className="sticker sticker-3">
                <img src="/assets/images/servicesimg/image 6.png" alt="" className="sticker-img" />
              </div>
              <img src="/assets/images/servicesimg/Frame 31 (2).png" alt="Service 3" className="service-img" />
            </div>
          </div>
        </main>
        <footer className="services-footer">
          <div>
            <img src="/assets/vectors/Frame 33.svg" alt="Border" className="border-img" />
          </div>
        </footer>
      </div>
    </>
  )
}

export default Services

