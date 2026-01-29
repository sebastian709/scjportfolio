import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [confirmation, setConfirmation] = useState(""); // state for confirmation message

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
        (result) => {
          form.current.reset();
          setConfirmation("✅ Your message has been sent successfully!");

          // hide message after 5 seconds
          setTimeout(() => setConfirmation(""), 5000);
        },
        (error) => {
          console.error(error.text);
          setConfirmation("❌ Failed to send message. Please try again.");
          setTimeout(() => setConfirmation(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p className="contact-desc">
            Interested in working together or have a project in mind? Let’s
            connect and build something meaningful.
          </p>

          <div className="contact-details">
            <a href="mailto:sebastianjabson07@gmail.com">
              <i className="ri-mail-line"></i>
              sebastianjabson07@gmail.com
            </a>

            <a
              href="https://github.com/sebastian709"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-line"></i>
              github.com/sebastian709
            </a>

            <a
              href="https://www.linkedin.com/in/sebastian709/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-line"></i>
              linkedin.com/in/sebastian709/
            </a>

            <a
              href="https://wa.me/639977024547"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-whatsapp-line"></i>
              +639977024547
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Subject / Title Field */}
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="title"
                placeholder="Subject / Project Title"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Hidden field for template time */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button type="submit" className="btn primary">
              Send Message
            </button>

            {/* Confirmation message */}
            {confirmation && <p className="contact-confirmation">{confirmation}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
