/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Info from "./Info";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div className="contact-title">
        <h2>Contact</h2>
        <div className="text-contact">
          <p>
            Vous avez un <b>site à réaliser ?</b>
          </p>
          <p>
            <b>Une question</b>, ou tout simplement besoin d'un renseignement ?
          </p>
          <p>
            <b>N'hésitez pas et contactez-nous.</b>{" "}
          </p>
        </div>
      </div>
      <div className="content">
        <div className="contact-info">
          <Info /> 
        </div>

        <form className='contact-form'>
          <input
            className="form-name"
            id="name"
            name="name"
            placeholder="Nom et Prénom"
            type="text"
            required
          />
          <input
            className="form-eamil"
            id="email"
            name="email"
            defaultValue=""
            render={({ field }) => <input {...field} />}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="form-sujet"
            id="sujet"
            name="sujet"
            placeholder='Sujet'
            type="text"
            required
          />



          < textarea className='form-message'
            id="message"
            name="message"
            placeholder='Message'
            rows='3'
          />
          <button className='btn' type='submit'><a href="#"><span>Envoyer la demande </span></a></button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
