import React from "react";
import "./Techstack.css";

const Techstack = () => {
  const techStack = {
    Frontend: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
      "AJAX",
      "WordPress",
      "Elementor",
    ],
    Backend: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
    DevOps: ["Linux Server", "VPS", "Webmin", "CI/CD", "Azure DevOps Server"],
    Tools: ["Git", "GitHub", "Postman API", "Android Studio", "Kotlin", "Adobe Photoshop"],
  };

  return (
    <section className="tech-section">
      <h3 className="tech-title">Tech Stack</h3>

      <div className="tech-groups">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="tech-group">
            <h4 className="tech-group-title">{category}</h4>
            <div className="tech-grid">
              {items.map((tech, index) => (
                <span key={index} className="tech-card">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
