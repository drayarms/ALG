<?php

	$alg_email = "akofulawgroup@gmail.com";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$website = $_POST["website"];
	$msg = $_POST["msg"];

	$feedback = "Thanks for your submission.";

	//Store in database
	require "db_connect.php";
	$conn = connect_to_and_select_db();
	//Insert into db
	$name_db = mysqli_real_escape_string($conn, addslashes($name));
	$email_db = mysqli_real_escape_string($conn, addslashes($email));
	$website_db = mysqli_real_escape_string($conn, addslashes($website));
	$msg_db = mysqli_real_escape_string($conn, addslashes($msg));	
	//$name_db = addslashes($name);//To escape special chars such as single quotes
	//$email_db = addslashes($email);
	//$website_db = addslashes($website);
	//$msg_db = addslashes($msg);	
	
	$sql = "INSERT INTO testimonials(name, email, website, comment, enabled, date_created)
	VALUES('$name_db', '$email_db', '$website_db', '$msg_db', 0, now())";
	

	/*$sql = "INSERT INTO testimonials(name, email, website, comment, enabled, date_created) VALUES (?, ?, ?, ?, ?, ?)";
	$stmt = mysqli_prepare($conn, $sql) or die(mysqli_error($dbh));
	//idbs for int, double, blob, string
	$stmt->bind_param('ssssis', $name_db, $email_db, $website_db, $msg_db, $enabled_var, $date);
	
	$name_db = "$name";//addslashes($name);//$name;//"John";//$name;
	$email_db = "$email";//addslashes($email);//$email;//"sfd@sfda.ds";//$email;
	$website_db = "$website";//addslashes($website);//$website;//"www.dfdf.ld";//$website;
	$msg_db = "$msg";//addslashes($msg);//$msg;//"I'm like really smart";//$msg;	
	$enabled_var = 0;
	//$date = new DateTime()->format('m/d/Y');
	$date = date("m/d/Y");	
	
	$stmt->execute();
	$stmt->close();	*/
	
	
	if($conn->query($sql) === TRUE){
		//echo "New record created successfully";
	}else{
		echo "Error: ".$sql."<br>" .$conn->error;
	}
	
	//Close connection to db
	mysqli_close($conn);

	
	//Send email to admin
	require "send_emails.php";
	send_email_to_us($email, $name, $alg_email, "ALG Client", our_payload($name, null, $email, null, $website, $msg), $feedback);




/*If you're looking to store the current time just use MYSQL's functions.

mysql_query("INSERT INTO `table` (`dateposted`) VALUES (now())");
If you need to use PHP to do it, the format it Y-m-d H:i:s so try

$date = date('Y-m-d H:i:s');
mysql_query("INSERT INTO `table` (`dateposted`) VALUES ('$date')");*/

?>



