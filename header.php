<!DOCTYPE html>
<html>
	<head>

		<title><?php echo $page_title ?></title>
		
		<script type="text/javascript" src="js/my_map.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA8PP7W4r2j45ibkjjRSBtDimNkRHHnQU&callback=my_map" async></script>	

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

		<link type="text/css" rel="stylesheet" href="css/general-styles.css"/>
		<link type="text/css" rel="stylesheet" href="css/submit-screen-styles.css"/>
		<?php
			if($page_index == 0){
				echo '<link type="text/css" rel="stylesheet" href="css/homepage-styles.css"/>';
			}		
			if($page_index == 1){
				echo '<link type="text/css" rel="stylesheet" href="css/about-us-styles.css"/>';
			}		
			if($page_index == 2){
				echo '<link type="text/css" rel="stylesheet" href="css/attorney-profiles-styles.css"/>';
			}			
			if($page_index == 3){
				echo '<link type="text/css" rel="stylesheet" href="css/practice-areas-styles.css"/>';
			}		
			if($page_index == 4){
				echo '<link type="text/css" rel="stylesheet" href="css/blog-styles.css"/>';
			}
			if($page_index == 5){
				echo '<link type="text/css" rel="stylesheet" href="css/faqs-styles.css"/>';
			}	
			if($page_index == 6){
				echo '<link type="text/css" rel="stylesheet" href="css/testimonials-styles.css"/>';
			}			
			if($page_index == 7){
				echo '<link type="text/css" rel="stylesheet" href="css/contact-us-styles.css"/>';
			}
			if($page_index == 8){
				echo '<link type="text/css" rel="stylesheet" href="css/article-styles.css"/>
					<link type="text/css" rel="stylesheet" href="css/comments-styles.css"/>
				';
			}
			if($page_index == 9){
				echo '<link type="text/css" rel="stylesheet" href="css/referrals-styles.css"/>
				';
			}	
			if($page_index == 10){
				echo '<link type="text/css" rel="stylesheet" href="css/maintenance-styles.css"/>
				';
			}			
		?>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="shortcut icon" type="image/jpg" href="images/logos/akofulawgroupllc3.jpg"/>

		<script type="text/javascript" src="js/init.js"></script>
		<script type="text/javascript" src="js/screen.js"></script>
		<script type="text/javascript" src="js/centralize_element.js"></script>
		<script type="text/javascript" src="js/scale_and_position_image.js"></script>
		<script type="text/javascript" src="js/rebuild_header.js"></script>
		<script type="text/javascript" src="js/rebuild_content.js"></script>
		<script type="text/javascript" src="js/rebuild_footer.js"></script>		
		<script type="text/javascript" src="js/rebuild_elements.js"></script>
		<script type="text/javascript" src="js/window_resize.js"></script>
		<script type="text/javascript" src="js/process_forms.js"></script>

	</head>
	
	
	<body class = "body">

		<div id = "submit_screen">
			<div id = "submit_div">
				<div class = "close_block">
					<div class = "close">
						<i class="material-icons">&#xe14c;</i>
						<div class = "close_label">Close</div>
					</div>
				</div>
				<div class = "animation_bubbles"></div>
				<div class = "submit_feedback"></div>
			</div>
		</div>
		
		<div class = "social_media_panel left_social_media_panel">
			<a href="http://facebook.com/karol.akofu" target="_blank" class="fa fa-facebook"></a>
			<a href="http://twitter.com/akofu_ifang" target="_blank" class="fa fa-twitter"></a>
			<!--<a href="http://google.com" target="_blank" class="fa fa-google"></a>-->
			<a href="http://instagram.com/ndurut" target="_blank" class="fa fa-instagram"></a>
			<a href="https://www.linkedin.com/company/akofu-law-group-llc" target="_blank" class="fa fa-linkedin"></a>		
		</div>
		
		<div class = "screen"></div>
		
		<div class = "flap_header_parent"> 
		
			<div class = "flap_header_transparent_sibling"></div>
		
			<div class = "header flap_header" style = "">
				<div class = "flap_header_logo_box_parent" style = "">
					<div class = "logo_box flap_header_logo_box" style = "">
						<div class = "logo_circle"  style = "">
							<img class = "logo_image" src="images/logos/akofulawgroupllc3.jpg" alt="Logo">
						</div>
					</div>		
		
					<div class = "close_icon">
						<i class="material-icons">&#xe14c;</i>
						<div class = "close_label">Close</div>
					</div>	
				</div>
		
				<div class = "menu_bar flap_menu_bar" style = "">
					<?php if($page_index != 10){require "menu.php";} ?>
				</div>
								
			</div>
		
		</div>

		<div class = "header top_header <?php if($page_index == 0){echo 'homepage_top_header';} ?>" id = ""  style = "">
			<div class = "header_core top_header_core">

				<div class = "logo_box top_logo_box">
					<div class = "logo_circle">
						<img class = "logo_image" src="images/logos/akofulawgroupllc3.jpg" alt="Logo">
					</div>
				</div>
				<div class = "menu_icon">
					<i class="fa fa-bars"></i>
					<div class = "menu_label">Menu</div>
				</div>
	
				<div class = "header_banner" style = "">
					<div class = "header_banner_right_box">
						<div class = "header_banner_text">Call us now for a free strategic session:</div>
						<div class = "header_banner_text phone_num">(470)430-8035</div>
						<div class = "header_banner_text phone_num">(641)980-5076</div>
					</div>
				</div>
				<div class = "menu_bar top_menu_bar" style = "">
					<?php if($page_index != 10){require "menu.php";} ?>
				</div>
			</div>
		
		</div>