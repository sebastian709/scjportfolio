import profile from "../../assets/logoNoBg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* LEFT */}
      <div className="hero-text">
        <h1>Sebastian Jabson</h1>
        <h2>Full Stack Web Developer</h2>
        <p>
          I build clean, responsive, and scalable web applications using React, 
          Node.js, Laravel, and modern frontend technologies.
        </p>


        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-image">
        <img src={profile} alt="Sebastian Logo" />
      </div>
    </section>
  );
};

export default Hero;
