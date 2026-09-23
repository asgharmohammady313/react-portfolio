
import {
  Mail,
  MapPin,
  Phone,
  Send
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

              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:asghar@example.com">
                    asgharmohammady313@email.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+93700000000">
                    +93 0766989461
                  </a>
                </div>
              </div>

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
          <form className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
