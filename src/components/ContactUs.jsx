import React from 'react'
import Topbar from './Topbar';
import FooterTwo from './FooterTwo';
import ContactForm from "./ContactForm"
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <>
    <Topbar/>
    <ContactForm/>
      <section className="bg-gradient-to-b from-neutral-50 to-blue-200 py-9 text-center">
      {/* Contact Us Section */}
      <h2 className="text-3xl font-bold mb-8">📞 Contact Us</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-3 text-gray-700">
          <MapPin className="text-red-500" />
          <p>Sharda Colony, Gondia - 441 614</p>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-700">
          <Phone className="text-green-500" />
          <a href="tel:+91 9322276364">9322276364,</a>
          <a href="tel:+91 8788362782">8788362782,</a>
          <a href="tel:+91 8830920008">8830920008</a>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-700">
          <Mail className="text-blue-500" />
          <a href="mailto:yugaanterd@gmail.com" className="hover:text-blue-600 cursor-pointer">
            yugaanterd@gmail.com
          </a>
        </div>
      </div>
      </section>
      <FooterTwo/>
    </>
  )
}

export default ContactUs