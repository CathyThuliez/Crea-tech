import React from 'react'
import Tel from '../images/ICON_CONTACT/icons8-tel-58.png'
import Position from '../images/ICON_CONTACT/icons8-commande-livrée-100.png'
import Mail from '../images/ICON_CONTACT/icons8-courrier-96.png'

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div className='contact-title'>
        <h2>Contact</h2>
        <div className='text-contact'>
          <p>Vous avez un <b>site à réaliser ?</b></p>
          <p><b>Une question</b>, ou tout simplement besoin d'un renseignement ?</p>
          <p><b>N'hésitez pas et contactez-nous.</b> </p>
        </div>
      </div>
      <div className='content'>
        <div className='contact-info'>
          <ul>
            <img src={Position} alt="" className='icon-contact' /><li> Nous rencontrer</li><br />
            <img src={Mail} alt="" className='icon-contact' /><li> Nous écrire</li><br />
            <img src={Tel} alt="" className='icon-contact' /><li> Nous appeler</li><br />
          </ul>
        </div>

        <div className='contact-form'>
          <input
            className="form-name"
            id="name"
            name="name"
            placeholder='Nom et Prénom'
            type="text"
          />
          <input
            className="form-eamil"
            id="email"
            name="email"
            placeholder='Email'
            type="email"
            required
          />
          <input
            className="form-sujet"
            id="sujet"
            name="sujet"
            placeholder='Sujet'
            type="Sujet"
          />
          <textarea className='form-message'
            id="message"
            name="message"
            placeholder='Message'
            rows='3'>
          </textarea>
          <button className='btn' type='submit'> <span>Envoyer la demande </span></button>
        </div>
      </div>
    </section>
  )
}
export default Contact