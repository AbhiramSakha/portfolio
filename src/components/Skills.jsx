import React from "react";
const skills = [
  "HTML & CSS",
  "JavaScript & React",
  "Python",
  "Teamwork",
  "Problem Solving",
  "Git & Version Control",
  "Cloud Computing",
  "Team Leadership",
];
const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
    </ul>
  </section>
);
export default Skills;
