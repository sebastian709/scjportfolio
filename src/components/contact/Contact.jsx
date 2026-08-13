import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          setConfirmation('✅ Your message has been sent successfully!');
          setTimeout(() => setConfirmation(''), 5000);
        },
        (error) => {
          console.error(error.text);
          setConfirmation('❌ Failed to send message. Please try again.');
          setTimeout(() => setConfirmation(''), 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <div className="contact-left">
          <h2 id="contact-heading">Let&apos;s build something useful.</h2>
          <p className="contact-desc">
            I&apos;m available for web development work, feature improvements, and thoughtful digital products
            that need clean code and a strong user experience.
          </p>

          <div className="contact-details">
            <a href="mailto:sebastianjabson07@gmail.com" aria-label="Email Sebastian">
              <i className="ri-mail-line" aria-hidden="true"></i>
              sebastianjabson07@gmail.com
            </a>

            <a
              href="https://github.com/sebastian709"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sebastian on GitHub"
            >
              <i className="ri-github-line" aria-hidden="true"></i>
              github.com/sebastian709
            </a>

            <a
              href="https://www.linkedin.com/in/sebastian709/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sebastian on LinkedIn"
            >
              <i className="ri-linkedin-line" aria-hidden="true"></i>
              linkedin.com/in/sebastian709/
            </a>

            <a
              href="https://wa.me/639977024547"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Sebastian on WhatsApp"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              +63 997 702 4547
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form ref={form} className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Subject</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Project title or topic"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button type="submit" className="btn primary">
              Send Message
            </button>

            {confirmation && (
              <p className="contact-confirmation" aria-live="polite">
                {confirmation}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
