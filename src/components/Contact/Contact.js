import React, { Fragment , useState } from "react";
import Info from "./Info";
import "./Contact.css";

const Contact = () => {
  return (
    <Fragment>
      <section id="Contact" class="contact">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>
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
          <div className="info">
            <Info />
          </div>
        </div>
        <div className="form">
          <form
          className="contact-form"
          action=""
          method="post"
        >
            <label className="form-label" htmlFor="name">
              Nom
              <input
                className="form-name"
                id="name"
                name="name"
                placeholder="Magination"
                type="text"
                required
            />
            </label>

          <label className="form-label" htmlFor="firstname">
            Prénom
            <input
              className="form-firstname"
              id="firstname"
              name="firstname"
              placeholder="Kelly"
              type="text"
              required

            />
          </label>

          <label className="form-label" htmlFor="email">
            E-mail
            <input
              className="form-eamil"
              id="email"
              name="email"
              defaultValue=""
              render={({ field }) => <input {...field} />}
              placeholder="KellyMagination@gmail.com"
              type="email"
              required

            />
          </label>

          <label className="form-label" htmlFor="select">
            Sujet
            <select
              className="form-sujet"
              id="select"
              name="select"
              type="select"
              required

            >
              <option value={""} hidden>
                Choisir une option
              </option>
              <option value={"website"}>Création de site</option>
              <option value={"formation"}>Initation au numérique</option>
              <option value={"reparation"}>
                Réparation et entretien informatique
              </option>
              <option value={"Autre"}>Autre (préciser dans le message)</option>
            </select>
          </label>

          <label className="form-label" htmlFor="file">
            Sélectionner un fichier
            <input className="form-file" id="file" name="file" type="file" />
          </label>

          <label className="form-label" htmlFor="message">
            Un commentaire ? Une précision ?
            <textarea
              className="form-message"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            />
          </label>
          <button className="btn" type="submit" id="btn-contact">
            <a href="#">
              <span>Envoyer la demande </span>
            </a>
          </button>
        </form>
      </div>
    </section>
    </Fragment>
  );
};
export default Contact;
