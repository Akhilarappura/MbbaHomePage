import React from 'react'
import georgia from '../../assets/georgia.jpeg'
import uzbek from '../../assets/uzbek.jpeg'
import ukraine from '../../assets/ukraine.jpeg'
import china from '../../assets/china.jpeg'
import bangladesh from '../../assets/bangladesh.jpeg';
import russia from '../../assets/russia.jpg';
import kazakhistan from '../../assets/kazakhistan.jpg';
import kyrgystan from '../../assets/kyrgystan.jpg';
import armenia from '../../assets/armenia.jpeg';
import philippines from '../../assets/philippines.jpeg';
import moldova from '../../assets/moldova.jpg';
import poland from '../../assets/poland.jpg'
import './MostCountri.css'

export default function MostCountry() {
    const Countries=[
        {
            name: 'Georgia',
            title: 'MBBS in Georgia',
            description: 'Georgia is one of the best places to pursue a carrier in MBBS.',
            image: georgia,
            buttonText: 'Read About Georgia'
        },
        {
            name: 'UZBEKISTAN',
            title: 'MBBS in UZBEKISTAN',
            description: 'UZBEKISTAN is one of the best places to pursue a carrier in MBBS.',
            image: uzbek,
            buttonText: 'Read About UZBEKISTAN'
        },
        {
            name: 'UKRAINE',
            title: 'MBBS in UKRAINE',
            description: 'UKRAINE is one of the best places to pursue a carrier in MBBS.',
            image: ukraine,
            buttonText: 'Read About UKRAINE'
        },
        {
            name: 'CHINA',
            title: 'MBBS in CHINA',
            description: 'CHINA is one of the best places to pursue a carrier in MBBS.',
            image: china,
            buttonText: 'Read About CHINA'
        },
        {
            name: 'BANGLADESH',
            title: 'MBBS in BANGLADESH',
            description: 'BANGLADESH is one of the best places to pursue a carrier in MBBS.',
            image: bangladesh,
            buttonText: 'Read About BANGLADESH'
        },
        {
            name: 'RUSSIA',
            title: 'MBBS in RUSSIA',
            description: 'RUSSIA is one of the best places to pursue a carrier in MBBS.',
            image: russia,
            buttonText: 'Read About RUSSIA'
        }, 
        {
            name: 'KAZAKHISTAN',
            title: 'MBBS in KAZAKHISTAN',
            description: 'KAZAKHISTAN is one of the best places to pursue a carrier in MBBS.',
            image: kazakhistan,
            buttonText: 'Read About KAZAKHISTAN'
        }, 
        {
            name: 'KYRGYSTAN',
            title: 'MBBS in KYRGYSTAN',
            description: 'KYRGYSTAN is one of the best places to pursue a carrier in MBBS.',
            image: kyrgystan,
            buttonText: 'Read About KYRGYSTAN'
        }, 
        {
            name: 'ARMENIA',
            title: 'MBBS in ARMENIA',
            description: 'ARMENIA is one of the best places to pursue a carrier in MBBS.',
            image: armenia,
            buttonText: 'Read About ARMENIA'
        }, 
        {
            name: 'PHILIPPINES',
            title: 'MBBS in PHILIPPINES',
            description: 'PHILIPPINES is one of the best places to pursue a carrier in MBBS.',
            image: philippines,
            buttonText: 'Read About PHILIPPINES'
        }, 
        {
            name: 'MOLDOVA',
            title: 'MBBS in MOLDOVA',
            description: 'MOLDOVA is one of the best places to pursue a carrier in MBBS.',
            image: moldova,
            buttonText: 'Read About MOLDOVA'
        }, 
        {
            name: 'POLAND',
            title: 'MBBS in POLAND',
            description: 'POLAND is one of the best places to pursue a carrier in MBBS.',
            image: poland,
            buttonText: 'Read About POLAND'
        }, 
       
    ]
  return (
    <div className='main-header'>
    <div className="countries-header">
    <p className="header-subtitle">COUNTRIES WE OFFER SUPPORT</p>
    <h2 className="header-title">Most Popular Countries</h2>
    <p className="header-description">Get MBBS admission with top medical universities with us</p>
  </div>
    <div className="countries-container">
   

    <div className="countries-grid">
      {Countries.map((country, index) => (
        <div key={index} className="country-card">
          <div className="image-container">
            <img src={country.image} alt={country.name} className="country-image" />
    
          </div>
          <div className="card-content">
            <h3 className="card-title">{country.title}</h3>
            <p className="card-description">{country.description}</p>
            <button className="read-more-btn">{country.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}
