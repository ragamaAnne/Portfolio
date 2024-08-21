import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './Contact';
import Home from './Home';
import Cv from './Cv';
import GraphicDesign from './GraphicDesign';
import Web from './Web';
import Software from './Software'

function App () {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Software" element={<Software />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
