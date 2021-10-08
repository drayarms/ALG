<?php

	function connect_to_and_select_db(){
		$servername = "localhost";
		$username = "id17667864_alg_db_usr";
		$password = "NaWhoFormFiddim?#4";

		$conn = new mysqli($servername, $username, $password);
		// Check connection
		if($conn->connect_error) {
			die("Connection to database failed: " . $conn->connect_error);
		}else{
			//Select db
			//echo "Connected successfully";
			if(!mysqli_select_db($conn, "id17667864_alg_db")){
				die("Could not select database");
			}else{
				//echo("database selected");
			}
		}
		
		return $conn;
	}	

?>