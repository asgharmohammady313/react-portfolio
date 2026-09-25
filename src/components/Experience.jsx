
import {
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience section">
      <div className="section-container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <p>Experience</p>
          <h2>My Work Journey</h2>
        </div>

        {/* TIMELINE */}
        <div className="timeline">

          {/* EXPERIENCE 1 */}
          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-icon">
              <BriefcaseBusiness size={22} />
            </div>

            <div className="timeline-content">
              <h3>Frontend Developer</h3>

              <strong>Freelance</strong>

              <p>
                Building modern and responsive web applications
                using React, Tailwind CSS, and modern frontend
                technologies.
              </p>
            </div>

            <time>2023 - 2024</time>
          </div>

          {/* EXPERIENCE 2 */}
          <div className="timeline-item">
            <span className="timeline-dot"></span>

            <div className="timeline-icon">
              <GraduationCap size={22} />
            </div>

            <div className="timeline-content">
              <h3>Full Stack Developer Intern</h3>

              <strong>Tech Company</strong>

              <p>
                Worked on frontend and backend projects while
                developing practical experience with React,
                Laravel, MySQL, and modern web technologies.
              </p>
            </div>

            <time>2024 - Present</time>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;

