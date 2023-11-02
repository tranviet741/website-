import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="About" element={<About />} /> 
      <Route path="store" element={<OurStore />} /> 
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
