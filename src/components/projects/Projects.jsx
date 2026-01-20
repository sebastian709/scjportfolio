import React from "react";
import "./Projects.css";

import ranLanding from "../../assets/ranLanding.png";
import guamLanding from "../../assets/guamLanding.png";
import screenLanding from "../../assets/screenLanding.jpg"

/**
 * FUTURE BACKEND READY
 * Later pwede to manggaling sa API:
 * GET /api/projects
 */
// Personal portfolio built to showcase my skills, projects, and experience.

const projectsData = [
  {
    id: 1,
    title: "Ran Lending",
    description:
      "A CRUD-based system with authentication, admin dashboard, and role-based access.",
    thumbnail: ranLanding, // placeholder
    techStack: [
      "Laravel",
      "Tailwind CSS",
      "Bootstrap",
      "MySQL",
      "Firebase",
      "jQuery",
      "JavaScript",
      "GitHub",
      "Virtual Private Server (VPS)",
      "Webmin",
      "Linux Server",
    ],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://ranserenity.com/",
    },
  },
  {
    id: 2,
    title: "Guam Coral Reef Website",
    description:
      "WordPress-powered business website designed to showcase and promote products sold directly by the owner.",
    thumbnail: guamLanding,
    techStack: ["Wordpress", "Elementor", "Adobe Photoshop", "Responsive Web Design"],
    links: {
      github: "https://github.com/yourusername/system",
      live: "https://guamcoralreef.com/",
    },
  },
  {
    id: 3,
    title: "Screenwide Printing",
    description:
      "This static website provides a clear, engaging presentation of their offerings and supports their mission of delivering exceptional printing solutions.",
    thumbnail: screenLanding,
    techStack: ["Bootstrap (Framework)", "Html", "CSS"],
    links: {
      github: "https://github.com/yourusername/api-app",
      live: "#",
    },
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          {/* HEADER */}
          <div className="projects-header">
            <h2>Projects Highlight</h2>
            <p>Projects I’ve built, maintained, and experimented with</p>
          </div>

          {/* PROJECT LIST */}
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                {/* THUMBNAIL */}
                <div className="project-thumb">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {/* TECH STACK */}
                  <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="projects-btn">
        <a href="#" className="btn primary">
          View More Projects
        </a>
      </div>
    </>
  );
};

export default Projects;
