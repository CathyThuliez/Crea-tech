import React, { useEffect, useState } from "react";
import Logo from "../images/Logo_Crea_Tech/logo_blanc.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });

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
            <li className={activeSection === "accueil" ? "active" : ""}>
              <a href="#accueil">Accueil</a>
            </li>
            <li className={activeSection === "services" ? "active" : ""}>
              <a href="#services">Services</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">A Propos</a>
            </li>
            <li className={activeSection === "projects-title" ? "active" : ""}>
              <a href="#projects-title">Avis</a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a href="#contact">Contact</a>
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
