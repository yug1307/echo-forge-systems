import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import ContactUs from './components/ContactUs.jsx';

import WebDevelopment from './services/WebDevelopment.jsx';
import CyberSecurity from './services/CyberSecurity.jsx';
import SaaS from './services/SaaS.jsx';
import IoT from './services/IoT.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/cyber-security" element={<CyberSecurity />} />
      <Route path="/saas" element={<SaaS />} />
      <Route path="/iot" element={<IoT />} />
    </Routes>
  </BrowserRouter>
)
