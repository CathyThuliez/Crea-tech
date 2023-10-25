import React, { Fragment } from "react";
import image1 from "../images/IMG_AVIS/boats-2378150_1280.jpg";
import image2 from "../images/IMG_AVIS/rainbow-5372890_1280.jpg";
import image3 from "../images/IMG_AVIS/darling-4077123_1280.jpg";
import image4 from "../images/IMG_AVIS/forest-438432_1280.jpg";
import image5 from "../images/IMG_AVIS/sea-164989_1280.jpg";
import image6 from "../images/IMG_AVIS/trees-3822149_1280.jpg";

const Projets = () => {
  return (
    <Fragment>
      <section id="projects-title">
        <h2>Ils nous ont fait confiance</h2>
        <div className="projets-container">
          <img
            src={image1}
            alt="Projet 1"
            className="project-image"
            id="img1"
          />
          <img
            src={image2}
            alt="Projet 2"
            className="project-image"
            id="img2"
          />
          <img
            src={image3}
            alt="Projet 3"
            className="project-image"
            id="img3"
          />
          <img
            src={image4}
            alt="Projet 4"
            className="project-image"
            id="img4"
          />
          <img
            src={image5}
            alt="Projet 5"
            className="project-image"
            id="img5"
          />
          <img
            src={image6}
            alt="Projet 6"
            className="project-image"
            id="img6"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Projets;
