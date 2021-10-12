<?php

	//JS dependencies
	echo"
	<script type='text/javascript' src='js/comments.js'></script>
	";
	
	
	//Load FB SDK asynchronously
	echo"
	<script>
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '3067980443418570',
				cookie     : true,                     // Enable cookies to allow the server to access the session.
				xfbml      : true,                     // Parse social plugins on this webpage.
				version    : 'v3.1'//'v12.0'           // Use this Graph API version for this call.
			});
			
			FB.AppEvents.logPageView(); 
		};		

		(function(d, s, id){//Load SDK
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
   
   
		if(document.readyState === 'ready' || document.readyState === 'complete') {
			FB.getLoginStatus(function(response) {//Called after the JS SDK has been initialized.
				statusChangeCallback(response, 'load');//Returns the login status.
			});	
		}else{
			document.onreadystatechange = function () {
				if(document.readyState == 'complete') {
					FB.getLoginStatus(function(response) {//Called after the JS SDK has been initialized.
						statusChangeCallback(response, 'load');//Returns the login status.
					});	
				}
			}
		}   	
	</script>
	";
	
	
	//The html
	echo"
	<div id = 'comments_heading'>0 Comments</div>
	
	<div id = 'add_comment_box'>
		<div id = 'add_comment_pic_box_container'>
			<div id = 'add_comment_pic_box'> <img id = 'add_comment_pic' src = 'images/icons/profil-pic_dummy.png' alt = 'pic'> </div>
		</div>	
		
		<div id = 'add_comment_form_container'>
			
			<div id = 'add_comment_line'>Add a comment...</div>
			
			<form id = 'add_comment_form'>
				<input type='text' id='top_level_comment_input' class = 'form_input_space form_input input_default' name='top_level_comment' value = '' placeholder = 'Tell us what you think' maxlength = 300>
				<input type='button' id = 'top_level_comment_submit' class = 'form_submit form_submit_ghosted' value='COMMENT'>
			</form>
			
		</div>
	</div>
	
	";

?>