import React, { Suspense } from 'react';
import Topbar from './components/Topbar';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from "./components/FAQ"; 
import FooterTwo from './components/FooterTwo'
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <>
    <Topbar/>  
    <Hero/>
    <Services/>
    <WhyChooseUs/>
    <FAQ />
    <FooterTwo/>
    </>
  )
}

export default App
