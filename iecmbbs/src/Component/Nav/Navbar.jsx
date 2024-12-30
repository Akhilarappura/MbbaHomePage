import React, { useState } from 'react';
import './Navbar.css';
import Header from '../Header/Header';
import New from '../New/New';

export default function Navbar() {

  const [hoveredItem, setHoveredItem] = useState(null);


  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };


  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='nav'>
      <ul className="nav-ul">
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          Home
          {hoveredItem === 'home' && (
            <div className="hover-content">
            <New />
            </div>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          About Us
          {hoveredItem === 'about' && (
            <div className="hover-content">
          
            </div>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('country')}
          onMouseLeave={handleMouseLeave}
        >
          Country
          {hoveredItem === 'country' && (
            <div className="hover-content">
             
            </div>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('country')}
          onMouseLeave={handleMouseLeave}
        >
      University
          {hoveredItem === 'country' && (
            <div className="hover-content">
            
            </div>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('country')}
          onMouseLeave={handleMouseLeave}
        >
          Gallery
          {hoveredItem === 'country' && (
            <div className="hover-content">
         
            </div>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('country')}
          onMouseLeave={handleMouseLeave}
        >
          Contact Us
          {hoveredItem === 'country' && (
            <div className="hover-content">
    
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
