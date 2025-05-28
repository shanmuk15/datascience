import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: "Blind Stick For Visually Impaired People",
    description: "A smart stick designed to assist visually impaired individuals using AI and machine learning technologies.",
    techStack: ["Android Studio", "Python", "Teachable Machine", "ML Algorithms"],
    link: "#",
    image: "/blindstick.jpeg"
  },
  {
    id: 2,
    title: "Push Up Counter",
    description: "An AI-based fitness tool that counts push-ups using pose detection and deep learning techniques.",
    techStack: ["Python", "AI", "Deep Learning"],
    link: "#",
    image: "/pushup.jpeg"
  },
  {
    id: 3,
    title: "Health Monitoring Using Telegram Bot",
    description: "A real-time health monitoring system that sends alerts and updates via Telegram bot.",
    techStack: ["Machine Learning", "Deep Learning", "Artificial Intelligence"],
    link: "#",
    image: "/health.jpeg"
  }
];

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="page-container">
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            Explore my latest work and technical projects that demonstrate my skills and passion.
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`project-image ${hoveredProject === project.id ? 'hovered' : ''}`}
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="project-footer">
                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="project-link"
                  >
                    View Project
                    <ArrowRight size={16} className={`arrow-icon ${hoveredProject === project.id ? 'arrow-hovered' : ''}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all-container">
          <a href="#" className="view-all-button">
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Project;
