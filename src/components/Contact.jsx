
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="section-title">
          <p>Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">

          {/* CONTACT INFORMATION */}
          <div className="contact-content">
            <h3>Let's work together</h3>

            <p>
              I'm always interested in hearing about new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-info">

              {/* EMAIL */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:asgharmohammady313@email.com">
                    asgharmohammady313@email.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+93766989461">
                    +93 0766989461
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <p>Kabul, Afghanistan</p>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>Send Message</span>
              <Send size={17} />
            </button>

          </form>
        </div>

        {/* FOOTER */}
        <footer id="footer-section">
          <div className="footer-container">

            {/* COLUMN 1 */}
            <div className="footer-div-item">
              <h4>
                <a href="#home">
                  Portfolio
                </a>
              </h4>

              <p>
                <a href="#about">
                  About
                </a>
              </p>

              <p>
                <a href="#skills">
                  Skills
                </a>
              </p>

              <p>
                <a href="#projects">
                  Projects
                </a>
              </p>
            </div>

            {/* COLUMN 2 */}
            <div className="footer-div-item">
              <h4>
                <a href="#about">
                  About Me
                </a>
              </h4>

              <p>
                <a href="#about">
                  About
                </a>
              </p>

              <p>
                <a href="#experience">
                  Experience
                </a>
              </p>

              <p>
                <a href="#skills">
                  Skills
                </a>
              </p>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-div-item">
              <h4>
                <a href="#projects">
                  Projects
                </a>
              </h4>

              <p>
                <a href="#projects">
                  My Projects
                </a>
              </p>

              <p>
                <a href="#skills">
                  Technologies
                </a>
              </p>

              <p>
                <a href="#contact">
                  Contact Me
                </a>
              </p>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-div-item">
              <h4>
                <a href="#contact">
                  Contact
                </a>
              </h4>

              <p>
                <a href="mailto:asgharmohammady313@email.com">
                  Email
                </a>
              </p>

              <p>
                <a href="tel:+93766989461">
                  Phone
                </a>
              </p>

              <p>
                <a href="#contact">
                  Kabul, Afghanistan
                </a>
              </p>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
}

export default Contact;

