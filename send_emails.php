
<?php

	/*
	You must turn “Send E-mails” On: 000webhost Website Settings > General
	*/

	require "composer/vendor/phpmailer/phpmailer/src/Exception.php";
	require "composer/vendor/phpmailer/phpmailer/src/PHPMailer.php";
	require "composer/vendor/phpmailer/phpmailer/src/SMTP.php";
	//require_once "composer/vendor/autoload.php";

	use PHPMailer\PHPMailer\Exception;		
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;

	
	function configure_php_mailer($mail){

		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587;
		$mail->Username = "testemail1002000@gmail.com";
		$mail->Password = "Only4TestingPurposes";
		$mail->SMTPSecure = "tls";
		$mail->SetFrom("testemail1002000@gmail.com", "Me");		
		
	}



	function send_email_to_us($sender_email, $sender_name, $alg_email, $subject, $payload, $feedback){
	
		//PHPMailer Object
		$mail = new PHPMailer(true); //Argument true in constructor enables exceptions
		configure_php_mailer($mail);

		//From email address and name
		$mail->From = $sender_email;
		$mail->FromName = $sender_name;

		//To address and name
		//$mail->addAddress("ngusumakofu1@gmail.com", "Ngusum Akofu");
		//THIS SHOULD BE ALG'S OFFICIAL EMAIL
		$mail->addAddress($alg_email); //Recipient name is optional

		//Address to which recipient will reply
		$mail->addReplyTo($sender_email, "Reply");

		//CC and BCC
		//$mail->addCC("ngusumakofu@gmail.com");
		//$mail->addBCC("ngusumakofu@yahoo.com");

		//Send HTML or Plain Text email
		$mail->isHTML(true);

		$mail->Subject = $subject;
		$mail->Body = $payload;
		$mail->AltBody = "Content still being downloaded from server...";

		try{
			$mail->send();				
			echo $feedback;
		}catch (Exception $e){
			echo "Mailer Error: " . $mail->ErrorInfo;
		}
		
		
	}


	function send_email_to_client($sender_email, $recipient_email, $subject, $payload, $feedback){
	
		//PHPMailer Object
		$mail = new PHPMailer(true); //Argument true in constructor enables exceptions
		configure_php_mailer($mail);

		//From email address and name
		$mail->From = $sender_email;
		$mail->FromName = "Akofu Law Group";

		//To address and name
		//$mail->addAddress("ngusumakofu1@gmail.com", "Ngusum Akofu");
		
		$mail->addAddress($recipient_email); //Recipient name is optional
		//Address to which recipient will reply
		$mail->addReplyTo($sender_email, "Reply");

		//CC and BCC
		//$mail->addCC("ngusumakofu@gmail.com");
		//$mail->addBCC("ngusumakofu@yahoo.com");

		//Send HTML or Plain Text email
		$mail->isHTML(true);

		$mail->Subject = $subject;
		$mail->Body = $payload;
		$mail->AltBody = "Thanks for contacting Akofu Law Group. We will be contacting you shortly.";


		try{
			$mail->send();				
			echo $feedback;
		}catch (Exception $e){
			echo "Mailer Error: " . $mail->ErrorInfo;
		}
		
		
	}


	function our_payload($name, $phone, $email, $address, $website, $msg){
		$payload = "
			<div style = 'margin:auto;width:50px;height:50px;border-radius:50%'> <img src='http://akofulawgroup.com/images/logos/akofulawgroupllc3.jpg' alt='Logo'> </div>
			<p style = 'position:relative;top:60px'>";
			
			if(!is_null($name)){
				$payload = $payload."From: ".$name."<br>";
			}
			if(!is_null($phone)){
				$payload = $payload."Phone: ".$phone."<br>";
			}
			if(!is_null($email)){
				$payload = $payload."Email: ".$email."<br>";
			}			
			if(!is_null($address)){
				$payload = $payload."Address: ".$address."<br>";
			}
			if(!is_null($website)){
				$payload = $payload."Website: ".$website."<br>";
			}			

			$payload = $payload."
			</p>
			<p style = 'position:relative;top:60px'>".$msg."</p>
		";	

		return wordwrap($payload ,70);
	}

	function client_payload($name, $alg_email){
		$payload = "
			<div style = 'margin:auto;width:50px;height:50px;border-radius:50%'> <img src='http://akofulawgroup.com/images/logos/akofulawgroupllc3.jpg' alt='Logo'> </div>
		
			<p style = 'position:relative;top:60px;background:#cca300;padding:4px;'>
				Ifang Akofu Andong, Esq.<br>
				Akofu Law Group, LLC.<br>
				2070 Sugarloaf Parkway<br>
				Suite 700<br>
				Lawrenceville, GA 30045<br>
			</p>
		
			<p style = 'position:relative;top:60px;background:#f2f2f2;padding:4px;'>
				Thank you for contacting us ".$name.". We will be getting in touch with you shortly.
			</p>
		
			<p style = 'position:relative;top:60px;background:#e6e6e6;font-size:60%;padding:4px' >
				You are receiving this email because you or someone of your behalf, contacted Akofu Law Group LLC. Be sure to add ".$alg_email." to your contact list so Akofu Law Group emails make it into your inbox. 
				If you no longer wish to receive correspondents from us, you may <a href = 'http://akofulawgroup.com/unsubscribe'>unsubscribe</a> here.
			</p>
		";
		
		return wordwrap($payload ,70);
	}


?>







