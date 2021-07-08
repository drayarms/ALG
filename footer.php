		<div class = "footer" style = "">
			<div class = "footer_upper_half" style = "border:1px solid transparent">
				<div class = "specialties_statements" style = "">
					<div class = "specialty_statement displayed">
						<h1 class = "specialty_statement_heading" style = "">Business Transactions</h1>
						<h5 class = "specialty_statement_text" style = "">
							<?php
								$article_file = "practice-areas/business-transactions.php";
								$article = file_get_contents($article_file, 1, NULL, 0, 2000);
								echo $article."...";
							?>
						</h5>
						<p class = "read_more"> <a href = "practice-areas.php#business-transactions">Read More</a></p>
					</div>
					<div class = "specialty_statement undisplayed" style = "display:none;">
						<h1 class = "specialty_statement_heading">Real Estate</h1>
						<h5 class = "specialty_statement_text">
							<?php
								$article_file = "practice-areas/real-estate.php";
								$article = file_get_contents($article_file, 1, NULL, 0, 2000);
								echo $article."...";
							?>
						</h5>
						<p class = "read_more"><a href = "practice-areas.php#real-estate">Read More</a></p>						
					</div>
					<div class = "specialty_statement undisplayed" style = "display:none;">
						<h1 class = "specialty_statement_heading">Immigration</h1>
						<h5 class = "specialty_statement_text">
							<?php
								$article_file = "practice-areas/immigration.php";
								$article = file_get_contents($article_file, 1, NULL, 0, 2000);
								echo $article."...";
							?>
						</h5>	
						<p class = "read_more"><a href = "practice-areas.php#immigration">Read More</a></p>					
					</div>					
				</div>
			</div>
			
			<div class = "footer_lower_half" style = "">
				<div class = "marketing_panel">
					<div class = "marketing_panel_box meet_attorney_box">
						<a href="attorney-profiles.php" class = "to_top">
							<div class = "marketing_panel_icon"> 
								<i class="fa fa-briefcase"></i>
							</div>
							<div class = "marketing_panel_text">Meet Our Attorneys</div>
							<div class = "marketing_panel_arrow">
								<i class="fa fa-arrow-right"></i>
							</div>
						</a>
					</div>
					<div class = "marketing_panel_box consultation_box"> 
						<a href="contact-us.php" class = "to_top">
							<div class = "marketing_panel_icon"> 
								<i class="fa fa-calendar"></i>
							</div>
							<div class = "marketing_panel_text">Schedule a Consultation</div>
							<div class = "marketing_panel_arrow">
								<i class="fa fa-arrow-right"></i>
							</div>
						</a>
					</div>
					<div class = "marketing_panel_box referrals_box"> 
						<a href="index.php" class = "to_top">
							<div class = "marketing_panel_icon"> 
								<i class="fa fa-users"></i>
							</div>
							<div class = "marketing_panel_text">Send Referrals</div>
							<div class = "marketing_panel_arrow">
								<i class="fa fa-arrow-right"></i>
							</div>
						</a>
					</div>
				</div>
				<div class = "footer_mission_statement_panel" style = "">
					<div class = "footer_mission_statement statements" style = "">
						<h2>Our Commitment</h2>
						<h1>Mission Statement</h1>
						<h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.
						</h5>
						<h3><a href="about-us.php">About Us</a></h3>					
					</div>
					<div class = "footer_mission_statement_picture" style = "">
						<img class = "footer_mission_statement_photo" style = "display:none" src="images/background_images/btm3-img1.webp" alt="Colleagues">
					</div>
				</div>

				<div class = "footer_contact_details_panel">
					<div class = "footer_contact_details bulletin">
						<h1 style = "position:relative;top:10%;">Contact Details</h1>
						<h3 style = "position:relative;top:10%;">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							
						</h3>
						<h3  style = "position:relative;top:15%;">805 Pleasant Hill Rd Unit 201</h3>
						<h3  style = "position:relative;top:15%;">Lilburn GA, 30047</h3>
						<h3 style = "position:relative;top:20%;">Phone (818)650-4032</h3>
						<a style = "position:relative;top:20%;" href = "mailto:akofulawgroup@outlook.com" > akofulawgroup@outlook.com</a>
					</div>
					<div id = "google_map" class = "footer_map_panel">
					</div>					
				</div>
								
				<div class = "header bottom_header">
					<div class = "header_core bottom_header_core">
		
						<div class = "menu_bar bottom_menu_bar">
							<?php require "menu.php"; ?>
						</div>

						<div class = "logo_box bottom_logo_box">
							<div class = "logo_circle">
								<img class = "logo_image" src="images/logos/akofulawgroupllc3.jpg" alt="Logo">
							</div>
						</div>						
				
					</div>
		
				</div>				
				
				
			</div>			
		</div>

	</body>
</html>		