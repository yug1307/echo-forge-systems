import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { FaNetworkWired, FaShieldAlt, FaLock, FaCloud, FaBug, FaTools, FaSyncAlt, FaMapMarkedAlt, FaSearch, FaBell, 
  FaDatabase, FaUserShield, FaHdd, FaKey, FaCode, FaExchangeAlt, FaVial, FaEye, FaProjectDiagram, FaClipboardCheck, 
  FaCog, FaExclamationTriangle, FaHospital, FaShoppingCart, FaBuilding, FaRocket } from 'react-icons/fa'

const whatWeOffer = [
  { 
    id: 1, icon: <FaNetworkWired size={32} className="text-green-500"/>, title: "Network Security", 
    desc: [`We secure your network infrastructure by identifying vulnerabilities, implementing firewalls, 
      intrusion detection systems, and monitoring traffic to prevent unauthorized access and attacks`],
    includes: [
      { icon: <FaShieldAlt/>, text: "Firewall configuration" },
      { icon: <FaEye/>, text: "Network monitoring" },
      { icon: <FaUserShield/>, text: "Intrusion detection & prevention" },
      { icon: <FaProjectDiagram/>, text: "Secure network architecture" } 
    ]
  },
  { 
    id: 2, icon: <FaShieldAlt size={32} className="text-sky-500"/>, title: "Application Security", 
    desc: [`Protect your web and mobile applications from common vulnerabilities like SQL injection, 
      XSS, CSRF, and more through secure coding practices and regular security testing`],
    includes: [
      { icon: <FaCode/>, text: "Secure code review" },
      { icon: <FaKey/>, text: "Vulnerability assessment" },
      { icon: <FaVial/>, text: "Penetration testing" },
      { icon: <FaExchangeAlt/>, text: "API security" }
    ]
  },
  { 
    id: 3, icon: <FaLock size={32} className="text-yellow-400"/>, title: "Data Protection & Encryption", 
    desc: [`Your data is your most valuable asset. We ensure sensitive business and customer data is 
      encrypted, securely stored, and protected from leaks or theft`],
    includes: [
      { icon: <FaHdd/>, text: "Data encryption" },
      { icon: <FaDatabase/>, text: "Secure backups" },
      { icon: <FaUserShield/>, text: "Access control management" },
      { icon: <FaLock/>, text: "Data loss prevention (DLP)" }
    ]
  },
  { 
    id: 4, icon: <FaCloud size={32} className="text-slate-400"/>, title: "Cloud Security", 
    desc: [`We secure your cloud infrastructure across AWS, Azure, and Google Cloud by implementing 
      best practices, access controls, and continuous monitoring`],
    includes: [
      { icon: <FaCloud />, text: "Cloud Security Audits" },
      { icon: <FaUserShield />, text: "Identity & Access Management (IAM)" },
      { icon: <FaCog />, text: "Secure Cloud Configurations" },
      { icon: <FaExclamationTriangle />, text: "Threat Detection & Response" }
    ]
  },
  {     
    id: 5, icon: <FaBug size={32} className="text-red-500"/>, title: "Vulnerability Assessment & Penetration Testing (VAPT)", 
    desc: [`We proactively identify security weaknesses in your systems before attackers do, helping you fix vulnerabilities early`],
    includes: [
      { icon: <FaVial />, text: "Manual & automated testing" },
      { icon: <FaEye/>, text: "Network monitoring" },
      { icon: <FaShieldAlt />, text: "Security recommendations" },
      { icon: <FaClipboardCheck />, text: "Compliance support" }
    ]
  },
  { 
    id: 6, icon: <FaTools size={32} className="text-green-500"/>, title: "Incident Response & Recovery", 
    desc: [`In case of a cyber incident, our team responds quickly to minimize damage, recover systems, and prevent future attacks`],
    includes: [
      { icon: <FaSearch/>, text: "Incident investigation" },
      { icon: <FaMapMarkedAlt/>, text: "Malware removal" },
      { icon: <FaSyncAlt/>, text: "System recovery" },
      { icon: <FaBell/>, text: "Post-incident security hardening" }
    ]
  },
]

const whoWeServe = [
  { icon: <FaRocket/>, title: "Startups & SMEs" },
  { icon: <FaBuilding/>, title: "Enterprises" },
  { icon: <FaShoppingCart/>, title: "E-commerce platforms" },
  { icon: <FaHospital/>, title: "Financial & healthcare organizations" },
  { icon: <FaCloud/>, title: "SaaS & cloud-based businesses" }
]

const CyberSecurity = () => {
  return (
    <>
    <Topbar/> 
      <header className="bg-yellow-200 py-10 px-5 text-center space-y-4">
        <h2 className="text-3xl font-bold">🔐 Cyber Security Services</h2>
        
        <p className="text-lg">
         In today’s digital landscape, cyber threats are constantly evolving. Our Cyber Security services 
         are designed to safeguard your business from data breaches, cyberattacks, malware, and 
         unauthorized access—ensuring your systems, networks, and data remain secure 24/7.
        </p>
      </header>

      <section className="bg-slate-600 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-sky-400 text-center">🛡️ What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whatWeOffer.map((offer, index) => (

            <div 
              key={index} 
              className="bg-white space-y-3 rounded-lg p-5 transition hover:-translate-y-2">

              <div className="flex flex-col items-center">{offer.icon}</div>
              <h3 className="text-xl text-center font-semibold">{offer.title}</h3>
              <p className="text-center">{offer.desc}</p>
              
              <ul className="text-left space-y-2">
                {offer.includes.map((feat, index) => (
                  
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xl">{feat.icon}</span>
                    <span>{feat.text}</span>
                  </li> 
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Why Choose Us for IoT? */}
      <section className="bg-lime-200 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">🚀 Why Choose Us for Cyber Security?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto text-left lg:text-center text-lg">
          <li>✔ Industry-standard security practices</li>
          <li>✔ Experienced cyber security professionals</li>
          <li>✔ Proactive threat monitoring</li>
          <li>✔ Customized security solutions</li>
          <li>✔ Compliance-ready approach (ISO, GDPR, etc.)</li>
        </ul>
      </section>

      {/* 🏢 Who We Serve? */}
      <section className="bg-cyan-400 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-center">🏢 Who We Serve?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whoWeServe.map((serve, index) => (

            <div 
              key={index} 
              className="bg-white space-y-3 rounded-lg p-5 transition hover:-translate-y-2">

                <div className="text-3xl flex flex-col items-center">{serve.icon}</div>
                <div className="text-center text-lg">{serve.title}</div>
            </div>
          ))}
        </div>
      </section>
    <FooterTwo/>
    </>
  )
}

export default CyberSecurity