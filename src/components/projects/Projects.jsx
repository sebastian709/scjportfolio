import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects" aria-labelledby="projects-heading">
    <div className="projects-container">
      <div className="projects-header">
        <h2 id="projects-heading">Selected Projects</h2>
        <p>Projects I&apos;ve built using practical frontend and backend development skills.</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-thumb">
              <img src={project.thumbnail} alt={project.thumbnailAlt} loading="lazy" decoding="async" width="1200" height="720" />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
            <div className="project-links">
              <Link to={`/projects/${project.slug}`}>Project details</Link>
              {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live project</a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
