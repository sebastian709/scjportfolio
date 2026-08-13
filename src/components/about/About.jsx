import React from 'react';
import './About.css';
import Experience from '../experience/Experience';
import Github from '../github/Github';
import Techstack from '../techstack/Techstack';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-header">
          <h2 id="about-heading">About Me</h2>
          <span className="about-subtitle">Curious • Practical • Problem Solver</span>
        </div>

        <div className="about-content">
          <p>
            I&apos;m a web developer focused on building responsive, maintainable, and
            user-friendly digital products. My work combines frontend polish with
            backend logic, helping teams deliver systems that are functional, efficient,
            and easy to scale.
          </p>

          <p>
            I have hands-on experience with PHP, Laravel, React, JavaScript, SQL,
            MySQL, WordPress, Bootstrap, Tailwind CSS, and deployment work in Linux
            and VPS environments. I enjoy turning business requirements into clean,
            reliable solutions that support real-world operations.
          </p>

          <p>
            I work well independently or as part of a team, and I value clear
            communication, clean code, and practical problem-solving. My goal is to
            continue building strong, long-term web experiences and support teams with
            dependable development work.
          </p>
        </div>

        <Experience />
        <Techstack />
        <Github />
      </div>
    </section>
  );
};

export default About;
