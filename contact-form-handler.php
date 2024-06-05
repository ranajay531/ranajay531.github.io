<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $user_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

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
}

?>