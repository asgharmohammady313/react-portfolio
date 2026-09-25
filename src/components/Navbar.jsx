
import { useState } from "react";

import {
  Download,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Toggle dark / light mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Asghar Mohammadi Portfolio"
        >
          <span>A</span>S
        </a>

        {/* NAVIGATION */}
        <nav
          className={`navbar-links ${menuOpen ? "active" : ""}`}
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

        {/* RIGHT SIDE ACTIONS */}
        <div className="navbar-actions">

          {/* DOWNLOAD CV */}
          <a
            href="/CV/Asghar-Mohammadi-CV.png"
            download="Asghar-Mohammadi-CV.png"
            className="download-cv"
            aria-label="Download Asghar Mohammadi CV"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>

          {/* DARK / LIGHT MODE */}
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              darkMode
                ? "Light mode"
                : "Dark mode"
            }
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;

