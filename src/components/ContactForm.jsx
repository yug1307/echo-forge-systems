import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setForm] = useState({
    name: '', email: '', number: '', service: '', description: ''
  });

  const handleChange = (e) => {
    setForm({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Submitting');

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Submitted successfully!');
      setForm({ name: '', email: '', number: '', service: '', description: '' });
    } 
      catch (err) {
      alert('Submission failed.');
      console.error(err);
    }
  } 

  return (
    <div className="p-7"> 
    <form onSubmit={handleSubmit} 
      className="max-w-xl mx-auto p-6 bg-none shadow-md rounded-md space-y-4 border-2 border-violet-500">

      <h2 className="text-3xl text-violet-500 font-bold">Get in Touch</h2>

      <div>
        <label className="text-xl text-violet-500 font-semibold">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required
          className="w-full p-2 border border-gray-400 rounded-md"/>
      </div>
 
      <div>
        <label className="text-xl text-violet-500 block font-semibold">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required
          className="w-full p-2 border border-gray-400 rounded-md"/>
      </div>

      <div>
        <label className="text-xl text-violet-500 block font-semibold">WhatsApp Number</label>
        <input type="tel" name="number" value={formData.number} onChange={handleChange} 
        placeholder="+91XXXXXXXXX" required className="w-full p-2 border border-gray-400 rounded-md"/>
      </div>
 
      <div>
        <label className="text-xl text-violet-500 block font-semibold">Service</label>
        <select name="service" value={formData.service} onChange={handleChange} required
          className="w-full p-2 border border-gray-400 rounded-md">
          
          <option value="Web Development - Frontend">Web Development - Frontend</option>
          <option value="Web Development - Frontend + Backend">Web Development - Frontend + Backend</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Tech Support">Tech Support</option>
        </select>
      </div>

      <div>
        <label className="text-xl text-violet-500 block font-semibold">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="4"
          placeholder="Tell us more about your project..."
          className="w-full p-2 border border-gray-400 rounded-md"></textarea>
      </div>

      <button type="submit" className="bg-emerald-500 text-l w-full px-4 py-2 rounded-md transition">Submit</button>

      {alert && <p className="text-sm mt-2 text-gray-600">{alert}</p>}
    </form>
    </div>
  );
};

export default ContactForm;
