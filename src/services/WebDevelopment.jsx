import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Code2, Layout, Server, Layers, ShoppingCart, RefreshCcw, Rocket, Building2, Briefcase, GraduationCap } from "lucide-react";

import TechnologiesUsed from './TechnologiesUsed';

const whatWeOffer = [
  { 
    icon: <Code2 size={32} className="text-orange-500"/>, 
    title: "Custom Website Development", 
    desc: "We build tailor-made websites aligned with your brand identity and business goals — no templates, no compromises" 
  },
  { 
    icon: <Layout size={32} className="text-purple-500"/>, 
    title: "Front-End Development", 
    desc: "Pixel-perfect, responsive, and user-friendly interfaces using modern technologies to ensure smooth user experience across all devices" 
  },
  { 
    icon: <Server size={32} className="text-rose-500"/>, 
    title: "Back-End Development", 
    desc: "Robust server-side development with secure APIs, databases, and business logic that power your application efficiently" 
  },
  { 
    icon: <Layers size={32} className="text-amber-500"/>, 
    title: "Full-Stack Web Development", 
    desc: "End-to-end development combining front-end and back-end technologies for complete, scalable web solutions" 
  },
  { 
    icon: <ShoppingCart size={32} className="text-green-600"/>, 
    title: "E-Commerce Development", 
    desc: "High-performance online stores with secure payment gateways, product management, and conversion-optimized user flows" 
  },
  { 
    icon: <RefreshCcw size={32} className="text-violet-500"/>, 
    title: "Website Redesign & Optimization", 
    desc: "Upgrade outdated websites with modern UI/UX, improved performance, and SEO-friendly architecture" 
  }
]

const industries = [
  { icon: <Rocket size={32} className="text-red-500"/>, title: "Startups & Entrepreneurs" },
  { icon: <Building2 size={32} className="text-rose-500"/>, title: "Corporate & Enterprise Businesses" },
  { icon: <ShoppingCart size={32} className="text-orange-500"/>, title: "E-commerce Brands" },
  { icon: <Briefcase size={32} className="text-blue-500"/>, title: "Service-Based Companies" },
  { icon: <GraduationCap size={32} className="text-violet-500"/>, title: "Educational & Non-Profit Organizations" }
]

const WebDevelopment = () => { 
  return (
    <>
    <Topbar/>
      <header className="bg-yellow-200 py-10 px-5 text-center space-y-4">
        <h2 className="text-3xl font-bold">🌐 Web Development Services</h2>
        
        <p className="text-lg">
          We design and develop <span className="font-semibold">modern, secure, and 
          scalable websites</span> that help businesses establish a strong digital presence. 
          Whether you need a corporate website, a custom web application, or a high-converting 
          landing page, our web development solutions are crafted to deliver speed, usability, and results.
        </p>
      </header>

      {/*🚀 What We Offer */}
      <section className="bg-sky-500 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-center">🚀 What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
          {whatWeOffer.map((item, index) => (

            <div 
              key={index} 
              className="bg-white flex flex-col items-center text-center rounded-lg p-5 transition hover:-translate-y-2">

              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold my-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    <TechnologiesUsed/>

      {/* Why Choose US */}
      <section className="bg-emerald-200 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-center">💡 Why Choose Us?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-2 text-lg">
          <li>✔ Clean, scalable, and maintainable code</li>
          <li>✔ Fast loading & SEO-optimized websites</li>
          <li>✔ Mobile-first and responsive design</li>
          <li>✔ Secure development practices</li>
          <li>✔ Dedicated support & maintenance</li>
          <li>✔ On-time delivery with transparent communication</li>
        </ul>
      </section>

      {/* Industries We Serve */}
      <section className="bg-rose-200 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">📈 Industries We Serve</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
          {industries.map((ind, index) => (

            <div 
              key={index} 
              className="bg-gray-600 flex flex-col items-center space-y-2 rounded-lg p-5 transition hover:-translate-y-2">

              <div>{ind.icon}</div>
              <h3 className="text-xl text-white text-center font-semibold">{ind.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-10 px-5 text-center space-y-5">
        <p className="text-2xl text-white">📞 Let’s Build Your Digital Presence</p>

        <p className="text-lg text-green-500">Ready to turn your idea into a powerful web solution? <br />
        Contact us today and let’s build a website that works for your business—not just looks good</p>
      </section>
    <FooterTwo/>
    </>
  )
}

export default WebDevelopment