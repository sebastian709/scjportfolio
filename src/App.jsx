import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import ScrollTop from './components/scrollTop/ScrollTop';
import Footer from './components/footer/Footer';
import Seo from './components/seo/Seo';
import ProjectDetail from './components/projectDetail/ProjectDetail';
import './App.css';

const Home = () => (
  <>
    <Seo />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  </>
);

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    <ScrollTop />
  </BrowserRouter>
);

export default App;
