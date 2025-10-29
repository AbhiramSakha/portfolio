import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

export default App;
