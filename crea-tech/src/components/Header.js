import React, { useEffect, useState } from "react";
import Logo from "../images/Logo_Crea_Tech/logo_blanc.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed ? "navBar fixed-header" : "navBar";

  return (
    <div>
      <nav className={headerClassName}>
        <a href="#accueil">
          <img src={Logo} alt="" className="logo" />
        </a>
        <div className="Nav-links">
          <ul>
            <li className="active">
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#services-title">Services</a>
            </li>
            <li>
              <a href="#about">A propos</a>
            </li>
            <li>
              <a href="#projects-title">Avis</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <div className="contact_Header">
              <a href="#">
                contact@crea-tech.fr{" "}
                <p className="number_Header">06 42 14 03 29</p>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
