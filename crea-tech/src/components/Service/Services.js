import "./Service.css";
import React, { Fragment, useState } from "react";
import Ecran from "../images/ICON_SERVICES/icons8-télévision-100.png";
import WordPress from "../images/ICON_SERVICES/icons8-wordpress.svg";
import Caddie from "../images/ICON_SERVICES/icons8-caddie-96.png";
import Smartphone from "../images/ICON_SERVICES/icons8-smartphone-96.png";
import Ordi from "../images/ICON_SERVICES/icons8-ordinateur-portable-96.png";
import RS from "../images/ICON_SERVICES/icons8-bavarder-100.png";

const Service = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="service"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>En savoir plus.</p>
      </div>
      {isHovered && (
        <div className="service-description">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const serviceData = [
    {
      image: Ecran,
      title: "Conception de sites web",
      description:
        "A notre époque avoir un site web est devenu indispensable tant pour la visibilité de votre entreprise que pour sa notoriété. Ce qui fait de votre site la vitrine de votre entreprise, le premier contact que le client a avec elle. Crea-Tech est là pour vous aider à choisir le site qui vous conviendra le mieux et qui vous permettra d`accroître votre clientèle.",
    },
    {
      image: WordPress,
      title: "Site vitrine",
      description: "Site créé avec le CMS WordPress et le thème de votre choix ou from scratch. C’est la meilleure façon de montrer votre travail sur plusieurs pages. Nous nous chargeons, bien entendu, de vous former afin que vous puissiez faire d’éventuelles modifications en toute sérénité.",
    },
    {
      image: Caddie,
      title: "Site E-commerce",
      description: "Vous souhaitez développer votre activité en ligne ? Rien de tel qu’un site E-commerce ! Pour vous donner la meilleure expérience possible, nous utilisons le CMS WordPress couplé au module WooCommerce.",
    },
    {
      image: Smartphone,
      title: "Service 4",
      description: "Description du service 4.",
    },
    {
      image: Ordi,
      title: "Site one page",
      description: "Avec ou sans CMS, c’est le site idéal pour les personnes pressées qui souhaitent que le site soit terminé dans les plus brefs délais. Ce genre de site convient parfaitement aux personnes qui désirent montrer en quoi consiste leur activité.",
    },
    {
      image: RS,
      title: "Service 6",
      description: "Description du service 6.",
    },
  ];

  return (
    <Fragment>
      <section className="services-page" id="services">
        <h2>Services</h2>
        <div className="services">
          <div className="service-row">
            {serviceData.slice(0, 3).map((service, index) => (
              <Service
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="service2">
            {serviceData.slice(3).map((service, index) => (
              <Service
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="section-separator"></div>
    </Fragment>
  );
};

export default Services;
