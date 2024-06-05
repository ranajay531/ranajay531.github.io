<?php

    $name = $_POST['Name'];
    $user_email = $_POST['Email'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];
    $phone = $_POST['Phone'];

    $email_from = "ranajay531@gmail.com";
    $email_subject = "New Form Submission: $subject";
    $email_body = "User Name: $name.\n".
                    "User Email: $user_email.\n".
                    "User Phone: $phone.\n".
                    "User Message: $message.\n";
    
    $to = "ranajay531@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $user_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>