import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Topbar from './components/Topbar'
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from "./components/FAQ"; 
import FooterTwo from './components/FooterTwo'
import './App.css'
 
const service = [
  { title: "Web Development", desc: "Build High-Performance Websites That Drive Growth", icon: "💻", link: "/web-development" },
  { title: "Cyber Security", desc: "Protecting Your Digital Assets. Securing Your Future.", icon: "🔐", link: "/cyber-security" },
  { title: "Software as a Service (SaaS)", desc: "Build, Launch & Scale Powerful SaaS Products", icon: "☁️", link: "/saas" },
  { title: "Internet of Things (IoT)", desc: "Connecting Devices. Automating Intelligence. Powering the Future", icon: "🔌", link: "/iot" }
] 

function App() {
  return (
    <>
    <Topbar />  
    <Carousel/>
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-10 px-5">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-4xl font-bold text-purple-600">Empowering Businesses with Scalable IT Solutions</h2>

          <div className="text-lg text-gray-600">We Build Future-Ready Software, Websites, and Systems for Your Digital Success</div>
        </div>
      </section>

      {/* About */}
      <div className="bg-green-200 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">About Us</h2>

        <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto">
        At <span className="font-semibold text-indigo-600">Echo Forge Systems</span>, 
        we specialize in delivering innovative IT solutions tailored to meet the evolving 
        needs of businesses. From web and mobile development to cloud services, 
        cybersecurity, and digital transformation—we partner with you to turn 
        technology into a competitive advantage.
        </p>
      </div>

      {/* Services */}
      <section className="bg-sky-500 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4">
          {service.map((service, index) => (

            <div 
              key={index} 
              className="py-6 px-3 bg-white rounded-xl text-center hover:scale-105 transition">
              <div className="text-3xl">{service.icon}</div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <div className="text-md mb-3">{service.desc}</div>

              <Link to={service.link} className="inline-block bg-lime-600 w-40 rounded-md">
                <div className="text-white my-2 font-semibold">Get Now</div>
              </Link>
            </div>
          ))}
        </div>
      </section> 
    <WhyChooseUs/>
    <FAQ />
    <FooterTwo/>
    </>
  )
}

export default App
