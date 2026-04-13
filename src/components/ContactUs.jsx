import React from 'react'
import Topbar from './Topbar';
import FooterTwo from './FooterTwo';
import ContactForm from "./ContactForm"
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const contacts = [
  { icon: <Phone/>, label: "Phone", lines: ["+91 9322276364", "Mon - Fri | 9:00 AM -6:00 PM"] },
  { icon: <MapPin/>, label: "Office", lines: ["Sharda Colony, Gondia-441601"] },
  { icon: <Mail/>, label: "Email", lines: ["yugaanterd@gmail.com", "Generally replies within 24 hours"] },
];

const socials = [
  { label: <FaInstagram className="text-rose-500"/> },
  { label: <FaLinkedin className="text-sky-500"/> },
  { label: <FaWhatsapp className="text-green-500"/> },
  { label: <FaFacebook className="text-sky-500"/> },
];

const ContactUs = () => {
  return (
    <>
    <Topbar/>
    <section className="bg-zinc-950 text-white py-12 px-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff{font-family:'Fraunces',serif}`}</style>

      <div className="space-y-6">
        <div className="text-center">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">Reach Out</p>
          <h2 className="ff text-4xl md:text-5xl font-black">Get in <span className="text-amber-400">Touch</span></h2>
          <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto mt-5"/>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center">
          <div className="text-3xl">🚀</div>
          <h4 className="ff text-white font-black text-lg">Ready to build something great?</h4>
          <p className="text-white/45 leading-relaxed">We typically respond within 24 hours. Let's turn your idea into a scalable digital product.</p>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm/>
          
          {/* Contact */}
          <div className="bg-zinc-900 border-2 border-violet-500 rounded p-7 space-y-4">
            <h2 className="text-sky-400 text-2xl font-bold">Get in Touch</h2>

            <div className="space-y-6">
              {contacts.map(({icon,label,lines})=>(

                <div key={label} className="flex gap-4 items-start">

                  <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-xl shrink-0">{icon}</div>
                  <div>
                    <p className="text-white font-bold text-sm">{label}</p>
                    <p className={`text-sm ${label==="Email"?"text-sky-400":"text-white/80"}`}>{lines[0]}</p>
                    <p className="text-white/40 text-xs mt-0.5">{lines[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10"></div>

            <h2 className="text-white font-bold">Follow Us</h2>

            <div className="flex gap-3">
              {socials.map((media, idx)=>(
                <a key={idx} href="#" className="w-10 h-10 text-xl rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15">
                  {media.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterTwo/>
    </>
  )
}

export default ContactUs