import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug, projectsData } from '../../data/projectsData';
import './ProjectDetail.css';

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) return;
    document.title = project.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', project.seo.canonical);
    setMetaContent('meta[property="og:title"]', project.seo.title);
    setMetaContent('meta[property="og:description"]', project.seo.description);
    setMetaContent('meta[property="og:url"]', project.seo.canonical);
    setMetaContent('meta[name="twitter:title"]', project.seo.title);
    setMetaContent('meta[name="twitter:description"]', project.seo.description);
  }, [project]);

  if (!project) {
    return <main className="project-detail-notfound"><div className="project-detail-container"><h1>Project not found</h1><p>This project does not exist.</p><Link to="/#projects" className="btn primary">Back to projects</Link></div></main>;
  }

  const index = projectsData.findIndex((item) => item.id === project.id);
  const previous = projectsData[(index - 1 + projectsData.length) % projectsData.length];
  const next = projectsData[(index + 1) % projectsData.length];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.seo.description,
    url: project.seo.canonical,
    creator: { '@type': 'Person', name: 'Sebastian Jabson' },
  };

  return (
    <main className="project-detail">
      <nav className="breadcrumb" aria-label="Breadcrumb"><ol><li><Link to="/">Home</Link></li><li><Link to="/#projects">Projects</Link></li><li aria-current="page">{project.title}</li></ol></nav>
      <section className="project-hero">
        <div className="project-hero-content">
          <h1>{project.title}</h1>
          <p className="project-hero-desc">{project.description}</p>
          <div className="project-hero-links">
            {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn primary">View live project</a>}
            {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn">View GitHub</a>}
          </div>
        </div>
        <div className="project-hero-image"><img src={project.thumbnail} alt={project.thumbnailAlt} width="600" height="400" decoding="async" /></div>
      </section>
      <div className="project-detail-container">
        <section className="project-section"><h2>Key Features</h2><ul className="project-features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
        <section className="project-section"><h2>Technologies Used</h2><div className="tech-list">{project.technologies.map((technology) => <span className="tech-item" key={technology}>{technology}</span>)}</div></section>
        <section className="project-section"><h2>My Contribution</h2><p>{project.contribution}</p></section>
        <section className="project-cta"><h2>Let&apos;s work together</h2><p>Looking for a developer to build or improve a web application? Let&apos;s connect.</p><Link to="/#contact" className="btn primary">Get in touch</Link></section>
      </div>
      <nav className="project-nav" aria-label="Project navigation"><div className="project-nav-container"><Link to={`/projects/${previous.slug}`} className="project-nav-link prev"><span className="nav-label">← Previous</span><span className="nav-title">{previous.title}</span></Link><Link to="/#projects" className="project-nav-link back">Back to all projects</Link><Link to={`/projects/${next.slug}`} className="project-nav-link next"><span className="nav-label">Next →</span><span className="nav-title">{next.title}</span></Link></div></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
};

export default ProjectDetail;
