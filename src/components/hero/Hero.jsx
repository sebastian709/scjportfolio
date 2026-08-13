import profile from '../../assets/logoNoBg.png';
import './Hero.css';

const Hero = () => {
  return (
    <header id="home" className="hero" aria-label="Hero section">
      <div className="hero-text">
        <p className="eyebrow">Web Developer</p>
        <h1>Hi, I&apos;m Sebastian — I build practical web experiences.</h1>
        <p className="hero-intro">
          I create responsive, scalable applications with PHP, Laravel, React,
          JavaScript, SQL, and modern frontend tooling for businesses and product teams.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary" aria-label="View my projects">View Projects</a>
          <a href="#contact" className="btn" aria-label="Contact Sebastian">Let&apos;s Talk</a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Sebastian Jabson portrait"
          width="500"
          height="500"
          loading="eager"
          decoding="async"
        />
      </div>
    </header>
  );
};

export default Hero;
