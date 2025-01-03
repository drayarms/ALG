		<div class = "content content_contact_us"> 
		
			<div class = "content_banner">
				<div class = "top_heading"><span>CONTACT US</span></div>
				<div class = "bottom_heading"><span>Contact Akofu Law Group</span></div>
			</div>
			
			<div id = "contact_bulletin" class = "content_inner">	
			
				<div id = "firm_title">Akofu Law Group</br></div>
				
				<p>
				2070 Sugarloaf Parkway Suite 700</br>
				Lawrenceville GA, 30045</br>
				Phone:<span class = "highlighted">(470)430-8035</span></br>
				Email:<a class = "highlighted" href = "mailto:akofulawgroup@outlook.com">akofulawgroup@outlook.com</a></br>
				</p>
				
				<p>
				For a quick consultation, please fill out the form below.
				</p>
				
				
				<form id = "contact_us_page_form" class = "page_form"> <!--autocomplete="off">-->
					<p id = "required_info">*Required Information</p>
					<fieldset class = "">
						<legend>Full Name<span class = "ast">*</span></legend>
						<input type="text" id="contact_us_fname" class = "form_input_space form_input left_input input_default" name="name1" value = "" placeholder = "First Name" maxlength = 20>
						<input type="text" id="contact_us_lname" class = "form_input_space form_input right_input input_default" name="name2" value = "" placeholder = "Last Name" maxlength = 20>
					</fieldset>

					<fieldset class = "">
						<legend>Address<span class = "ast">*</span></legend>
						<input type="text" id="contact_us_addy1" class = "form_input_space form_input left_input input_default" name="address" value = "" placeholder = "Address Line 1" maxlength = 100>
						<input type="text" id="contact_us_addy2" class = "form_input_space form_input right_input input_default" name="address2" value = "" placeholder = "Address Line 2 (Optional)" maxlength = 20>
					</fieldset>

					<fieldset class = "">
						<legend>Contact<span class = "ast">*</span></legend>
						<input type="text" id="contact_us_email" class = "form_input_space form_input left_input input_default" name="email" value = "" placeholder = "Enter Email" maxlength = 50>
						<input type="text" id="contact_us_phone" class = "form_input_space form_input right_input input_default" name="phone" value = "" placeholder = "Enter Phone Number" maxlength = 20>
					</fieldset>		
					
					<!--<fieldset class = "fieldset3 left_fieldset">
						<legend>Email<span class = "ast">*</span></legend>
						<input type="text" id="" class = "form_input" name="email" value = "Enter Email">
					</fieldset>		

					<fieldset class = "fieldset4 right_fieldset">
						<legend>Phone<span class = "ast">*</span></legend>
						<input type="text" id="" class = "form_input" name="phone" value = "Enter Phone Number">
					</fieldset>	-->	<!--rows = "8" cols = "60"-->			
					
					<fieldset class = "textarea_fieldset">
						<legend>Question/Comment<span class = "ast">*</span></legend>
						<textarea id="contact_us_msg" class = "form_input_space input_default"  name="message" value = "" placeholder = "Enter your question/comment(limit 500 characters)." maxlength = 500></textarea>
					</fieldset>	
					
					<fieldset class = "submit_fieldset">
						<input type="button" id = "contact_us_submit" class = "form_submit form_submit_ghosted" value="SUBMIT">
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