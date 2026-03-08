import { Braces, Brain, Cloud, Code, Cpu, LayoutDashboard, Microchip, Network, Radio, 
  Server, Terminal, Wifi } from 'lucide-react'
import React from 'react'

const technologies = [
  { icon: <Radio size={35}/>, title: "MQTT" }, 
  { icon: <Wifi size={35}/>, title: "CoAP"}, 
  { icon: <Network size={35}/>, title: "HTTP/HTTPS" },
  { icon: <Cpu size={35}/>, title: "Raspberry Pi" }, 
  { icon: <Microchip size={35}/>, title: "Arduino"}, 
  { icon: <Microchip size={35}/>, title: "ESP32" },
  { icon: <Cloud size={35}/>, title: "AWS IoT" },
  { icon: <Server size={35}/>, title: "Google Cloud IoT" },
  { icon: <Terminal size={35}/>, title: "Node.js" },
  { icon: <Code size={35}/>, title: "Python" },
  { icon: <Braces size={35}/>, title: "Java" },
  { icon: <LayoutDashboard size={35}/>, title: "React" },
  { icon: <Brain size={35}/>, title: "AI & Machine Learning Integration" }
]

const IotTechnologies = () => {
  return (
    <section className="bg-stone-800 py-10 px-5 space-y-6">
     <h2 className="text-3xl font-bold text-center text-white">🛠️ Technologies We Use</h2>

     <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 max-w-6xl mx-auto gap-6">
      {technologies.map((tech, index) => (

        <div 
          key={index} 
          className="flex flex-col items-center bg-white p-4 rounded-xl transition hover:-translate-y-2">

          <div className="text-blue-600">{tech.icon}</div> 
          <div className="text-xl text-center font-semibold">{tech.title}</div>
        </div>
      ))}
     </div>
    </section>
  )
}

export default IotTechnologies