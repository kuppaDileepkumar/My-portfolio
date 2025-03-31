import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm a Dileepkumar
          Aspiring MERN Stack Developer At CCBPian at NxtWave 👋</h1>
        <p>
          I craft **efficient** and **scalable** web applications using modern technologies like 
          <strong> React.js, Node.js, Express, and SQLite</strong>.
        </p>
        <p>Let's build something amazing together! 🚀</p>

        <div className="cta-buttons">
          <a href="/projects">View My Work</a>
          <a href="/contact">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
