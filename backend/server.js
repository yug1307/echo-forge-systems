const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/it_form_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Mongoose Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String, 
  service: String,
  description: String 
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Route 
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Saved successfully' });
  } 
  catch (err) {
    res.status(500).json({ error: 'Failed to save' });
  }
});

const PORT = 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
