import React from 'react'
// import './PrivacyPolicy.css'
import Topbar from './Topbar'
import FooterTwo from './FooterTwo'

const PrivacyPolicy = () => {
  return (
    <>
    <Topbar />
    <section className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
      <h1 className="text-md text-gray-500 text-center my-3">Effective Date: 22/08/25</h1>

      <div className="px-2">
        <p className="mb-4">At Eco Forge Systems, your privacy and trust are of the utmost importance. 
        This Privacy Policy outlines in detail how we collect, use, process, disclose, and safeguard 
        your personal and business information when you interact with us.</p>

        <p className="mb-6">By using our websites, applications, products, or services—including 
        Web Development, Digital Marketing, Software as a Service (SaaS) Platforms, IoT-Based Web Application 
        Development, and related IT Consulting—you agree to the practices described in this Privacy Policy.</p>
      </div>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">1. Scope of Policy</h2>
        
        <div className="px-2 py-1">This Privacy Policy applies to:</div>
          <ul className="list-disc px-7">
            <li>All visitors to our websites and web applications</li>
            <li>Customers who use our IT services, SaaS platforms, and IoT-based applications</li>
            <li>Business partners, affiliates, and vendors working with us</li>
            <li>Employees, contractors, and consultants where applicable</li>
            <li>This document governs both online and offline interactions, 
              including email, customer support, and contractual agreements</li>
          </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">2.  Information We Collect</h2>
        <div className="px-2 py-1">We may collect various categories of information depending on how you engage with our services.</div>

          <h3 className="text-md font-semibold px-2">a) Personal Information</h3>          
          <ul className="list-disc px-7">
            <li>Full name, email address, phone number, physical address, and company name</li>
            <li>Billing details, financial information (where applicable).</li>
            <li>Job title, department, and role.</li>
          </ul>

          <h3 className="text-md font-semibold px-2 pt-2">b) Technical & Device Information</h3>          
          <ul className="list-disc px-7">
            <li>IP address, MAC address, browser type, operating system, and device identifiers.</li>
            <li>Location data derived from device settings (where permitted).</li>
            <li>Log data such as date, time, and duration of visits.</li>
          </ul>

          <h3 className="text-md font-semibold px-2 pt-2">c) Service Usage Data</h3>          
          <ul className="list-disc px-7">
            <li>User activity within our websites, SaaS solutions, and IoT applications.</li>
            <li>Error logs, crash reports, and system performance data.</li>
            <li>Application configuration and usage metrics.</li>
          </ul>

          <h3 className="text-md font-semibold px-2 pt-2">d) Transactional & Contractual Data</h3>          
          <ul className="list-disc px-7">
            <li>Payment records, invoices, and order histories.</li>
            <li>Subscription details, renewal records, and license agreements.</li>
          </ul>

          <h3 className="text-md font-semibold px-2 pt-2">e) IoT-Specific Data</h3>          
          <ul className="list-disc px-7">
            <li>Connected device identifiers and usage logs.</li>
            <li>Sensor data required for application functioning.</li>
            <li>System telemetry and communication between devices.</li>
          </ul>

          <h3 className="text-md font-semibold px-2 pt-2">f) Voluntary Data</h3>          
          <ul className="list-disc px-7">
            <li>Survey responses, feedback forms, and emails.</li>
            <li>Participation in beta-testing programs or events.</li>
          </ul>      
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">3. Sharing of Information</h2>
        <div className="px-2 py-1">We do not sell or rent your personal data.We may share limited information with:</div>

          <ul className="list-disc px-7">
            <li><b>Trusted Service Providers:</b> Hosting, payment gateways, analytics tools.</li>
            <li><b>Event & Marketing Partners:</b> Only when necessary for service delivery.</li>
            <li><b>Legal Authorities:</b> If required by law or to protect our rights.</li>
          </ul>

          <p className="px-2 py-1">We do <strong>not</strong> sell, rent, or trade your personal data.</p>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">4. Data Retention</h2>

          <ul className="list-disc px-7 py-1">
            <li>We retain personal data only as long as necessary for service delivery, legal compliance, 
              or business purposes.</li>
            <li>You may request deletion of your data by contacting us.</li>
          </ul>
      </section>

      <section className="my-4"> 
        <h2 className="text-xl font-semibold px-2">5. Cookies & Tracking Technologies</h2>
        <div className="px-2 py-1">Our websites and SaaS platforms use cookies and tracking technologies for:</div>

          <ul className="list-disc px-7">
            <li>Session management and authentication.</li>
            <li>Remembering user preferences.</li>
            <li>Analyzing site traffic and usage behavior.</li>
            <li>Delivering targeted advertisements where applicable.</li>
            <li>Users may disable cookies through their browser, but some features may be restricted.</li>
          </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">6. Data Protection & Security</h2>
        <div className="px-2 py-1">Eco Forge Systems employs multiple layers of security to protect data, including:</div>

          <ul className="list-disc px-7">
            <li><b>Encryption:</b> SSL/TLS protocols, data encryption at rest and in transit.</li>
            <li><b>Access Controls:</b> Role-based permissions, strong authentication, and monitoring.</li>
            <li><b>Network Security:</b> Firewalls, intrusion detection, and regular vulnerability testing.</li>
            <li><b>Operational Security:</b> Employee training, background checks, and confidentiality agreements.</li>
            <li><b>Compliance Standards:</b> ISO 27001 principles, GDPR compliance, and Indian IT Act provisions.</li>
            <li>Despite robust measures, no system can be 100% secure. Users acknowledge inherent risks in 
              digital data transmission.</li>
          </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">7. Data Retention Policy</h2>

          <ul className="list-disc px-7 py-1">
            <li>Personal and transactional data is stored only for as long as necessary for business or legal purposes.</li>
            <li>Contractual and billing data may be retained for up to 7 years to comply with tax and audit obligations.</li>
            <li>IoT and SaaS logs may be retained for 90–180 days, unless extended retention is required for analysis.</li>
            <li>Upon expiry of retention periods, data is securely deleted or anonymized.</li>
          </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">8. User Rights & Choices</h2>
        <div className="px-2 py-1">Depending on jurisdiction, users may exercise the following rights:</div>
          
          <ul className="list-disc px-7">
            <li><b>Right of Access:</b> Request copies of your personal data.</li>
            <li><b>Right of Rectification:</b> Correct inaccurate or outdated information.</li>
            <li><b>Right of Deletion:</b> Request erasure of personal data (“right to be forgotten”).</li>
          </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-semibold px-2">9. Children’s Privacy</h2>

        <p className="px-2 py-1">Eco Forge Systems does not intentionally collect personal data from children under 16. If such 
          information is inadvertently collected, we will delete it immediately upon discovery or notification.</p>
      </section>
    </section>
    <FooterTwo /> 
  </>
  );
};


export default PrivacyPolicy