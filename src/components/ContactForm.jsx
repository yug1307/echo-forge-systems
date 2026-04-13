import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)  // ✅ fixed
    });

    const data = await res.json();
    setStatus(data.message || "Message sent successfully.");
  } catch (error) {
    setStatus("Something went wrong.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-zinc-900 shadow-md rounded-md space-y-4 border-2 border-violet-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-lg text-violet-500 font-semibold">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 bg-zinc-700 rounded-md"/>
        </div>

        <div>
          <label className="text-lg text-violet-500 block font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 bg-zinc-700 rounded-md"/>
        </div>

        <div>
          <label className="text-lg text-violet-500 block font-semibold">WhatsApp Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91XXXX" required className="w-full p-2 bg-zinc-700 rounded-md"/>
        </div>

        <div>
          <label className="text-lg text-violet-500 block font-semibold">Service</label>

          <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-2 bg-zinc-700 text-white rounded-md">  
              <option value="Web Development">Web Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Software As A Service">Software As A Service (SaaS)</option>
              <option value="Internet of Things">Internet of Things (IoT) Development</option>       
          </select>
        </div>
      </div>

      <div>
        <label className="text-lg text-violet-500 block font-semibold">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4"
          placeholder="Tell us more about your project..." className="w-full p-2 bg-zinc-700 rounded-md"
        />
      </div>

      <button type="submit" className="bg-emerald-700 text-l w-full px-4 py-2 rounded-md transition">
        Submit
      </button>

      {status && <p className="text-sm mt-2 text-white">{status}</p>}
    </form>
  );
};

export default ContactForm;
 