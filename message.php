//Contact Form in PHP
<?php
  $name = htmlspecialchars($_POST['contact-name']);
  $email = htmlspecialchars($_POST['contact-email']);
  $phone = htmlspecialchars($_POST['contact-phone']);
  $message = htmlspecialchars($_POST['contact-message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "patrickmcalinden226@gmail.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Sent";
      }else{
         echo "Send Failed";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>