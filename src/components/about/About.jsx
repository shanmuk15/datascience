import React from "react";
import "./About.css";

function About() {
  const skills = {
    frontend: ["HTML5", "CSS"],
    backend: [
      "Python",
      "Seaborn",
      "AI",
      "Machine Learning",
      "Flask",
      "Django",
      "matplotlib",
      "Pandas"
    ],
    tools: [
      "Anaconda",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
    ],
  };

  return (
    <div className="about-sec" id="about">
      <div className="about">
        <h2>HI! I'm Sowjanya</h2>
        <div className="about-grid">
          <div>
            <img src="./about.png" alt="About" />
          </div>
          <div>
            <p>
              I’m a certified Full Stack Developer with expertise in frontend technologies like JavaScript,
               HTML, and CSS. I specialize in building responsive, user-friendly web applications and interactive 
               Chrome extensions. On the backend, I focus on AI and Machine Learning using Python, Flask, and libraries 
               such as Pandas, Seaborn, and matplotlib to develop intelligent, data-driven solutions.
            </p>

            <p>
             I have worked on projects involving AI-powered tools and health monitoring systems, and I’m skilled with tools and environments like Git, 
              VS Code, and deployment platforms such as Vercel and Heroku.
            </p>

            <p>
             Passionate about applying AI and ML to solve real-world problems, I enjoy exploring
              the latest trends in technology, traveling, and spending quality time with family and friends.
               My long-term goal is to lead innovation in the tech industry and create impactful AI-driven products..
            </p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-container">
          <div className="skills-box">
            <h3 className="box-title">Frontend</h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3 className="box-title">Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3 className="box-title">Tools</h3>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
