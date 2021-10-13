<?php

	$email = $_GET['email'];
	require "db_connect.php";
	$conn = connect_to_and_select_db();	
	//$email_db = mysqli_real_escape_string($conn, addslashes($email));	
	
	$sql = "DELETE FROM contacts WHERE email='".$email."'";

	if ($conn->query($sql) === TRUE) {
		echo "Your email ".$email." has been removed from our mailing list.";
		//"To subcribe, click <a href = ''>here</a>"		
	} else {
		echo "Error deleting record: " . $conn->error;
	}

	$conn->close();	
	
?>