import React, { useState } from 'react'
import Position from '../images/ICON_CONTACT/icons8-commande-livrée-100.png'
import Mail from '../images/ICON_CONTACT/icons8-courrier-96.png'
import Tel from '../images/ICON_CONTACT/icons8-tel-58.png'

const Contact = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='contact-info'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='contact-content'>
        <img src={image} alt={title} className='logo-contact'/>
        <h3>{title}</h3>
      </div>
      {isHovered && (
        <div className='contact-description'>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Contacts = () => {
  const contactData = [
    {
      image: Mail,
      title: "Nous écrire",
      description: "contact@crea-tech.fr",
    },
    {
      image: Tel,
      title: "Nous appeler",
      description: "06 42 14 03 29",
    },
  ];

  return (
    <section className='contacts-page' id="contacts">
      <div className='contacts'>
        <div className='contact-row'>
          {contactData.slice(0, 3).map((contact, index) => (
            <Contact
              key={index}
              image={contact.image}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts
