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
    <div>
         <div className='image-first'>
  
      <About />
      <MostCountry />
      <Choose />
      <SliderNew />
      <Box />
      <Submit />
      <Gallery />
      <Footer />
    
     
    
    </div>
   
    </div>
  )
}
