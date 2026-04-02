import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Code2, Layout, Server, Layers, ShoppingCart, RefreshCcw, Rocket, Building2, Briefcase, GraduationCap } from "lucide-react";
import TechnologiesUsed from './TechnologiesUsed';

const whatWeOffer = [
  { 
    icon: <Code2 size={32} className="text-emerald-500"/>, title: "Custom Website Development", color: "text-emerald-400",
    desc: "We build tailor-made websites aligned with your brand identity and business goals — no templates, no compromises" 
  },
  { 
    icon: <Layout size={32} className="text-sky-500"/>, title: "Front-End Development", color: "text-sky-400",
    desc: "Pixel-perfect, responsive, and user-friendly interfaces using modern technologies to ensure smooth user experience across all devices" 
  },
  { 
    icon: <Server size={32} className="text-amber-500"/>, title: "Back-End Development", color: "text-amber-400",
    desc: "Robust server-side development with secure APIs, databases, and business logic that power your application efficiently" 
  },
  { 
    icon: <Layers size={32} className="text-orange-500"/>, title: "Full-Stack Web Development", color: "text-orange-400",
    desc: "End-to-end development combining front-end and back-end technologies for complete, scalable web solutions" 
  },
  { 
    icon: <ShoppingCart size={32} className="text-green-500"/>, title: "E-Commerce Development", color: "text-green-400",
    desc: "High-performance online stores with secure payment gateways, product management, and conversion-optimized user flows" 
  },
  { 
    icon: <RefreshCcw size={32} className="text-violet-500"/>, title: "Website Redesign & Optimization", color: "text-violet-400", 
    desc: "Upgrade outdated websites with modern UI/UX, improved performance, and SEO-friendly architecture" 
  }
]

const whyChooseUs = [
  { icon: "🧹", text: "Clean, scalable, and maintainable code" },
  { icon: "⚡", text: "Fast loading & SEO-Optimized Websites" },
  { icon: "📱", text: "Mobile-first and Responsive Design" },
  { icon: "🔒", text: "Secure Development Practices" },
  { icon: "🛠️", text: "Dedicated Support & Maintenance" },
  { icon: "🗓️", text: "On-time delivery with transparent communication" },
];

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
      <header className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc-900 py-10 px-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="flex flex-col justify-center text-center space-y-2">
          <h2 className="ff text-3xl font-bold text-white">🌐 Web <span className="text-amber-400">Development</span> Services</h2>
        
          <p className="text-white/60 text-lg leading-relaxed">
          We design and develop modern, secure, and scalable websites that help businesses establish a strong digital presence. 
          Whether you need a corporate website, a custom web application, or a high-converting landing page, our web development 
          solutions are crafted to deliver speed, usability, and results.
          </p>
        </div>

        {/* Image */}
        <img src="/images/web_development.jpg" alt="" className="w-full lg:h-full h-full sm:h-72 object-cover rounded-lg" />
      </header>

      {/*🚀 What We Offer */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
       
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">What We Offer</p>
          <h2 className="ff text-3xl text-white">🌐 Web <span className="text-amber-400">Development</span> Services</h2>
          <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
          {whatWeOffer.map((item, index) => (

            <div 
              key={index} 
              className="border-2 border-white/50 hover:border-sky-400/50 text-white/60 space-y-3 rounded-2xl p-5 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/5">

              <div>{item.icon}</div>
              <h3 className={`ff text-xl font-semibold my-2 ${item.color}`}>{item.title}</h3>
              <p className="">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    <TechnologiesUsed/>

      {/* Why Choose US */} 
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">Why Choose Us for <span className="text-amber-400">Web Development?</span></h2>
          <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-6">
         {whyChooseUs.map((why, index) => (

          <li 
            key={index} 
            className="border-2 border-white/50 bg-white/5 p-4 flex flex-col items-center rounded-xl hover:border-orange-400/50 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">

            <span className="text-3xl">{why.icon}</span>
            <span className="text-white/60 text-center">{why.text}</span>
          </li>
         ))}
        </ul>
      </section>

      {/* Industries We Serve */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">🏢 Industries We <span className="text-amber-400">Serve?</span></h2>
          <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {industries.map((serve, index) => (

            <div 
              key={index} 
              className="border-2 border-white/50 bg-white/5 p-4 flex flex-col items-center rounded-xl hover:border-emerald-400/50 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">

              <div className="text-3xl flex flex-col items-center">{serve.icon}</div>
              <div className="text-white/60 text-center text-lg">{serve.title}</div>
            </div>
          ))}
        </div>

      </section>
      
      {/* CTA */}
      <section className="bg-zinc-900 py-12">
        <div 
          style={{background:"linear-gradient(to top, #9333ea, #2563eb)"}} 
          className="flex flex-col items-center border-2 border-white rounded-xl py-7 px-5 md:mx-20 text-center space-y-5">

          <p className="text-3xl font-bold text-white">📞 Let’s Build Your Digital Presence</p>

          <p className="text-lg text-white">Ready to turn your idea into a powerful web solution? <br />
           Let’s build a website that works for your business—not just looks good</p>

          <a href="/contact" className="bg-white text-blue-700 font-semibold p-3 rounded-lg">Contact Us Today</a>
        </div>
      </section>
    <FooterTwo/>
    </>
  )
}

export default WebDevelopment