		<div class = "content content_contact_us"> 
		
			<div class = "content_banner">
				<div class = "top_heading"><span>TESTIMONIALS</span></div>
				<div class = "bottom_heading"><span>Some Eye Catching Title Inserted Here</span></div>
			</div>
			
			<div id = "testimonials_bulletin">	
			
				See what satisfied clients have been saying about the quality of our services at
				<span class = "firm_title">Akofu Law Group</span>.
				<p>Your email address will not be published</p>
				

				
				
				<form id = "testimonials_page_form" class = "page_form"> <!--autocomplete="off">-->
					<p id = "required_info">*Required Information</p>
					<fieldset class = "">
						<legend>Name<span class = "ast">*</span></legend>
						<input type="text" id="testimonials_name" class = "form_input_space form_input input_default" name="name" value = "" placeholder = "Enter Full Name" maxlength = 20>
					</fieldset>


					<fieldset class = "">
						<legend>Email<span class = "ast">*</span></legend>
						<input type="text" id="testimonials_email" class = "form_input_space form_input input_default" name="email" value = "" placeholder = "Enter Email" maxlength = 50>
					</fieldset>		
					
					<fieldset class = "">
						<legend>Website</legend>
						<input type="text" id="testimonials_website" class = "form_input_space form_input input_default" name="website" value = "" placeholder = "Enter Website(Optional)" maxlength = 100>
		
					</fieldset>					
							
					
					<fieldset class = "textarea_fieldset">
						<legend>Comment<span class = "ast">*</span></legend>
						<textarea id="testimonials_msg" class = "form_input_space input_default"  name="message" value = "" placeholder = "Enter your comment." maxlength = 1000></textarea>
					</fieldset>	
					
					<fieldset class = "submit_fieldset">
						<input type="button" id = "testimonials_submit" class = "form_submit form_submit_ghosted" value="SUBMIT">
					</fieldset>										
				</form>				
				

			</div>
			
			
			<div class = "disclaimer">
				<div class = "disclaimer_heading">Disclaimer</div>
				<div class = "disclaimer_text">
					<?php
						require "disclaimer.php";
					?>						
				</div>
			</div>			
		
		
		</div>