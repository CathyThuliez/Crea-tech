import React, { Fragment } from "react";
import Ecran from "../images/ICON_SERVICES/icons8-télévision-100.png";
import WordPress from "../images/ICON_SERVICES/icons8-wordpress.svg";
import Caddie from "../images/ICON_SERVICES/icons8-caddie-96.png";
import Smartphone from "../images/ICON_SERVICES/icons8-smartphone-96.png";
import Ordi from "../images/ICON_SERVICES/icons8-ordinateur-portable-96.png";
import RS from "../images/ICON_SERVICES/icons8-bavarder-100.png";

const Services = () => {
    return (
        <Fragment>
            <h2 id="services-title">Services</h2>
            <div className="projets-container">
                <div className="services">
                    <div className="service-image">
                        <img src={Ecran} alt="Site One Page" id="icon1" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>

                <div className="services">
                    <div className="service-image">
                        <img src={WordPress} alt="WordPress" id="icon2" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>

                <div className="services">
                    <div className="service-image">
                        <img src={Caddie} alt="E-commerce" id="icon3" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>

                <div className="services">
                    <div className="service-image">
                        <img src={Smartphone} alt="Responsive" id="icon4" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>

                <div className="services">
                    <div className="service-image">
                        <img src={Ordi} alt="Formation" id="icon5" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>

                <div className="services">
                    <div className="service-image">
                        <img src={RS} alt="Réseaux sociaux" id="icon6" />
                    </div>
                    <h3>Lorem ipsum</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, porro.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;
