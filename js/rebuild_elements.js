//function rebuild_elements(old_window_width, window_width){
function rebuild_elements(){	
	//console.log("rebuilding elements")
	//console.log("header w: "+header_width);
	if(prev_window_width > window_width){
		//console.log("window shrinking");
		//console.log("old window width "+old_window_width+ "window width "+window_width)
		//Header width should be maintained and not shrink with page
		//$(".header").css("width", header_fixed_width + "px");
		//$(".header").css("margin-left", (1.01*(window_width-header_fixed_width)/2)+"px");
	
	}else if(prev_window_width < window_width){
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
	/*specialties_panel
	specialty_box
	content*/
	//window_width = window_width;/*Set before rebuild_elements is called in both init and window resize*/
	if(is_mobile()){
		resize_level = 4;
	}else{
		if(window_width < resize_threshold1){
			if(window_width < resize_threshold2){
				if(window_width < resize_threshold3){
					resize_level = 4;
					//console.log("min window");
					//Min window
					//rebuild_header(4, window_width);
					//rebuild_content_homepage(4, window_width);
					//rebuild_footer(4, window_width);	
				
					$(".social_media_panel").removeClass("left_social_media_panel");
					$(".social_media_panel").addClass("bottom_social_media_panel");
				}else{
					//intermediate window B
					//console.log("intermediate window B");
					resize_level = 3;
					//rebuild_header(3, window_width);
					//rebuild_content_homepage(3, window_width);
					//rebuild_footer(3, window_width);
					$(".social_media_panel").removeClass("left_social_media_panel");
					$(".social_media_panel").addClass("bottom_social_media_panel");				
				}
			
			
			}else{
				resize_level = 2;
				//console.log("intermediate window A");
				//Intermediate window A
				//header_width = window_width;
				//header_inner_width = header_width;				
				//rebuild_header(2, window_width);	
				//rebuild_content_homepage(2, window_width);
				//rebuild_footer(2, window_width);
				$(".social_media_panel").removeClass("bottom_social_media_panel");
				$(".social_media_panel").addClass("left_social_media_panel");			
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
			resize_level = 1;		
//$("#header").css("min-height", "0px");
//$("#content").css("height", "560px");
//$("#footer").css("height", "340px");
	
			//Reassemble everything
			//page_size = "expanded";
			//console.log("max window");
			//rebuild_header(1, window_width);
			//rebuild_content_homepage(1, window_width);
			//rebuild_footer(1, window_width);
			$(".social_media_panel").removeClass("bottom_social_media_panel");
			$(".social_media_panel").addClass("left_social_media_panel");		
		
		}
	}
	
	//if(is_mobile()){
		//alert("mobile")
	//}else{
		//alert("desktop")
	//}
	//console.log("resize level "+resize_level)
	//$(".top_menu_bar").hide();//Prevents the unrpocessed menu bar from flickering b4 page fully loads
	//console.log("1current session scroll top: "+window.sessionStorage.scrollTop);
	//alert("1current session scroll top: "+window.sessionStorage.scrollTop);	
	//rebuild();



	if(document.readyState === 'ready' || document.readyState === 'complete'){
		//console.log("ready 1");	
		rebuild();
	}else{
		document.onreadystatechange = function (){
			if(document.readyState == 'complete'){
				//console.log("ready 2");	
				rebuild();
			}
		}
	}





}


function make_elements_invisible(){
	$(".header").css("visibility", "hidden");
	$(".content").css("visibility", "hidden");
	$(".footer").css("visibility", "hidden");

	$(".statements").css("visibility", "hidden");
	$(".specialties_statements").css("visibility", "hidden");
	$(".top_menu_bar").css("visibility", "hidden");
	$(".menu_icon").css("visibility", "hidden");	
}

function make_elements_visible(){
	$(".header").css("visibility", "visible");
	$(".content").css("visibility", "visible");
	$(".footer").css("visibility", "visible");

	$(".statements").css("visibility", "visible");
	$(".specialties_statements").css("visibility", "visible");
	$(".top_menu_bar").css("visibility", "visible");
	$(".menu_icon").css("visibility", "visible");	
}


function rebuild(){

	rebuild_header();
	$(".top_menu_bar").css("visibility", "visible");
	$(".menu_icon").css("visibility", "visible");
	//console.log("bout to rebuild content")
	rebuild_content();
	$(".content_banner").css("visibility", "visible");
	$(".content_inner").css("visibility", "visible");
	//console.log("url '"+window.location.href+"'")
	/*if (window.location.pathname == "/"){
		console.log("root url")
	}else{
		console.log("NOT root")
	}*/
	if((window.location.href.indexOf("index") > -1) || (window.location.pathname == "/")) {
		//console.log("bout to rebuild bg dimensions")
		rebuild_bg_img_dimensions();
	}	
	if((window.location.href.indexOf("index") > -1) || (window.location.pathname == "/")) {
		rebuild_bg_img_position();
		//console.log("2current session scroll top: "+window.sessionStorage.scrollTop);
		$(".specialties_panel").css("visibility", "visible");
	}	
	$(".statements").css("visibility", "visible");
	
	
	rebuild_footer();	
	$(".specialties_statements").css("visibility", "visible");
	$(".marketing_panel").css("visibility", "visible");
	$(".header_banner_right_box").css("visibility", "visible");
	//alert("1current session scroll top: "+window.sessionStorage.scrollTop);


	
	//Maintain scroll position
	//if (window.sessionStorage.scrollTop != "undefined") {//Forcibly maintains scrool position across sessions
		//$(window).scrollTop(window.sessionStorage.scrollTop);//Set scroll top to saved session scroll top value
	//}
	//console.log("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());
	//alert("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());
	
}



$(window).scroll(function(){
	if((window.location.href.indexOf("index") > -1) || (window.location.pathname == "/")) {
		//console.log("2current session scroll top: "+window.sessionStorage.scrollTop);
		rebuild_bg_img_position();
	}
	//alert("from scorll current session scroll top: "+window.sessionStorage.scrollTop);
});