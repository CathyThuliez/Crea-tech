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
      title: "Service 1",
      description: "Description du service 1.",
    },
    {
      image: WordPress,
      title: "Service 2",
      description: "Description du service 2.",
    },
    {
      image: Caddie,
      title: "Service 3",
      description: "Description du service 3.",
    },
    {
      image: Smartphone,
      title: "Service 4",
      description: "Description du service 4.",
    },
    {
      image: Ordi,
      title: "Service 5",
      description: "Description du service 5.",
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
        <h2>Nos Services</h2>
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
