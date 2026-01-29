import React from "react";
import "./About.css";
import Experience from "../experience/Experience";
import Github from "../github/Github";
import Techstack from "../techstack/Techstack";


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

        <Experience />
        <Techstack />
        <Github />
        
      </div>
    </section>
  );
};

export default About;
