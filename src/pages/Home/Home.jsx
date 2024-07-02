// src/components/Home.js
import React from 'react';
import Acting from '../Acting/Acting';
import Modeling from '../Modeling/Modeling';
import Circus from '../Circus/Circus';
import DemoReels from '../DemoReels/DemoReels';
import Contact from '../Contact/Contact';
import Dance from '../Dance/Dance';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>Maria Zak Performance Site</h1>
      <div className="home-site">
        <section id="home">
          <h2>Welcome to Maria Zak Performance Site</h2>
        </section>
        <section id="dance">
          <Dance />
        </section>
        <section id="modeling">
          <Modeling />
        </section>
        <section id="circus">
          <Circus />
        </section>
        <section id="acting">
          <Acting />
        </section>
        <section id="demo-reels">
          <DemoReels />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;

