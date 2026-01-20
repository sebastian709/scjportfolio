import React from "react";
import "./About.css";

const techStack = {
  Frontend: [
    "HTML", "CSS", "SCSS", "JavaScript",
    "React.js", "Bootstrap", "Tailwind CSS",
    "jQuery", "AJAX", "WordPress", "Elementor"
  ],
  Backend: [
    "PHP", "Laravel", "Node.js", "Express.js",
    "MySQL", "MongoDB", "Firebase", "Supabase"
  ],
  DevOps: [
    "Linux Server", "VPS", "Webmin",
    "CI/CD", "Azure DevOps Server"
  ],
  Tools: [
    "Git", "GitHub", "Postman API",
    "Android Studio", "Kotlin", "Adobe Photoshop"
  ]
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* ABOUT */}
        <div className="about-header">
          <h2>About Me</h2>
          <span className="about-subtitle">
            Curious • Practical • Problem Solver
          </span>
        </div>

        <div className="about-content">
          <p>
            I’m a quiet but curious developer who enjoys understanding how things
            work behind the scenes. I naturally look for practical and efficient
            ways to solve problems, and I don’t stop until I find a clean and
            future-proof solution.
          </p>

          <p>
            My journey started with curiosity about how websites and apps are
            built, which led me into web development and later mobile development.
            Today, I mainly work on maintaining and improving web-based systems,
            building features and handling both frontend and backend logic.
          </p>

          <p>
            I’m comfortable working independently or with a team, organized in my
            workflow, and always open to learning new technologies. My goal is to
            grow into a solid developer and build a sustainable freelance career.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="tech-section">
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
        </div>
      </div>
    </section>
  );
};

export default About;
