import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <h3>Maria Zak</h3>
        </div>
        <button className="nav-toggle" onClick={handleToggle}>
          {isOpen ? 'X' : 'Menu'}
        </button>
        <ul className="nav-links">
          <li><a href="#home" onClick={handleToggle}>Home</a></li>
          <li><a href="#modeling" onClick={handleToggle}>Modeling</a></li>
          <li><a href="#dance" onClick={handleToggle}>Dance</a></li>
          <li><a href="#acting" onClick={handleToggle}>Acting</a></li>
          <li><a href="#circus" onClick={handleToggle}>Circus</a></li>
          <li><a href="#demo-reels" onClick={handleToggle}>Demo Reels</a></li>
          <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
        </ul>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
