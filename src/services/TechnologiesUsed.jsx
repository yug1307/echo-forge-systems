import React from 'react'
import { FaAws, FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { CloudIcon, Server, Database, Cpu, Boxes, HardDrive, GitBranch } from "lucide-react";

const frontEnd = [
  { icon: <FaHtml5 size={35}/>, title: "HTML" },
  { icon: <FaCss3Alt size={35}/>, title: "CSS" },
  { icon: <FaJs size={35}/>, title: "JavaScript" },
  { icon: <FaReact size={35}/>, title: "React" }
]

const backEnd = [
  { icon: <Server size={35}/>, title: "Node.js" },
  { icon: <Cpu size={35}/>, title: "Express.js" },
  { icon: <Boxes size={35}/>, title: "Java/SpringBoot" }
]

const databases = [
  { icon: <Database size={35}/>, title: "MongoDB" },
  { icon: <HardDrive size={35}/>, title: "MySQL" }
]

const deployMent = [
  { icon: <CloudIcon size={35}/>, title: "Cloud Hosting" },
  { icon: <GitBranch size={35}/>, title: "CI/CD Pipelines" },
  { icon: <FaAws size={35}/>, title: "AWS" }
]

const TechnologiesUsed = () => {
  return ( 
    <section className="bg-stone-800 py-10 px-5 space-y-6">
      <h2 className="text-3xl font-bold text-center text-white">🧠 Technologies We Use</h2>
        
      {/* Frontend */}
      <h3 className="text-white text-2xl text-center">Front End</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-6">
        {frontEnd.map((front, index) => (

          <div 
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-xl transition hover:-translate-y-2">
                
            <div className="text-blue-600">{front.icon}</div> 
            <div className="text-xl font-semibold">{front.title}</div>
          </div>
        ))}
      </div>

      {/* Backend */}
      <h3 className="text-white text-2xl text-center">Back End</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-6">
        {backEnd.map((back, index) => (

          <div 
            key={index} 
            className="flex flex-col items-center bg-white p-4 rounded-xl transition hover:-translate-y-2">
              
            <div className="text-blue-600">{back.icon}</div> 
            <div className="text-xl font-semibold">{back.title}</div>
          </div>
        ))}
      </div>

      {/* Databases */}
      <h3 className="text-white text-2xl text-center">Databases</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6">
        {databases.map((db, index) => (

          <div 
            key={index} 
            className="flex flex-col items-center bg-white p-4 rounded-xl transition hover:-translate-y-2">
              
            <div className="text-blue-600">{db.icon}</div> 
            <div className="text-xl font-semibold">{db.title}</div>
          </div>
        ))}
      </div>

      {/* Deployment & DevOps */}
      <h3 className="text-white text-2xl text-center">Deployment & DevOps</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-6">
        {deployMent.map((deploy, index) => (

          <div 
            key={index} 
            className="flex flex-col items-center bg-white p-4 rounded-xl transition hover:-translate-y-2">
              
            <div className="text-blue-600">{deploy.icon}</div> 
            <div className="text-xl font-semibold">{deploy.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesUsed