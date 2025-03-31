import React from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", image: "https://cdn-icons-png.flaticon.com/512/888/888859.png" },
        { name: "CSS", image: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
        { name: "Bootstrap", image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
        { name: "JavaScript", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "React.js", image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
        { name: "Express", image: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
        { name: "Node.js", image: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "SQLite", image: "https://cdn-icons-png.flaticon.com/512/5968/5968364.png" },
      ],
    },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-container">
            {category.skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
