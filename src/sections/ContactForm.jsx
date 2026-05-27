import { useState } from 'react';
import { useReveal } from '../components/useReveal';

// TODO: Replace with your actual Formspree endpoint URL
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdbpbql';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const ref = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent! Thank you, ' + formData.name + '.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        alert('Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="contact-form-section reveal" ref={ref} id="contact-form">
      <div className="section-head">
        <span className="label">Contact Me</span>
        <h2>Send Me A Message</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cta-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
