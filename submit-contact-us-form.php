
<?php

	$alg_email = "drayarms@yahoo.com";
	$name1 = $_POST["name1"];
	$name2 = $_POST["name2"];
	$address1 = $_POST["address1"];
	$address2 = $_POST["address2"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$msg = $_POST["msg"];
	 
	$name = $name1." ".$name2;
	$address = $address1." ".$address2;
	 
	require "send_emails.php";
	 
	$feedback = "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly.";
	//$feedback = "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly. If you don't receive our email, please check your junk folder.";
	 
	//FIRST ARG SHOULD BE ALG OFFICIAL EMAIL
	send_email_to_client($alg_email, $email, "Thanks for Contacting Us", client_payload($name, $alg_email), $feedback);

	send_email_to_us($email, $name, $alg_email, "ALG Client", our_payload($name, $phone, null, $address, null, $msg), $feedback);
	//echo "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly."
	

/*	 
	$payload = "
		From: ".$name."\n
		Email: ".$email."\n
		Phone: ".$phone."\n
		Address: ".$address."\n
		<i>".$msg."</i>
	";

	//Use wordwrap() if lines are longer than 70 characters
	$payload  = wordwrap($payload ,70);
	$feedback = "Thanks for contacting us ".$name1.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly.";
	 
	send_email_to_us($email, $name, "ALG Client", $payload, $feedback);	 
	//echo "Thanks for contacting us ".$name1.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly."
*/
?>