
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
		//$mail->Username = "testemail1002000@gmail.com";
		//$mail->Password = "Only4TestingPurposes";
		$mail->Username = "akofulawgroup@gmail.com";
		$mail->Password = 'Mushing@r@t1';		
		$mail->SMTPSecure = "tls";
		//$mail->SetFrom("testemail1002000@gmail.com", "Me");		
		$mail->SetFrom("akofulawgroup@gmail.com", "Me");	
		
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
			//echo $feedback;
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
		$payload = 	include_header();
			
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
			<p style = 'position:relative;top:60px;line-height:1.8;padding-top:25px;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;'>".$msg."</p>
		";	

		return wordwrap($payload ,70);
	}

	function include_header(){
			return "
			<div style = 'width:100%;margin:auto;height:110px;background:#001a33;'>
				<div style = 'float:left;width:5%;height:110px;'>
					<div style = 'width:50px;height:50px;'> <!--<img style = 'margin:0;border:0;padding:0;display:block;' height = '500' width = '500' src='http://akofulawgroup.com/images/logos/akofulawgroupllc3.jpg' alt='Logo'>--> </div>
				</div>
				<div style = 'float:left;width:49%;color:#cca300;font-size:100%;padding-top:15px;padding-left:5px;'>
					<div>Contact Us</div>
					<div>(470)430-8035</div>
					<div>(641)980-5076</div>
				</div>
			</div>";		
	}

	function include_practice_area(&$payload, $article_file, $title, $extension){
		$payload = $payload. "<h2 style = 'text-align:center;padding-top:15px;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;font-weight:190;color:rgb(186, 45, 139);'>".$title."</h2>";
		$file_len = strlen(file_get_contents($article_file));
		$article = file_get_contents($article_file, 1, NULL, 0, 1400);
		$payload = $payload. "<h5 style = 'line-height:1.8;padding-top:10px;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;font-weight:190;color: rgb(51, 51, 51);text-align: justify;'>" .$article;
		if($file_len > 1400){
			$payload = $payload."...";
		}
		$payload = $payload."</h5>";
		if($file_len > 1400){
			$payload = $payload. "<p style = '	text-align:center;margin-top:10px;'> <a style = 'cursor:pointer;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;font-weight:normal;font-size:120%;color:rgb(51, 51, 51);text-decoration:underline;' href = 'http://akofulawgroup.com/practice-areas.php#".$extension."'>Read More</a></p>";
		}			
	}

			//<h4 style = 'border:2px dotted orange;position:relative;top:60px;padding-top:4px;width:90%;margin:auto;line-height:1.8;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;'>
				//Thank you for contacting us ".$name.". We will be getting in touch with you shortly. In the meantime, visit our site <a href = 'http://akofulawgroup.com' style = 'text-decoration:none;color:#ba2d8b;font-size:140%;'>akofulawgroup.com</a> for questions regarding your legal needs. 
			//</h4>				
	
	function client_payload($name, $alg_email, $client_email){
		$payload = 	include_header();
			
			$payload = $payload."
			<div style = 'position:relative;top:40px;margin-bottom:40px;line-height:1.8;font-size:100%;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;'>
				Thank you for contacting us ".$name.". We will be getting in touch with you shortly. In the meantime, visit our site <a href = 'http://akofulawgroup.com' style = 'text-decoration:none;color:#ba2d8b;font-size:120%;'>akofulawgroup.com</a> for questions regarding your legal needs. 
			</div>				
			
			<p style = 'width:90%margin:auto;position:relative;top:60px;background:#cca300;padding:10px;color:#001a33;font-size:100%;line-height:1.8;padding-top:25px;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;'>
				Ifang Akofu Andong, Esq.<br>
				Akofu Law Group, LLC.<br>
				2070 Sugarloaf Parkway<br>
				Suite 700<br>
				Lawrenceville, GA 30045<br>
			</p>
			<br><br><br><br>
			<!--<p style = 'width:90%margin:auto;position:relative;top:370px;background:#f2f2f2;padding:4px;'>-->
			";			
				include_practice_area($payload, 'http://akofulawgroup.com/practice-areas/business-transactions.php', 'Business Transactions', 'business-transactions');
				include_practice_area($payload, 'http://akofulawgroup.com/practice-areas/personal-injury.php', 'Personal Injury', 'personal-injury');
				include_practice_area($payload, 'http://akofulawgroup.com/practice-areas/immigration.php', 'Immigration', 'immigration');
			$payload = $payload."
			<!--</p>-->
			
			<p style = 'position:relative;top:60px;background:#e6e6e6;font-size:60%;padding:4px';line-height:1.3;padding-top:25px;font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif; >
				This electronic message transmission contains information from Akofu Law Group, LLC that may be confidential or privileged. The information is intended solely for the recipient and use by any other party is not authorized. If you are not the intended recipient, be aware that any disclosure, copying, distribution or use of the contents of this transmission is prohibited. If you have received this electronic transmission in error, please notify us immediately at the above listed number or by electronic mail. Thank you.
				©All Rights Reserved <br> </br>			
				
				You are receiving this email because you or someone of your behalf, contacted Akofu Law Group LLC. Be sure to add ".$alg_email." to your contact list so Akofu Law Group emails make it into your inbox. 
				If you no longer wish to receive correspondents from us, you may <a href = 'http://akofulawgroup.com/unsubscribe.php?email=".$client_email."'>unsubscribe</a> here.
			</p>
		";
		
		return wordwrap($payload ,70);
	}


?>







