import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Cpu, Cloud, Factory, ShieldCheck, Smartphone, LayoutDashboard, Activity, Wifi, Microchip, 
  Wrench, MapPin, Gauge, Settings, Lightbulb, Mic, Brain, BarChart3, CloudUpload, Database, 
  Zap, Lock, Fingerprint, RefreshCcw, Command, ShieldAlert } from 'lucide-react'
import IotTechnologies from './IotTechnologies'

const services = [
  { 
    id: 1, icon: <Cpu size={32} className="text-green-500"/>, title: "Custom IoT Application Development", 
    desc: "We build secure and scalable IoT applications that connect devices, sensors, and platforms seamlessly",
    includes: [
      { icon: <Wifi className="text-sky-500"/>, text: "Device connectivity & communication" },
      { icon: <Activity className="text-green-500"/>, text: "Real-time data processing" },
      { icon: <LayoutDashboard className="text-purple-500"/>, text: "Cloud & dashboard integration" },
      { icon: <Microchip className="text-amber-500"/>, text: "API development" }
    ]
  },
  { 
    id: 2, icon: <Factory size={32} className="text-red-500"/>, title: "Industrial IoT (IIoT) in association with Industrial Revolution 4.0", 
    desc: "Transform manufacturing and industrial operations with smart automation and predictive analytics",
    includes: [
      { icon: <Settings className="text-sky-500"/>, text: "Machine health monitoring" },
      { icon: <Wrench className="text-violet-500"/>, text: "Predictive maintenance" },
      { icon: <MapPin className="text-green-500"/>, text: "Asset tracking" },
      { icon: <Gauge className="text-red-500"/>, text: "Production optimization" }
    ]
  },
  { 
    id: 3, icon: <Smartphone size={32} className="text-sky-500"/>, title: "Smart Solutions (Home & Enterprise)", 
    desc: "Enable smart environments through connected devices and automation systems",
    includes: [
      { icon: <Lightbulb className="text-amber-500"/>, text: "Smart lighting & energy management" },
      { icon: <Command className="text-rose-500"/>, text: "Access control systems" },
      { icon: <Zap className="text-amber-500"/>, text: "Environmental monitoring" },
      { icon: <Mic className="text-green-500"/>, text: "Smart office automation" }
    ]
  },
  { 
    id: 4, icon: <Cloud size={32} className="text-gray-500"/>, title: "IoT Cloud & Data Analytics", 
    desc: "We help you collect, store, analyze, and visualize IoT data for better decision-making",
    includes: [
      { icon: <CloudUpload className="text-gray-500"/>, text: "AWS IoT / Google Cloud" },
      { icon: <BarChart3 className="text-green-500"/>, text: "Real-time dashboards" },
      { icon: <Brain className="text-rose-500"/>, text: "AI-powered analytics" },
      { icon: <Database className="text-green-500"/>, text: "Data Visualization" }
    ]
  },
  { 
    id: 5, icon: <ShieldCheck size={32} className="text-blue-500"/>, title: "IoT Security & Device Management", 
    desc: "Protect your IoT ecosystem with enterprise-grade security and centralized control",
    includes: [
      { icon: <Fingerprint className="text-blue-500"/>, text: "Device authentication & encryption" },
      { icon: <Lock className="text-amber-500"/>, text: "Secure firmware updates (OTA)" },
      { icon: <RefreshCcw className="text-green-500"/>, text: "Remote device management" },
      { icon: <ShieldAlert className="text-blue-500"/>, text: "Threat monitoring" }
    ]
  }
]

const IoT = () => {
  return (
    <> 
    <Topbar/>
      <header className="bg-yellow-200 py-10 px-5 text-center space-y-4">
        <h2 className="text-3xl font-bold">🌐 Internet of Things (IoT) Solutions</h2>
        
        <p className="text-lg">
          At <span className="font-semibold">Echo Forge Systems</span>, we design and deploy <span className="font-semibold">end-to-end 
          IoT solutions</span> that help businesses monitor, automate, and optimize operations in real time. From smart devices to
          cloud-based analytics, we turn physical data into actionable insights.
        </p>
      </header>

      {/* 🔧 Our IOT Services */}
      <section className="bg-slate-600 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-sky-400 text-center">🔧 Our IOT Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {services.map((service, index) => (

            <div 
              key={index} 
              className="bg-white space-y-3 rounded-lg p-5 transition hover:-translate-y-2">

              <div className="flex flex-col items-center">{service.icon}</div>
              <h3 className="text-xl text-center font-semibold">{service.title}</h3>
              <p className="text-center">{service.desc}</p>
              
              <ul className="text-left space-y-2">
                {service.includes.map((feat, index) => (
                  
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
      <section className="bg-lime-200 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-center">🚀 Why Choose Us for IoT?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto text-left lg:text-center text-lg">
          <li>✔ End-to-end IoT expertise</li>
          <li>✔ Scalable & future-ready architecture</li>
          <li>✔ Secure by design</li>
          <li>✔ Industry 4.0 compliant solutions</li>
          <li>✔ Dedicated support & maintenance</li>
        </ul>
      </section>
    <IotTechnologies/>
    <FooterTwo/>
    </>
  )
}

export default IoT