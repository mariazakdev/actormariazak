// src/components/Nav.js
import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h3>Maria Zak</h3>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#modeling">Modeling</a></li>
        <li><a href="#dance">Dance</a></li>
        <li><a href="#acting">Acting</a></li>
        <li><a href="#circus">Circus</a></li>
        <li><a href="#demo-reels">Demo Reels</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social-media-icons">
        {/* Add social media icons here */}
      </div>
    </nav>
  );
};

export default Nav;
