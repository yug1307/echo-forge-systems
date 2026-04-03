import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { FaNetworkWired, FaShieldAlt, FaLock, FaCloud, FaBug, FaTools,
  FaHospital, FaShoppingCart, FaBuilding, FaRocket } from 'react-icons/fa'

const whatWeOffer = [
  { 
    id: 1, color: "text-emerald-400", icon: <FaNetworkWired size={32} className="text-emerald-500"/>, title: "Network Security",
    desc: [`We secure your network infrastructure by identifying vulnerabilities, implementing firewalls, 
      intrusion detection systems, and monitoring traffic to prevent unauthorized access and attacks`],
    includes: [
      { dot: "bg-emerald-300", text: "Firewall configuration" },
      { dot: "bg-emerald-300", text: "Network monitoring" },
      { dot: "bg-emerald-300", text: "Intrusion detection & prevention" },
      { dot: "bg-emerald-300", text: "Secure network architecture" } 
    ]
  },
  { 
    id: 2, color: "text-sky-400", icon: <FaShieldAlt size={32} className="text-sky-500"/>, title: "Application Security", 
    desc: [`Protect your web and mobile applications from common vulnerabilities like SQL injection, 
      XSS, CSRF, and more through secure coding practices and regular security testing`],
    includes: [
      { dot: "bg-sky-300", text: "Secure code review" },
      { dot: "bg-sky-300", text: "Vulnerability assessment" },
      { dot: "bg-sky-300", text: "Penetration testing" },
      { dot: "bg-sky-300", text: "API security" }
    ]
  },
  { 
    id: 3, color: "text-amber-400", icon: <FaLock size={32} className="text-yellow-400"/>, title: "Data Protection & Encryption", 
    desc: [`Your data is your most valuable asset. We ensure sensitive business and customer data is 
      encrypted, securely stored, and protected from leaks or theft`],
    includes: [
      { dot: "bg-amber-300", text: "Data encryption" },
      { dot: "bg-amber-300", text: "Secure backups" },
      { dot: "bg-amber-300", text: "Access control management" },
      { dot: "bg-amber-300", text: "Data loss prevention (DLP)" }
    ]
  },
  { 
    id: 4, color: "text-emerald-400", icon: <FaCloud size={32} className="text-emerald-500"/>, title: "Cloud Security", 
    desc: [`We secure your cloud infrastructure across AWS, Azure, and Google Cloud by implementing 
      best practices, access controls, and continuous monitoring`],
    includes: [
      { dot: "bg-emerald-300", text: "Cloud Security Audits" },
      { dot: "bg-emerald-300", text: "Identity & Access Management (IAM)" },
      { dot: "bg-emerald-300", text: "Secure Cloud Configurations" },
      { dot: "bg-emerald-300", text: "Threat Detection & Response" }
    ]
  },
  {     
    id: 5, color: "text-sky-400", icon: <FaBug size={32} className="text-sky-500"/>, title: "Vulnerability Assessment & Penetration Testing (VAPT)", 
    desc: [`We proactively identify security weaknesses in your systems before attackers do, helping you fix vulnerabilities early`],
    includes: [
      { dot: "bg-sky-300", text: "Manual & automated testing" },
      { dot: "bg-sky-300", text: "Network monitoring" },
      { dot: "bg-sky-300", text: "Security recommendations" },
      { dot: "bg-sky-300", text: "Compliance support" }
    ]
  },
  { 
    id: 6, color: "text-amber-400", icon: <FaTools size={32} className="text-amber-500"/>, title: "Incident Response & Recovery", 
    desc: [`In case of a cyber incident, our team responds quickly to minimize damage, recover systems, and prevent future attacks`],
    includes: [
      { dot: "bg-amber-300", text: "Incident investigation" },
      { dot: "bg-amber-300", text: "Malware removal" },
      { dot: "bg-amber-300", text: "System recovery" },
      { dot: "bg-amber-300", text: "Post-incident security hardening" }
    ]
  },
]

const whyChooseUs = [
  { icon: "🛡️", text: "Industry-standard security practices" },
  { icon: "👨‍💻", text: "Experienced cyber security professionals" },
  { icon: "📡", text: "Proactive threat monitoring" },
  { icon: "⚙️", text: "Customized security solutions" },
  { icon: "📋", text: "Compliance-ready approach (ISO, GDPR, etc.)" },
];

const whoWeServe = [
  { icon: <FaRocket className="text-sky-400"/>, title: "Startups & SMEs" },
  { icon: <FaBuilding className="text-indigo-400"/>, title: "Enterprises" },
  { icon: <FaShoppingCart className="text-emerald-400"/>, title: "E-commerce platforms" },
  { icon: <FaHospital className="text-rose-400"/>, title: "Financial & healthcare organizations" },
  { icon: <FaCloud className="text-cyan-400"/>, title: "SaaS & cloud-based businesses" }
]

const CyberSecurity = () => {
  return (
    <>
    <Topbar/> 
      <header className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc-900 py-10 px-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="flex flex-col justify-center text-center space-y-2">
          <h2 className="ff text-3xl font-bold text-white">🔐 Cyber <span className="text-amber-400">Security</span> Services</h2>
        
          <p className="text-white/60 text-lg leading-relaxed">
          In today’s digital landscape, cyber threats are constantly evolving. Our Cyber Security services 
          are designed to safeguard your business from data breaches, cyberattacks, malware, and 
          unauthorized access—ensuring your systems, networks, and data remain secure 24/7.
          </p>
        </div>

        {/* Image */}
        <img src="/images/cyber-security.png" alt="" className="w-full lg:h-full h-full sm:h-72 object-cover rounded-lg" />
      </header>

      {/* What We Offer */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">What We Offer</p>
          <h2 className="ff text-3xl text-white">🔐 Cyber <span className="text-amber-400">Security</span> Services</h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whatWeOffer.map((offer, index) => (

            <div 
              key={index} 
              className="border-2 border-white/50 hover:border-sky-400/50 text-white/60 space-y-3 rounded-2xl p-5 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/5">

              <div className="flex flex-col items-center">{offer.icon}</div>
              <h3 className={`ff text-xl text-center font-semibold ${offer.color}`}>{offer.title}</h3>
              <p className="text-center">{offer.desc}</p>
              
              <ul className="text-left space-y-2">
                {offer.includes.map((feat, index) => (
                  
                  <li key={index} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${feat.dot}`}></span>
                    <span className="">{feat.text}</span>
                  </li> 
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Why Choose Us for IoT? */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">Why Choose Us for <span className="text-amber-400">Cyber Security?</span></h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-8xl mx-auto gap-6">
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

      {/* 🏢 Who We Serve? */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">🏢 Who We <span className="text-amber-400">Serve?</span></h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whoWeServe.map((serve, index) => (

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
          className="flex flex-col items-center rounded-xl py-7 px-5 md:mx-20 text-center space-y-5">

          <p className="text-3xl font-bold text-white">🔐 Secure Your Business Before It's Too Late</p>

          <p className="text-lg text-white">Cyber threats don't wait — and neither should you. <br />
          Let's build a security strategy that protects your data, systems, and reputation 24/7.</p>

          <a href="/contact" className="bg-white text-blue-700 font-semibold p-3 rounded-lg">Get a Free Security Audit</a>
        </div>
      </section>
    <FooterTwo/>
    </>
  )
}

export default CyberSecurity