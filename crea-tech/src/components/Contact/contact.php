<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['name'];
    $prenom = $_POST['firstname'];
    $email = $_POST['email'];
    $sujet = $_POST['select'];
    $message = $_POST['message'];

    // Adresse e-mail de réception
    $destinataire = "contact@crea-tech.fr";

    // Sujet de l'e-mail
    $sujet_email = "Nouveau message de contact depuis le site";

    // Corps du message
    $contenu = "Nom: $nom\n";
    $contenu .= "Prénom: $prenom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Sujet: $sujet\n";
    $contenu .= "Message:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";

    // Envoi de l'e-mail
    if (mail($destinataire, $sujet_email, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
