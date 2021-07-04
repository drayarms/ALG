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
				
				echo 
				"<div class = 'blog_square ".$blog_position."'> 
				
					<div class = 'blog_img_container'> <img class = 'blog_img' src = '' alt = 'Blog Image' > </div>
					<div class = 'blog_title'> </div>
					<div class = 'blog_truncated_txt'> </div>
					<div class = 'blog_read_more_link'> </div>
				
				</div>";
			}	
		}
	}
				
?>