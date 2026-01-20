import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p className="contact-desc">
            Interested in working together or have a project in mind?
            Let’s connect and build something meaningful.
          </p>

          <div className="contact-details">
            <a href="mailto:sebastianjabson07@gmail.com">
              <i className="ri-mail-line"></i>
              sebastianjabson07@gmail.com
            </a>

            <a href="https://github.com/sebastian709" target="_blank" rel="noreferrer">
              <i className="ri-github-line"></i>
              github.com/sebastian709
            </a>

            <a href="https://www.linkedin.com/in/sebastian709/" target="_blank" rel="noreferrer">
              <i className="ri-linkedin-line"></i>
              linkedin.com/in/sebastian709/
            </a>

            {/* <a href="https://facebook.com/username" target="_blank" rel="noreferrer">
              <i className="ri-facebook-line"></i>
              facebook.com/username
            </a> */}

            <a href="https://wa.me/639977024547" target="_blank" rel="noreferrer">
              <i className="ri-whatsapp-line"></i>
              {/* +63 9977024547 */} jabson
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." />
            </div>

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
