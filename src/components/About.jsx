import React from "react";
import TypingAnimation from "./TypingAnimation";

const aboutText =
  "Welcome to my portfolio! I am Sakha Abhiram, a dedicated student passionate about programming, web development, and creative problem-solving. I value continuous learning and teamwork in projects.";

const About = () => (
  <section id="about" className="about">
    <h2>
      <TypingAnimation text="About Me" speed={42} className="section-animated-header"/>
    </h2>
    <TypingAnimation text={aboutText} speed={20} className="about-animated-text"/>
  </section>
);

export default About;
