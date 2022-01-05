<?php
/*
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
*/
?>






<!--JS dependencies-->
<script type="text/javascript" src="js/comments.js"></script>

<!--Load FB SDK asynchronously-->
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
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
   
   
	if(document.readyState === "ready" || document.readyState === "complete") {
		FB.getLoginStatus(function(response) {//Called after the JS SDK has been initialized.
			statusChangeCallback(response, 'load');//Returns the login status.
			//$(".comments_section").css("visibility", "visible");
		});	
	}else{
		document.onreadystatechange = function () {
			if(document.readyState == "complete") {
				FB.getLoginStatus(function(response) {//Called after the JS SDK has been initialized.
					statusChangeCallback(response, 'load');//Returns the login status.
					//$(".comments_section").css("visibility", "visible");
				});	
			}
		}
	}   	
</script>

	
	
<!--The html-->
<div id = "comments_section">

<div id = "comments_heading">0 Comments</div>
	
<div id = "add_comment_box">
	<div id = "add_comment_pic_box_container">
		<div id = "add_comment_pic_box"> <img id = "add_comment_pic" class = "comment_pic" src = "images/icons/profil-pic_dummy.png" alt = "pic"> </div>
	</div>	
		
	<div id = "add_comment_form_container">
			
		<div id = "add_comment_line">Add a comment...</div>
			
		<form id = "add_comment_form">
			<input type="text" id="top_level_comment_input" class = "form_input_space form_input input_default" name="top_level_comment" value = "" placeholder = "Tell us what you think" maxlength = 300>
			<input type="button" id = "top_level_comment_submit" class = "form_submit form_submit_ghosted" value="COMMENT">
		</form>
			
	</div>
</div>




<div id = "all_comments">


	<?php
		echo"
		
		<div class = 'level0_comment_box comment_box'>
		
			<div class = 'level0_comment_pic_box_container comment_pic_box_container'>
				<div class = 'level0_comment_pic_box comment_pic_box'> <img class = 'level0_comment_pic comment_pic' src = 'images/icons/profil-pic_dummy.png' alt = 'pic'> </div>
			</div>

			<div class = 'level0_comment_container comment_container'>
				<div class = 'level0_commenter_line commenter_line'>
					<span class = 'level0_commenter commenter'> Toto Glumant </span> <span class = 'level0_comment_date comment_date'>09/12/2021</span> 
				</div>
				
				<div class = 'level0_comment_line comment_line'>
					This is an interesting article ;) If you use as following, your code can be more effective than you wrote. You should add another feature.If you use as following, your code can be more effective than you wrote. You should add another feature.
				</div>
				
				<div class = 'level0_reply_button reply_button'>REPLY</div>
				
				
				<form class = 'level0_comment_form comment_form'>
					<input type='text' class='level0_comment_input form_input_space form_input input_default' name='level0_comment' value = '' placeholder = 'Tell us what you think' maxlength = 300>
					<input type='button' class = 'level0_comment_submit form_submit form_submit_ghosted' value='COMMENT'>
				</form>				
				
				
				<div class = 'level0_view_replies view_replies'> View 3 replies </div>
				<div class = 'level0_view_replies hide_replies' style = 'display:none;'> Hide 3 replies </div>
			
			
			
			
			
			
			
			
				<div class = 'level1_comment_pic_box_container comment_pic_box_container'>
					<div class = 'level1_comment_pic_box comment_pic_box'> <img class = 'level1_comment_pic comment_pic' src = 'images/icons/profil-pic_dummy.png' alt = 'pic'> </div>
				</div>

				<div class = 'level1_comment_container comment_container'>
					<div class = 'level1_commenter_line commenter_line'>
						<span class = 'level1_commenter commenter'> Alumicator Archie </span> <span class = 'level1_comment_date comment_date'>09/13/2021</span> 
					</div>
				
					<div class = 'level1_comment_line comment_line'>
						This is an interesting comment ;) If you use as following, your code can be more effective than you wrote. You should add another feature.If you use as following, your code can be more effective than you wrote. You should add another feature.
					</div>
				
					<div class = 'level1_view_replies view_replies'> View 3 replies </div>
					<div class = 'level1_view_replies hide_replies' style = 'display:none;'> Hide 3 replies </div>
				</div>			
			
			
			
	
			
			
			
			
			
			
			
			
			</div>
		
		</div>	
		
		";
	?>
	
	
</div>

</div>	
