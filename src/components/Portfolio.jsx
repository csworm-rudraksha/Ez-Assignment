import React from 'react'
import '../styles/Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-page">
      <article className="portfolio-content">
        <div className="portfolio-left">
          <img 
            src="/assets/images/Cam Group.svg" 
            alt="Camera Group" 
            className="cam-group-img"
          />
        </div>
        <div className="portfolio-center">
          <img 
            src="/assets/images/Frame 20 (1).png" 
            alt="Frame" 
            className="frame-img"
          />
          <img 
            src="/assets/images/Group 11.png" 
            alt="Group" 
            className=""
          />
        </div>
        {/* <div className="portfolio-right">
          <img 
            src="/assets/images/Vector.png" 
            alt="Vector" 
            className="vector-img"
          />
        </div> */}
      </article>
    </section>
    
  )
}

export default Portfolio

