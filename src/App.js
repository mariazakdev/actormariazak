import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Modeling from './pages/Modeling/Modeling';
import Dance from './pages/Dance/Dance';
import Acting from './pages/Acting/Acting';
import Circus from './pages/Circus/Circus';
import DemoReels from './pages/DemoReels/DemoReels';
import Contact from './pages/Contact/Contact';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeling" element={<Modeling />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/circus" element={<Circus />} />
          <Route path="/demo-reels" element={<DemoReels />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
