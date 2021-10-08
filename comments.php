<?php

	echo"
	<script type='text/javascript' src='js/comments.js'></script>
	
	<div id = 'comments_heading'>0 Comments</div>
	
	<div id = 'add_comment_box'>
		<div id = 'add_comment_pic_box_container'>
			<div id = 'add_comment_pic_box'> <img src = '' alt = 'pic'> </div>
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