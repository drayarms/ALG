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
	
	
	global_window_width = window_width;
	if(window_width < resize_threshold1){
		if(window_width < resize_threshold2){
			if(window_width < resize_threshold3){
				global_resize_level = 4;
				//console.log("min window");
				//Min window
				rebuild_header(4, window_width);
				rebuild_content(4, window_width);
				rebuild_footer(4, window_width);				
			}else{
				//intermediate window B
				//console.log("intermediate window B");
				global_resize_level = 3;
				rebuild_header(3, window_width);
				rebuild_content(3, window_width);
				rebuild_footer(3, window_width);
			}
			
			
		}else{
			global_resize_level = 2;
			//console.log("intermediate window A");
			//Intermediate window A
			//header_width = window_width;
			//header_inner_width = header_width;				
			rebuild_header(2, window_width);
			//set_resized_header_properties(window_width, header_width, header_inner_width);
			//set_resized_content_properties();		
			rebuild_content(2, window_width);
			rebuild_footer(2, window_width);
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
		global_resize_level = 1;
//$("#header").css("min-height", "0px");
//$("#content").css("height", "560px");
//$("#footer").css("height", "340px");
	
		//Reassemble everything
		//page_size = "expanded";
		//console.log("max window");
		rebuild_header(1, window_width);
		//$(window).scrollTop(window.sessionStorage.scrollTop);
		rebuild_content(1, window_width);
		rebuild_footer(1, window_width);
		
	}
	



	
	//Maintain scroll position
	//if (window.sessionStorage.scrollTop != "undefined") {//Forcibly maintains scrool position across sessions
		//$(window).scrollTop(window.sessionStorage.scrollTop);//Set scroll top to saved session scroll top value
	//}
	//console.log("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());
	//alert("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());

}