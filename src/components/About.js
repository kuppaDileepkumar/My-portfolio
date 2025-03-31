import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate **Full-Stack Developer** currently pursuing an **Industry Ready Certification in Full-Stack Development** at **Nxtwave Disruptive Technologies**.
          I specialize in building web applications using **React.js, JavaScript, Node.js, Express, and SQLite**.  
        </p>
        <p>
          I have a **B.Tech in Mechanical Engineering** but transitioned into software development with a strong interest in modern web technologies. I enjoy solving real-world problems through coding and continuously improving my skills.  
        </p>

        <h3>🎓 Education</h3>
        <div className="education">
          <div className="edu-item">
            <h4>Nxtwave Disruptive Technologies</h4>
            <p>📅 May 2024 - Ongoing</p>
            <p>Industry Ready Certification in Full-Stack Development</p>
          </div>

          <div className="edu-item">
            <h4>Narayana Engineering College, Nellore</h4>
            <p>📅 2020 - 2023</p>
            <p>B.Tech in Mechanical Engineering (69.0%)</p>
          </div>

          <div className="edu-item">
            <h4>AL-Huda Polytechnic College, Nellore</h4>
            <p>📅 2017 - 2020</p>
            <p>Diploma in Mechanical Engineering (68.0%)</p>
          </div>

          <div className="edu-item">
            <h4>K.N.R Municipal High School, Nellore</h4>
            <p>📅 2016 - 2017</p>
            <p>Secondary School Certificate (77.0%)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
