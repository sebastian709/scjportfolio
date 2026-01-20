import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <p className="footer-text">
          © {year} Sebastian Jabson. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="footer-links">
          <a href="https://github.com/sebastian709" target="_blank" rel="noreferrer">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/sebastian709/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-line"></i>
          </a>
          {/* <a href="https://facebook.com/username" target="_blank" rel="noreferrer">
            <i className="ri-facebook-line"></i>
          </a> */}
          <a href="https://wa.me/639977024547" target="_blank" rel="noreferrer">
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
