import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="site-header" aria-label="Site header">
      <nav className="floating-navbar" aria-label="Main navigation">
        <ul className="floating-links">
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
