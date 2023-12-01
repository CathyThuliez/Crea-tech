import "./Footer.css";
import React, { Component } from "react";
import Facebook from "../images/ICON_FOOTER/facebook-logo.png";
import Instagram from "../images/ICON_FOOTER/instagram-logo.png";
import { Link } from "react-router-dom";

class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="footer-container">
          <a href="#contact">
            <p className="footer-contact">Contactez moi</p>
          </a>
          <div className="footer-legal-mention">
            <Link
              to="/mentionlegales"
              target="_blank"
              rel=""
            >
              <p> Mention légales</p>
            </Link>
              <p className="footer-copyright">Copyright</p>
          </div>
          <p className="footer-social-media">
            <a
              href="https://www.facebook.com/Cr34T3ch/?locale=fr_FR"
              target="_blank"
            >
              <img
                className="facebook-logo"
                src={Facebook}
                alt="facebook-logo"
              />
            </a>
            <a href="https://www.instagram.com/cr3at3ch/" target="blank">
              <img src={Instagram} alt="instagram-logo" />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
