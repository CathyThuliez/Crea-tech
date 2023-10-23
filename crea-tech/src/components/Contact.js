import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Contact = () => {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Envoyez les données du formulaire à votre serveur ou effectuez d'autres actions ici.
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nom">Nom</label>
          <Controller
            name="nom"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.nom && <p>{errors.nom.message}</p>}
        </div>

        <div>
          <label htmlFor="prenom">Prénom</label>
          <Controller
            name="prenom"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.prenom && <p>{errors.prenom.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="sujet">Sujet</label>
          <Controller
            name="sujet"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="">-- Sélectionnez un sujet --</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="autre">Autre</option>
              </select>
            )}
          />
        </div>

        <div>
          <label htmlFor="commentaire">Commentaire</label>
          <Controller
            name="commentaire"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea {...field} />}
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;