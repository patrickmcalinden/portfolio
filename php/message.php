<?php
    $userName = $_POST['contact-name'];
    $userEmail = $_POST['contact-email'];
    $userPhone = $_POST['contact-phone'];
    $message = $_POST['contact-message'];

    $to = "patrickmcalinden226@gmail.com";
    $body = "";

    $body .= "From: ".$userName. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$message. "\r\n";

    mail($to,"New Email",$body);
?>