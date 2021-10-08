<?php

	$testimonial_statements = array();
	
	/*array_push($testimonial_statements, array("Donald Trump", "www.stablegenius.org", "I know words, I have the best words, you see I'm like a smart person. And this lawyer is a loser. Totally light weight. I prefer
	lawyers like Roy Comb because he is a real fixer. He fixed stuff for my dad. And btw my Dad left me a small forturne and I turned it into a multi billion
	dollar business. The radical Dems are trying to take away everything and it's not me they are after, it's you, the hardworking forgotten men and women. Becuase I'm a genius and
	 I beat them twice. Sleepy Joe has totally let the country out of control.", "Jan 15, 2020"));
	array_push($testimonial_statements, array("John Doe", "www.abcd.org", "This law firm is awesome!", "Apr 30, 2020"));
	array_push($testimonial_statements, array("Jane Doe", "www.hijkl.com", "Two thumbs up. Excellent attorneys. Great service.", "Dec, 03, 2020"));
	array_push($testimonial_statements, array("Back and Chin Man", "www.flizo.info", "I'd recommend anytime of the day, twice on Sunday. They handled my case with outstanding professionalism. Totally worth the $$$."
	, "02, 15, 2021"));*/
	
	
	//Store in database
	require "db_connect.php";
	$conn = connect_to_and_select_db();	
	
	$sql = "SELECT name, website, comment, date_created FROM testimonials WHERE enabled=1";
	$result = $conn->query($sql);
           
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()){
			
			array_push($testimonial_statements, array($row["name"], $row["website"], $row["comment"], $row["date_created"]));
             
		}
	}
	
	mysqli_free_result($result);//Free memory 

	//Close connection to db
	mysqli_close($conn);	
	
?>