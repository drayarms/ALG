
<?php

	$alg_email = "akofulawgroup@gmail.com";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$msg = $_POST["msg"];
	 
	require "send_emails.php";
	 
	$feedback = "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly.";
	//$feedback = "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly. If you don't receive our email, please check your junk folder.";
	 
	//FIRST ARG SHOULD BE ALG OFFICIAL EMAIL
	send_email_to_client($alg_email, $email, "Thanks for Contacting Us", client_payload($name, $alg_email, $email), $feedback);

	send_email_to_us($email, $name, $alg_email, "ALG Client", our_payload($name, $phone, null, null, null, $msg), $feedback);
	//echo "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly."

	require "insert-new-contact.php";
	insert_new_contact($name, $email);

?>