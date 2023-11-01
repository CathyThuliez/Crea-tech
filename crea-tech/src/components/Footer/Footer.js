import "./Footer.css";
import React, { Component } from "react";
import Facebook from "../images/ICON_FOOTER/facebook-logo.png";
import Instagram from "../images/ICON_FOOTER/instagram-logo.png";
import Linkedin from "../images/ICON_FOOTER/linkedin-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <a href="#">
            <p className="footer-contact">Contactez moi</p>
          </a>
          <div className="footer-legal-mention">
            <a href="#">
              <p className="footer-privacy">Politique de confidentialité</p>
            </a>
            <a href="#">
              <p className="footer-notice">Mention légales</p>
            </a>
            <a href="#">
              <p className="footer-copyright">Copyright</p>
            </a>
          </div>
          <p className="footer-social-media">
            <a href="#">
              <img
                className="facebook-logo"
                src={Facebook}
                alt="facebook-logo"
              />
            </a>
            <a href="#">
              <img src={Instagram} alt="instagram-logo" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="linkedin-logo" />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
