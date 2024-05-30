import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Service from'../src/components/Service';
import About from'../src/components/About';
import Contact from'../src/components/Contact';
import Skill from '../src/components/Skill'
import Home from '../src/components/Home'
// import Button from'../src/components/Button';
import Jwellery from './components/Jwellery';
import ProductDetails from './components/ProductDetails';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />}/> 
        <Route path="/Skill" element={<Skill />}/>
        <Route path="/Jwellery" element={<Jwellery />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        
        
      
        {/* <Route path="/Button" elements={<Button/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
