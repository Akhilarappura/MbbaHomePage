import React from 'react'
import './Main.css'
import About from './About'
import MostCountry from './MostCountry.jsx'
import Choose from './Choose.jsx'
import SliderNew from './Slider.jsx'
import Box from './Box.jsx'
import Footer from '../Footer/Footer.jsx'
import Submit from './Submit.jsx'
import Gallery from './Gallery.jsx'

export default function Main() {
  return (
    <div className="main-container">
      <div className='image-first'>
        <img src="/path-to-your-image.jpg" alt="Main image" className="image" />
      </div>
      
      <div className="content-overlay">
        <section className="section">
          <About />
        </section>
        
        <section className="section">
          <MostCountry />
        </section>
        
        <section className="section">
          <Choose />
        </section>
        
        <section className="section">
          <SliderNew />
        </section>
        
        <section className="section">
          <Box />
        </section>
        
        <section className="section">
          <Submit />
        </section>
        
        <section className="section">
          <Gallery />
        </section>
        
        <section className="section">
          <Footer />
        </section>
      </div>
    </div>
  )
}

