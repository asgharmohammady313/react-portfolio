
import "./Hero.css";
import "./HeroResponsive.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="stars">
        {Array.from({ length: 60 }).map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <p className="hero-small-title">
            Hi, my name is
          </p>

          <h1>Asghar Mohammadi</h1>

          <h2>I build things for the web.</h2>

          <p className="hero-description">
            I'm a Full Stack Developer specializing in building and
            occasionally designing exceptional digital experiences.
            I work across both frontend and backend technologies to
            create responsive, scalable, and user-friendly web applications.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn hero-primary"
            >
              View Projects

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#contact"
              className="hero-btn hero-secondary"
            >
              Contact Me

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.17c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92v2.85c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.17 0-3.14 1.2-3.68 2.04V8.5H9.32V21h3.3v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.86 2 3.31V21H21v-7.15Z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https:\/\/www.facebook.com\/profile.php?id=100083561838511"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.385H7.078V12h3.047V9.412c0-3.008 1.792-4.67 4.533-4.67 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.955.925-1.955 1.874V12h3.328l-.532 3.465h-2.796v8.385A12.002 12.002 0 0 0 24 12Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:asghar@example.com"
              aria-label="Email"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="hero-visual">

          <div className="hero-photo-wrapper">

            <div className="hero-ring ring-one"></div>
            <div className="hero-ring ring-two"></div>

            <img
              src="/images/Asghar.png"
              alt="Developer"
              className="hero-photo"
            />

          </div>

          <div className="hero-developer-text">
            <span>ّFull Stack</span>
            <strong>Developer</strong>
          </div>

          <div className="hero-code">
            &lt;/&gt;
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
