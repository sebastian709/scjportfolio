import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
// import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ScrollTop from './components/scrollTop/scrollTop';
import Footer from './components/footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
      {/* Scroll Top Button */}
      <ScrollTop />
    </>
  )
}

export default App
