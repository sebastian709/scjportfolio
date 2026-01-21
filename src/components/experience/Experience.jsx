import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed / Collaborated Projects",
    date: "January 2025 – Present",
    description: [
      "Contributed to the development of multiple web applications including Ran Lending and Guam Coral Reef projects.",
      "Collaborated with other developers to build and maintain full-stack systems, ensuring clean and scalable code.",
      "Explored and implemented new technologies and frameworks such as React.js, Laravel, MySQL, and JavaScript to enhance project features and performance.",
      "Handled backend logic, database design, and frontend interfaces while learning modern deployment workflows on VPS and Linux environments.",
      "Implemented authentication, CRUD modules, and admin dashboards for client-focused systems.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Trackerteer Corporation",
    date: "July 2022 – Present",
    description: [
      "Delivered clean, error-free code aligned with project scope and performance requirements.",
      "Troubleshot and debugged backend issues to minimize system downtime.",
      "Developed and maintained scalable backend systems for high-volume web applications.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Servo IT Solutions",
    date: "August 2022 – July 2023",
    description: [
      "Built interactive and visually appealing web pages using HTML, CSS, and JavaScript.",
      "Developed user-friendly interfaces to enhance overall user experience.",
      "Maintained and customized responsive WordPress websites across multiple devices.",
    ],
  },
  {
    role: "Web App Developer Intern",
    company: "AghimJuan PH Incorporated",
    date: "February 2022 – March 2022",
    description: [
      "Assisted the web development team in building and maintaining web applications.",
      "Participated in analytics and system improvement tasks to support development goals.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>

                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
