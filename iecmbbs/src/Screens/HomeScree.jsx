import React from 'react'
import About from '../Component/Main/About'
import MostCountry from '../Component/Main/MostCountry'
import Choose from '../Component/Main/Choose'
import SliderNew from '../Component/Main/Slider'
import Box from '../Component/Main/Box'
import Submit from '../Component/Main/Submit'
import Gallery from '../Component/Main/Gallery'

export default function HomeScree() {
  return (
    <div>
          <About />
      <MostCountry/>
      <Choose/>
      <SliderNew/>
      <Box/>
      <Submit/>
      <Gallery/>
      <Footer/>
    
    </div>
  )
}
