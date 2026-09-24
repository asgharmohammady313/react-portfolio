import "./Hero.css";
import "./HeroResponsive.css";

function Hero() {
  // 140 animated stars
  const stars = Array.from({ length: 140 });

  return (
    <section id="home" className="hero">

      {/* Animated stars */}
      <div className="stars">
        {stars.map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              "--i": index,
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="hero-small-title">
            HELLO, I'M
          </p>

          <h1>
            Asghar <span>Mohammadi</span>
          </h1>

          <h2>
            Software Engineer
          </h2>

          <p className="hero-description">
            I’m a Full Stack Developer who builds modern, fast,
            responsive, and scalable web applications using
            modern technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary"
            >
              View My project
            </a>

            <a
              href="#contact"
              className="hero-btn secondary"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons - BELOW BUTTONS */}
          <div className="hero-socials">

            <a
              href="https://github.com/asgharmohammady313"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100083561838511"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="mailto:AsgharMohammady@email.com"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          {/* Background glow */}
          <div className="hero-glow"></div>

          {/* Neon Circle */}
          <div className="neon-circle">
            <div className="neon-circle-inner"></div>
          </div>

          {/* Profile Image */}
          <div className="profile-wrapper">

            <div className="profile-ring ring-one"></div>

            {/* <div className="profile-ring ring-two"></div> */}

            <div className="profile-image">
              <img
                src="/images/Asghar.png"
                alt="Asghar Mohammadi"
              />
            </div>

          </div>

          {/* Floating code symbols */}
          <div className="floating-code code-one">
            {"</>"}
          </div>

          <div className="floating-code code-two">
            {"{ }"}
          </div>

          <div className="floating-code code-three">
            {"01"}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;