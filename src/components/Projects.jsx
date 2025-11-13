import React from "react";

const projects = [
  {
    title: "Movie Recommendation System",
    description: "An intelligent movie recommendation system using collaborative filtering and content-based algorithms. Personalized movie suggestions with Python (scikit-learn) and a React frontend.",
    stack: ["Python", "Machine Learning", "React"],
    live: "https://mvr-nbpo.onrender.com/", // update to real demo if available
    code: "https://github.com/AbhiramSakha/Mvr"
  },
  {
    title: "AI Text Generator",
    description: "Advanced AI-powered text generation using transformer models. Features include creative writing, content creation, and real-time customizable output. Built with Python (Transformers, FastAPI).",
    stack: ["Python", "Transformers", "FastAPI"],
    live: "https://ai-generator-56dq.onrender.com/",
    code: "https://github.com/AbhiramSakha/ai-generator"
  },
  {
    title: "Learning Courses Platform",
    description: "Comprehensive e-learning platform with interactive video courses, quizzes, certificates, and personalized learning paths. Built with React, Node.js, and MongoDB.",
    stack: ["React", "Node.js", "MongoDB"],
    live: "https://learning-courses.onrender.com/",
    code: "https://github.com/AbhiramSakha/Learning-Courses"
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <ul>
      {projects.map((proj, idx) => (
        <li key={idx}>
          <b>{proj.title}</b>
          <div>{proj.description}</div>
          <div>
            <i style={{ color: "#0077b5" }}>Tech:</i> {proj.stack.join(", ")}
          </div>
          <div style={{ marginTop: 6 }}>
            {proj.live !== "#" && (
              <a href={proj.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
            <span style={{ margin: "0 7px" }}>{proj.code && "•"}</span>
            <a href={proj.code} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
