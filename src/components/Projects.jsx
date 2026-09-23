
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    title: "Admin Dashboard",
    description:
      "Modern dashboard built with React, Chart.js and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Tailwind", "Chart.js"],
  },

  {
    title: "E-Commerce Store",
    description:
      "Full-featured online store with shopping cart and checkout.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Redux", "Stripe"],
  },

  {
    title: "Task Management App",
    description:
      "A task manager to organize your daily tasks and boost productivity.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Tailwind"],
  },

  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website with modern animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "CSS", "Vite"],
  },
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 2;

  const totalPages = Math.ceil(
    projects.length / projectsPerPage
  );

  const nextProjects = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : 0
    );
  };

  const previousProjects = () => {
    setCurrentPage((prev) =>
      prev > 0 ? prev - 1 : totalPages - 1
    );
  };

  const startIndex = currentPage * projectsPerPage;

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <section id="projects" className="projects section">

      <div className="section-container">

        {/* HEADER */}
        <div className="projects-header">

          <div className="section-title">
            <p>My Projects</p>
            <h2>Featured Projects</h2>
          </div>

          {/* NAVIGATION */}
          <div className="project-navigation">

            <button
              type="button"
              className="project-nav-button"
              onClick={previousProjects}
              aria-label="Previous projects"
            >
              <ArrowLeft size={22} />
            </button>

            <button
              type="button"
              className="project-nav-button"
              onClick={nextProjects}
              aria-label="Next projects"
            >
              <ArrowRight size={22} />
            </button>

          </div>

        </div>

        {/* PROJECTS */}
        <div className="projects-slider">

          <div className="projects-track">

            {visibleProjects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* IMAGE */}
                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <a
                    href="#contact"
                    className="project-external"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={17} />
                  </a>

                </div>

                {/* CONTENT */}
                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* DOTS */}
        <div className="project-dots">

          {Array.from({ length: totalPages }).map(
            (_, index) => (

              <button
                type="button"
                key={index}
                className={
                  currentPage === index
                    ? "project-dot active"
                    : "project-dot"
                }
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to project group ${index + 1}`}
              />

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Projects;
