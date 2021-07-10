
<?php

	function receive_contact_email($name, $email, $phone, $msg){
		//$message = "First line of text\nSecond line of text";
		
		$message = "
			From: ".$name."\n
			Email: ".$email."\n
			Phone: ".$phone."\n
			<p>".$msg."</p>
		";

		//Use wordwrap() if lines are longer than 70 characters
		$message  = wordwrap($message ,70);

		mail("drayarms@yahoo.com","ALG Client" ,$message );	
		mail("ngusumakofu1@gmail.com","Potential Client" ,$message );			
	}

?>