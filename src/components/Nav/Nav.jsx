// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Maria Zak Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/modeling">Modeling</Link></li>
        <li><Link to="/dance">Dance</Link></li>
        <li><Link to="/acting">Acting</Link></li>
        <li><Link to="/circus">Circus</Link></li>
        <li><Link to="/demo-reels">Demo Reels</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="social-media-icons">
        {/* Add social media icons here */}
      </div>
    </nav>
  );
};

export default Nav;
