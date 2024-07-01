import React from 'react';
import Acting from '../Acting/Acting';
import Modeling from '../Modeling/Modeling';
import Circus from '../Circus/Circus';
import DemoReels from '../DemoReels/DemoReels';
import Contact from '../Contact/Contact';
import Dance from '../Dance/Dance';

const Home = () => {
  return (
    <div className="home">
      <h1>Maria Zak Perfomance Site</h1>

         <div className="home-site">
      <Dance />
      <Modeling />
      <Circus />
      <Acting />
      <DemoReels />
      <Contact />
      
       </div>
    </div>
 
  );
};

export default Home;
