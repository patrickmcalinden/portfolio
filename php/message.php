<?php

if (isset($_POST['sumbit'])){
    $name = $_POST['contact-name'];
    $email = $_POST['contact-email'];
    $phone = $_POST['contact-phone'];
    $message = $_POST['contact-message'];


    $mailto = "patrickmcalinden226@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You got an email form".$name.".\n\n".$message;

    mail($mailto, $subject, $txt, $headers);
    header("Location: index.html?email-sent");

}

?>