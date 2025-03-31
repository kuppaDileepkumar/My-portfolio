import React from "react";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      name: "Nxt Trendz (ECommerce Clone - Amazon, Flipkart)",
      description:
        "Created a modern e-commerce experience inspired by Amazon and Flipkart. Implemented pages for Login, Products, and Product details with React Router, secured user data with JWT tokens, REST API calls, and local storage.",
      technologies:
        "React JS, JavaScript, CSS, Bootstrap, Routing, REST API, Local Storage, JWT, Authentication",
      github: "https://github.com/kuppaDileepkumar/Enhancement-of-Nxt-Trendz---Payment.git",
      liveDemo: "https://dileepnxtapp.ccbp.tech/login",
    },
    {
      name: "Jobby App",
      description:
        "Built an all-in-one job searching platform with secure authentication and protected routes. Pages for Login, Home, Jobs, and Job Details were implemented using React components.",
      technologies:
        "React JS, JavaScript, CSS, Bootstrap, Routing, REST API, Local Storage, JWT, Authentication",
      github: "https://github.com/kuppaDileepkumar/Enhancement-Of-Jobby-App.git",
      liveDemo: "https://kuppa-dileep-kumar-enhancement-of-jobby-kdqy0op4c.vercel.app/",
    },
    {
      name: "IPL Dashboard",
      description:
        "Designed a one-stop destination for IPL team and match information using React Router and dynamic REST API calls. Implemented a 404 page for invalid routes.",
      technologies: "React JS, Routing, REST API, CSS, Bootstrap",
      github: "https://github.com/kuppaDileepkumar/Enhancement-of-IPL-Dashboard-App.git",
      liveDemo: "https://kuppa-dileep-kumar-enhancement-of-ipl-dashboard-app.vercel.app/",
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="tech-used"><strong>Technologies:</strong> {project.technologies}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.liveDemo} className="live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
