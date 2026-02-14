import React, { useState } from 'react';
import contactData from './contact.json';
import './styles.css';

const Contact = () => {
  // Local state to track input values
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Replicating your original alert logic
    alert("Thank you! Your message has been sent.");
    
    // 2. Replicating myForm.reset() by clearing the state
    setFormData({ name: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="content">
      <h1>{contactData.heading}</h1>

      {/* Note the use of className and onSubmit */}
      <form id="contactForm" className="form-columns" onSubmit={handleSubmit}>
        <div className="column">
          <label htmlFor="name">Name</label><br />
          <input 
            type="text" 
            id="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
          /><br /><br />

          <label htmlFor="message">Message</label><br />
          <textarea 
            id="message" 
            placeholder="Enter your message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <br /><br />

          <div className="button-container">
            <button type="submit" className="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;