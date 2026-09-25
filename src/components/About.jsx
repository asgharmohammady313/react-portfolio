
import {
  BriefcaseBusiness,
  MapPin,
  Send,
} from "lucide-react";

import "./About.css";
import "./AboutResponsive.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="section-container">

        {/* SECTION TITLE */}
        <div className="section-title">
          <p>About Me</p>
          <h2>Who I Am</h2>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-grid">

          {/* TEXT */}
          <div className="about-content">
            <p>
              I’m a passionate Full Stack Developer with a strong interest in
              modern web development. I work with React on the frontend and
              Laravel and MySQL on the backend, building responsive,
              user-friendly, fast, and reliable websites and web applications.
              I’m always eager to learn new technologies, improve my skills,
              and collaborate on creative and professional projects.
            </p>

            {/* STATS */}
            <div className="about-stats">

              {/* EXPERIENCE */}
              <div className="about-stat">
                <div className="about-icon">
                  <BriefcaseBusiness size={22} />
                </div>

                <div>
                  <strong>2+</strong>
                  <span>Years Experience</span>
                </div>
              </div>

              {/* LOCATION */}
              <div className="about-stat">
                <div className="about-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <strong>Kabul, Afghanistan</strong>
                  <span>Available for work</span>
                </div>
              </div>

              {/* WORK */}
              <div className="about-stat">
                <div className="about-icon">
                  <Send size={22} />
                </div>

                <div>
                  <strong>Open to</strong>
                  <span>Freelance / Full-time</span>
                </div>
              </div>

            </div>
          </div>

          {/* IMAGE */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
              alt="Coding workspace"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

