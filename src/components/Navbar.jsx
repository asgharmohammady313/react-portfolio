import { useState } from "react";
import {
  Download,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark / Light Mode
  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>A</span>S
        </a>

        {/* Navigation */}
        <nav
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Right Side Buttons */}
        <div className="navbar-actions">

          {/* Download CV */}
          <a
            href="/CV/Asghar-Mohammadi-CV.png"
            download
            className="download-cv"
          >
            <Download size={16} />
            Download CV
          </a>


          {/* Dark / Light Mode - آخرین دکمه */}
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;