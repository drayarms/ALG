<?php

	$path = $_GET['path'];
	$article_file = $path."article.txt";
	$date_file = $path."date.txt";
	$image_file = $path."image.txt";
	$title_file = $path."title.txt";
				
	$article = file_get_contents($article_file);
	$date = file_get_contents($date_file);
	$image = file_get_contents($image_file);
	$title = file_get_contents($title_file);

	$page_index = 8;
	$page_title = $title;
	

	require "header.php";
	
	
	echo"
		<div class = 'content content_article'> 
		
			<div class = 'content_banner'>
				<div class = 'top_heading'><span>Blog Article</span></div>
				<div class = 'bottom_heading'><span>".$title."</span></div>
			</div>
						
			
			<div id = 'article_inner'>	
		
				<div id = 'article_title'>".$title."</div>

				<div id = 'article_image_container'>
					<img id = 'article_image' src=".$image." alt='Image'>
				</div>			
			
				<div id = 'article_text'>
		
					".$article."
				
				</div>

			</div>
			
			
			<div class = 'disclaimer'>
				<div class = 'disclaimer_heading'>Disclaimer</div>
				<div class = 'disclaimer_text'>				
			
	";

					require "disclaimer.php";
	echo"		
				</div>
			</div>				
			
		</div>
		
	";	

	
	require "footer.php";
	
?>