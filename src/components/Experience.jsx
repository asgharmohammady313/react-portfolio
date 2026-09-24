import {
  BriefcaseBusiness,
  GraduationCap
} from "lucide-react";

import "./Experience.css";

function Experience() {
  return (
    <section className="experience section">

      <div className="section-container">

        <div className="section-title">

          <p>
            Experience
          </p>

          <h2>
            My Work Journey
          </h2>

        </div>

        <div className="timeline">

          {/* Experience 1 */}

          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-icon">
              <BriefcaseBusiness />
            </div>

            <div className="timeline-content">

              <h3>
                Frontend Developer
              </h3>

              <strong>
                Freelance
              </strong>

              <p>
                Building modern web applications with
                React, Tailwind CSS and more.
              </p>

            </div>

            <time>
              2023 - 2024
            </time>

          </div>

          {/* Experience 2 */}

          <div className="timeline-item">

            <span className="timeline-dot"></span>

            <div className="timeline-icon">
              <GraduationCap />
            </div>

            <div className="timeline-content">

              <h3>
                Full Stack Developer Intern
              </h3>

              <strong>
                Tech Company
              </strong>

              <p>
                Worked on various frontend and backend projects and
                improved my skills.
              </p>

            </div>

            <time>
              2024 - Present
            </time>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;