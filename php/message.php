<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

    if (isset($_POST['sumbit'])){
        $name = $_POST['contact-name'];
        $email = $_POST['contact-email'];
        $phone = $_POST['contact-phone'];
        $message = $_POST['contact-message'];


        $to = "patrickmcalinden226@gmail.com";
        $from = $email;
        $subject = "Resume reachout";
        $message = $message;
        $headers = "From:" . $from;
            if(mail($to,$subject,$message, $headers)) {
		        echo "The email message was sent.";
            } else {
    	        echo "The email message was not sent.";

            }
?>