import React from 'react'
import './Image.css'
import main from '../../assets/main.jpg'

export default function Image() {
  return (
    <div className='image-first'>
      <img className='image' src={main}  />
      {/* <img className='image' src='https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2023/04/homebanner2.jpg'/> */}
    </div>
  )
}
