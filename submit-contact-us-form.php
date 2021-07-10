
<?php

	 $name1 = $_POST["name1"];
	 $name2 = $_POST["name2"];
	 $address1 = $_POST["address1"];
	 $address2 = $_POST["address2"];
	 $email = $_POST["email"];
	 $phone = $_POST["phone"];
	 $msg = $_POST["msg"];
	 
	 require "send_emails.php";
	 
	 $name = $name1." ".$name2;
	 receive_contact_email($name, $email, $phone, $msg);
	 
	 for($i = 0; $i < 9999999; $i++){
		$a = $i+1;
	 }
	 
	 echo "Thanks for contacting us ".$name1.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly."

?>