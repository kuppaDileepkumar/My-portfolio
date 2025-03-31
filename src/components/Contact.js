import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch 📩</h2>
        <p>
          Whether you have a question or just want to say hello, my inbox is always open!
        </p>

        <div className="contact-info">
          <p>📧 Email: <a href="kuppadileepkumar77@gmail.com">kuppadileepkumar77@gmail.com</a></p>
          <p>📍 Location: Nellore, India</p>
          <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/dileepkumarkuppa/" target="_blank" rel="noopener noreferrer">linkedin.com</a></p>
          <p>📁 GitHub: <a href="https://github.com/kuppaDileepkumar" target="_blank" rel="noopener noreferrer">github.com</a></p>
        </div>

        <div className="cta-buttons">
          <a href="kuppadileepkumar77@gmail.com" className="contact-btn">Say Hello</a>
          <a href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Dileepkumar_2025-03-14-210240.pdf" download className="cv-btn">Download My CV</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
