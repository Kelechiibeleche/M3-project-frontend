import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h3>RoloCloud</h3>
        <p>Keep your contacts safe — the cloud way ☁️</p>

        <p>Made with 💙 by Kelechi for WD-FT-SEPT25</p>

        <p>© 2025 RoloCloud. All rights reserved.</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <Link to="/contacts">All Contacts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="footer-social">
        <h4>Let´s connect</h4>
        <a
          href="https://github.com/Kelechiibeleche"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kelechi-ibeleche-6a984b173/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
