<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $firstname = $_POST["firstname"];
    $email = $_POST["email"];
    $select = $_POST["select"];
    $message = $_POST["message"];

    $to = "corentin.orczyk@outlook.fr"; // Adresse e-mail de destination
    $subject = "Nouveau message de " . $name . " " . $firstname;
    $email_body = "Sujet : " . $select . "\n\n" . $message . "\n\nEmail de l'expéditeur : " . $email;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(array("message" => "E-mail envoyé avec succès !"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Erreur lors de l'envoi de l'e-mail"));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Méthode non autorisée"));
}