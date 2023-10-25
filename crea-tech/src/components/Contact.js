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

        <form className="contact-form">
          <label>
            Nom
            <input
              className="form-name"
              id="name"
              name="name"
              placeholder="Nom"
              type="text"
              required
            />
          </label>

          <label>
            Prénom
            <input
              className="form-firstname"
              id="firstname"
              name="firstname"
              placeholder="Prénom"
              type="text"
              required
            />
          </label>

          <label>
            E-mail
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
          </label>
          <label>
            Sujet
            <select
              className="form-sujet"
              id="select"
              name="select"
              placeholder="Sujet"
              type="select"
              required
            >
              <option value={""} hidden>
                Choissir une option
              </option>
              <option value={"wordpress"}>Wordpress</option>
              <option value={"formation"}>Formation</option>
              <option value={"website"}>Création de site</option>
            </select>
          </label>

          <label>
            Sélectionner un fichier
            <input className="form-file" id="file" name="file" type="file" />
          </label>

          <label>
            Un commentaire ? Une précision ? Dites-nous tout
            <textarea
              className="form-message"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            />
          </label>
          <button className="btn" type="submit">
            <a href="#">
              <span>Envoyer la demande </span>
            </a>
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
