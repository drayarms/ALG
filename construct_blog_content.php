<?php
					/*echo "Hello";
					$scan = scandir('blog');
					foreach($scan as $file) {
						if (!is_dir("blog/$file")) {
							echo $file.'\n';
						}
					}	*/	

			
	function get_blog_directories(&$blog_folder_array){
		$blog_folderpath = "blog/";
		//Check if path is a legit directory
		if (is_dir($blog_folderpath)){
			//Dive into directory
			$files = opendir($blog_folderpath);{//Open blog directory and read contents
				//Ensure directory opens 
				if($files){								
					//Dive into each subfolders
					//$num_sub_folders = 0;
					while (($blog_subfolder = readdir($files)) !== FALSE){
						//Check for filename errors
						if($blog_subfolder != '.' && $blog_subfolder != '..'){
							//$num_sub_folders += 1;
							/*echo "SUBFOLDER--" .$blog_subfolder . "<br>
							"."Files in ".$blog_subfolder."--<br>";*/
							$dirpath = "blog/". $blog_subfolder."/";
							array_push($blog_folder_array, $dirpath);
							//Dive into subfolder
						}
					}
								
				}
			}
		}

	}
	
	$blog_folder_array = array();
	get_blog_directories($blog_folder_array);

	//Print subfolders and their files
	//for($i = 0; $i < count($blog_folder_array); $i++){
		//echo "Folder ".$blog_folder_array[$i]."<br>";
	//}	
	$num_blogs = count($blog_folder_array);
	$num_blogs_per_page = 4;
	$num_pages = ceil($num_blogs/$num_blogs_per_page);
	$page_num = $_GET['page'];
	//$page_num = page_num % $num_pages;//Wrap around to prevent user from entering faulty page number
	$num_page_mark_slots = 3;
	
	
	echo "<div id = 'blog_squares'>";
	if($num_blogs < 1){
		echo "<div id = 'no_blogs'>Stay tuned. We will be posting content on our blog shortly.</div>";
		echo "<div class = 'dotted_line'></div>";
	}else{
		for($i = 0; $i < $num_blogs_per_page; $i++){
			$current_blog_index = $num_blogs_per_page*($page_num - 1) + $i;
			if($current_blog_index < $num_blogs){//Don't want to overcount
				//echo $current_blog_index;
				$blog_position = "left_blog";
				if($current_blog_index % 2 == 1){
					$blog_position = "right_blog";
				}
				//echo $blog_position;
				$article_file = $blog_folder_array[$current_blog_index]."article.txt";
				$date_file = $blog_folder_array[$current_blog_index]."date.txt";
				$image_file = $blog_folder_array[$current_blog_index]."image.txt";
				$title_file = $blog_folder_array[$current_blog_index]."title.txt";
				
				$article = file_get_contents($article_file, 1, NULL, 0, 200);
				$date = file_get_contents($date_file);
				$image = file_get_contents($image_file);
				$title = file_get_contents($title_file);
				echo 
				"<div class = 'blog_square ".$blog_position."'> 
				
					<div class = 'blog_img_container'> <img class = 'blog_img' src = '".$image."' alt = 'Blog Image' > </div>
					<div class = 'blog_line'></div>
					<a class = 'blog_title' href = 'article.php?path=".$blog_folder_array[$current_blog_index]."'>".$title."</a>
					<div class = 'blog_truncated_txt'>".$article."... </div>
					<a class = 'blog_read_more_link' href = 'article.php?path=".$blog_folder_array[$current_blog_index]."'>Read More</a>
					<div class = 'blog_line'></div>
					<div class = 'blog_date'>".$date."</div>
				
				</div>";
			}	
		}
	}
	echo "</div>";


	if($num_pages > 1){
		
		//Page slots
		echo "
		<div class = 'pagination_tab'>
			<div class = 'pagination_previous pagination_direction'><span>Prev</span></div>
			<div class = 'pagination_slots'>";		
		
		$page_num_in_first_slot = (ceil($page_num/$num_page_mark_slots)*($num_page_mark_slots))-($num_page_mark_slots - 1);
		//echo "first slot ".$page_num_in_first_slot;
		$num_unfilled_slots = 0;
		if(($page_num_in_first_slot + ($num_page_mark_slots - 1)) > $num_pages){
			$num_unfilled_slots = ($num_page_mark_slots - 1) - ($num_pages - $page_num_in_first_slot);
		}
		//echo "unfilled".$num_unfilled_slots;
		
		for($i = 1; $i <= $num_pages; $i++){
			$slot_class = "'pagination_slot";
			
			if($i == $page_num){
				$slot_class = $slot_class." highlighted_slot";
			}else{
				$slot_class = $slot_class." unhighlighted_slot";
			}
			
			
			//if($i == $page_num){
				//$page_num_in_first_slot = (ceil($i/$num_page_mark_slots)*($num_page_mark_slots))-($num_page_mark_slots - 1);
				//echo $page_num_in_first_slot;
			//}
			if(($i >= $page_num_in_first_slot)&&($i <= $page_num_in_first_slot+($num_page_mark_slots - 1))){
				$slot_class = $slot_class." unhidden_page'";
			}else{
				//If there aren't enough pages to fill all slots, show pages prior to first slot page
				//if($i == $num_pages){//Last page
				
				if($num_unfilled_slots > 0){
					//echo "1st slot - unfilled ".($page_num_in_first_slot - $num_unfilled_slots)." i ".$i;
					if($i < ($page_num_in_first_slot - $num_unfilled_slots)){
						$slot_class = $slot_class." hidden_page'";
					}else{
						$slot_class = $slot_class." unhidden_page'";
					}
				}else{
					$slot_class = $slot_class." hidden_page'";
				}
			}
			//}
			
			
			echo "<a href = 'blog.php?page=".$i."' class = ".$slot_class.">".$i."</a>";
			
		}		
		//if($num_pages <= $num_page_mark_slots){

		//}else{//More pages than page mark slots
			
		//}
		
		echo "
			</div>
			<div class = 'pagination_next pagination_direction'><span>Next</span></div>
		</div>";
	
		echo"
			<span id = 'num_pages' class = 'invis'>".$num_pages."</span>
			<span id = 'num_slots' class = 'invis'>".$num_page_mark_slots."</span>
			<span id = 'page_num' class = 'invis'>".$page_num."</span>
		";		
		
	}
		
	
				
?>