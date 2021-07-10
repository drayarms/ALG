
<?php

	 $name = $_POST["name"];
	 $email = $_POST["email"];
	 $phone = $_POST["phone"];
	 $msg = $_POST["msg"];
	 
	 for($i = 0; $i < 9999999; $i++){
		$a = $i+1;
	 }
	 
	 echo "Thanks for contacting us ".$name.". A confirmation email has been sent to ".$email." -the email address you provided- and we will be reaching out to you shortly."

?>