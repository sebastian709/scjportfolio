import React from 'react'
import './Skills.css'
const Skills = () => {
  const skills = ["React", "JavaScript", "PHP", "MySQL", "Tailwind", "Git"];

  return (
    <section id="skills" style={{ padding: "60px 20px" }}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills
