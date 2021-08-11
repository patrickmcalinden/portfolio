<?php

$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$phone = $_POST['contact-phonen'];
$message = $_POST['contact-message'];


if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $reciever = "patrickmcalinden226@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phonen\n\nMessage: $message";
        $sender = "From: $email";
        if(mail($reciever, $subject, $body, $sender)){
            echo "Message sent!";
        }else{
            echo "Failed to sened message!";
        }
    }else{
        echo "Enter a valid Email!";
    }
}else{
    echo "Email and Message fields are required!";
}
?>