import React, { Fragment, useState } from "react";
import "../AllServices/Service.css";
import Ecran from "../images/ICON_SERVICES/icons8-télévision-100.png";
import WordPress from "../images/ICON_SERVICES/icons8-wordpress.svg";
import Caddie from "../images/ICON_SERVICES/icons8-caddie-96.png";
import Smartphone from "../images/ICON_SERVICES/icons8-smartphone-96.png";
import Ordi from "../images/ICON_SERVICES/icons8-ordinateur-portable-96.png";
import RS from "../images/ICON_SERVICES/icons8-bavarder-100.png";

// Composant Produit

const Product = ({ imgSrc, title, description, onClick, isActive }) => {
  return (
    <div className={`bloc ${isActive ? "actived" : ""}`} onClick={onClick}>
      <div className="bloc-haut">
        <button className="see-more"></button>
        <div className="rond">
          <img src={imgSrc} alt={title} />
        </div>
        <p className="titre-section">{title}</p>
      </div>
      <div className="contenu">
        <img src={imgSrc} alt={title} />
        <div className="infos">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// Composant Liste de Produits
const Services = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      imgSrc: Ordi,
      title: "Site one page",
      description:
        "Avec ou sans CMS, c’est le site idéal pour les personnes pressées qui souhaitent que le site soit terminé dans les plus brefs délais. Ce genre de site convient parfaitement aux personnes qui désirent montrer en quoi consiste leur activité.",
    },
    
    {
      imgSrc: Caddie,
      title: "Site E-commerce",
      description:
        "Vous souhaitez développer votre activité en ligne ? Rien de tel qu’un site E-commerce ! Pour vous donner la meilleure expérience possible, nous utilisons le CMS WordPress couplé au module WooCommerce.",
    },

    {
      imgSrc: WordPress,
      title: "Site vitrine",
      description:
        "Site créé avec le CMS WordPress et le thème de votre choix ou from scratch. C’est la meilleure façon de montrer votre travail sur plusieurs pages. Nous nous chargeons, bien entendu, de vous former afin que vous puissiez faire d’éventuelles modifications en toute sérénité.",
    },

    {
      imgSrc: Smartphone,
      title: "Site Responsive",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    },
  ];


  const handleProductClick = (index) => {
    if (activeProduct === index) {
      setActiveProduct(null); // Ferme la div si elle est déjà ouverte
    } else {
      setActiveProduct(index); // Ouvre la div du produit cliqué
    }
  };

  return (
    <Fragment>
      <h2 className="first_services_title">Conception de site web</h2>
      <div className="container" id="first_container">
        {products.map((product, index) => (
          <Product
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
            isActive={activeProduct === index}
            onClick={() => handleProductClick(index)}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
