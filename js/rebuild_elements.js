function rebuild_elements(old_window_width, window_width){
	//console.log("header w: "+header_width);
	if(old_window_width > window_width){
		//console.log("window shrinking");
		//console.log("old window width "+old_window_width+ "window width "+window_width)
		//Header width should be maintained and not shrink with page
		//$(".header").css("width", header_fixed_width + "px");
		//$(".header").css("margin-left", (1.01*(window_width-header_fixed_width)/2)+"px");
	
	}else if(old_window_width < window_width){
		//console.log("window expanding");
		//$(".header").css("margin-left", (1.01*(window_width-header_fixed_width)/2)+"px");
	}
	
	//Header width should be maintained and not shrink with page
	//$(".header").css("width", header_fixed_width + "px");
	//console.log((1.01*(window_width-header_fixed_width)/2));
	//$(".header").css("margin-left", (1.01*(window_width-header_fixed_width)/2)+"px");
	
	//console.log("window w "+window_width+" header_inner fixed w "+header_inner_fixed_width);
	//If current window width < width of header, break up header else do above
	//console.log("fixed "+inner_header_fixed_width+" curr"+inner_header_width)
	//console.log("window w "+window_width+" inner header fixed w "+inner_header_fixed_width);
	
	
	if(window_width < resize_threshold1){
		if(window_width < resize_threshold2){
			if(window_width < resize_threshold3){
				//console.log("min window");
				//Min window
				rebuild_header(4, window_width);
				rebuild_content(4, window_width);				
			}else{
				//intermediate window B
				//console.log("intermediate window B");
				rebuild_header(3, window_width);
				rebuild_content(3, window_width);
			}
			
			
		}else{
			//console.log("intermediate window A");
			//Intermediate window A
			//header_width = window_width;
			//header_inner_width = header_width;				
			rebuild_header(2, window_width);
			//set_resized_header_properties(window_width, header_width, header_inner_width);
			//set_resized_content_properties();		
			rebuild_content(2, window_width);
			/*if(old_window_width > window_width){
				//console.log("window shrinking");
				//header_inner_width = header_width*header_width_to_header_inner_width_ratio;//Let it shrink,instead of fixed
				header_width = window_width;
				header_inner_width = header_width;
				set_resized_header_properties(window_width, header_width, header_inner_width);
				set_resized_content_properties();
			}else if(old_window_width < window_width){
				//console.log("window expanding");
				//Maximum header width(match window width)
				header_width = window_width;
				header_inner_width = header_width;		
				set_header_properties(window_width, header_width, header_inner_width);
				set_resized_content_properties();
			}else{//Refresh page
				header_width = window_width;
				header_inner_width = header_width;				
				set_resized_header_properties(window_width, header_width, header_inner_width);
				set_resized_content_properties();
			}*/			
		}
		

		
	}else{//Max window
		//Reassemble everything
		//page_size = "expanded";
		//console.log("max window");
		rebuild_header(1, window_width);
		//$(window).scrollTop(window.sessionStorage.scrollTop);
		rebuild_content(1, window_width);
		
	}

}