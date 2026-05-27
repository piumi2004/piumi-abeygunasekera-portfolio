import { useState } from 'react';
import { useReveal } from '../components/useReveal';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const ref = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert. In a real app, integrate with a backend or email service.
    alert('Message sent! Thank you, ' + formData.name + '.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
