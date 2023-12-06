import React from "react";
import Mail from "../images/ICON_CONTACT/icons8-courrier-96.png";
import Tel from "../images/ICON_CONTACT/icons8-tel-58.png";
import "./Info.css";

const Contact = ({ image, title, texte, href, protocole }) => {
  return (
    <div
      className="contact-info">
      <div className="contact-content">
        <img src={image} alt={title} className="logo-contact" />
      </div>
        <div className="contact-description">
          <a href={protocole +':'+ href}>{texte}</a>
        </div>
    </div>
  );
};

const Contacts = () => {
  const contactData = [
    {
      image: Mail,
      texte: "contact@crea-tech.fr",
      href: "contact@crea-tech.fr",
      protocole: "mailto",
    },

    {
      image: Tel,
      texte: "06 42 14 03 29",
      href: "0642140329",
      protocole:"tel",
    },
  ];

  return (
    <section className="contacts-page" id="contacts">
      <div className="contacts">
        <div className="contact-row">
          {contactData.slice(0, 3).map((contact, index) => (
            <Contact
              key={index}
              image={contact.image}
              title={contact.title}
              texte={contact.texte}
              href={contact.href}
              protocole={contact.protocole}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
