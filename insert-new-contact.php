<?php

	function insert_new_contact($name, $email){
		mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
		require "db_connect.php";
		$conn = connect_to_and_select_db();
		$name_db = mysqli_real_escape_string($conn, addslashes($name));
		$email_db = mysqli_real_escape_string($conn, addslashes($email));		


		$sql = "INSERT IGNORE INTO contacts(name, email)VALUES('$name_db', '$email_db')";	

		if($conn->query($sql) === TRUE){
			//echo "New record created successfully";
		}else{
			echo "Error: ".$sql."<br>" .$conn->error;
		}
	
		//Close connection to db
		mysqli_close($conn);




		//$add_slashes_email = addslashes($email);
		/*echo $email_db;
		//echo $add_slashes_email;
		$sql1 = "SELECT email FROM contacts WHERE email = '".$email."'";
		$result1 = $conn->query($sql1);
		//var_dump($result1);
           
		if($result1->num_rows == 0) {
			$sql2 = "INSERT INTO contacts(name, email)VALUES('$name_db', '$email_db')";	
			if($conn->query($sql2) === TRUE){
				echo "New record created successfully";
			}else{
				echo "Error: ".$sql2."<br>" .$conn->error;
			}			
		}else{
			echo "row found";
		}
	
		//mysqli_free_result($result1);//Free memory 

		//Close connection to db
		mysqli_close($conn);*/

	}

?>