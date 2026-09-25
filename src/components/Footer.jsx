
import { ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <p>
          © {new Date().getFullYear()} Asghar Mohammadi.
          All rights reserved.
        </p>

        <button
          type="button"
          className="back-to-top"
          onClick={goToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;

