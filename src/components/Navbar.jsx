import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand-with-img">
      <img src="/profile.jpg" alt="Profile" className="navbar-profile-img" />
      <span className="navbar-title">Student Portfolio</span>
    </div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
