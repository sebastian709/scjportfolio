import React from 'react';
import './Techstack.css';

const Techstack = () => {
  const techStack = {
    Frontend: [
      'HTML',
      'CSS',
      'SCSS',
      'JavaScript',
      'React.js',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
      'AJAX',
      'WordPress',
      'Elementor',
    ],
    Backend: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
    DevOps: ['Linux Server', 'VPS', 'Webmin', 'CI/CD', 'Azure DevOps Server'],
    Tools: ['Git', 'GitHub', 'Postman API', 'Android Studio', 'Kotlin', 'Adobe Photoshop'],
  };

  return (
    <section id="skills" className="tech-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="tech-title">Skills & Technologies</h2>

      <div className="tech-groups">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="tech-group">
            <h3 className="tech-group-title">{category}</h3>
            <div className="tech-grid">
              {items.map((tech, index) => (
                <span key={`${category}-${tech}-${index}`} className="tech-card">
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
