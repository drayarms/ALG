
$(document).ready(function(){
	//alert("window width "+$(window).width()+" document width "+$(document).width()+" screen width "+window.screen.width)
	//var div_top = $(".header").offset().top;
	var original_window_top = $(window).scrollTop();
	//var delta_window_top = 0;
	var background_scroll_factor = 0.39;	
	
	///console.log("scroll top "+original_window_top)
	
	$("#homepage_background_container").css({
		position: "absolute",
		top: (original_window_top*background_scroll_factor) + "px"//Move image by a fraction of page move in opposite direction
	});	


	//var original_homepage_background_container_offset = $("#homepage_background_container").offset().top;
	//var new_homepage_background_container_offset = original_homepage_background_container_offset;


	//alert(original_window_top)
	//console.log(div_top)
	$(window).scroll(function() {
		var window_top = $(window).scrollTop();
		//delta_window_top = window_top - original_window_top;
		//original_window_top = window_top;
		
		//new_homepage_background_container_offset += delta_window_top;
		
		//console.log("scroll top "+window_top)
		//console.log("delta window top "+delta_window_top);
		//console.log("div top "+div_top+" window top "+window_top);
		//console.log("homepage background container top "+new_homepage_background_container_offset);
		$("#homepage_background_container").css({
			position: "absolute",
			top: (window_top*background_scroll_factor) + "px"//Move image by a fraction of page move in opposite direction
			//top: (new_homepage_background_container_offset*background_scroll_factor) + "px"//Move image by a fraction of page move in opposite direction
		});
	
    });



	//$("#bar1").css("width", screen_width*0.5 + "px");
	//$("#bar2").css("width", window_width +"px");






	//Header dimensions
	//Header dimensions
	header_max_width = screen_width*window_to_header_width_ratio;//Width of maximized header
	header_width = window_width_original*window_to_header_width_ratio;//Width of resized header
	header_inner_width = header_max_width*header_width_to_header_inner_width_ratio;//Should remain constant as long as page isn't shrunken enough
	//header_inner_fixed_width = header_inner_width;
	resize_threshold1 = header_inner_width;
	resize_threshold2 = header_max_width*0.45;
	resize_threshold3 = header_max_width*0.38;
	//console.log("from dimensions header inner fixed width "+header_inner_fixed_width);
	header_fixed_height = screen_width*0.104;//0.13;
	header_inner_fixed_height = header_fixed_height;//header_fixed_height*0.8;	
	
	logo_box_fixed_width = resize_threshold1*0.15;
	logo_box_fixed_height = header_inner_fixed_height*0.75;
	//alert(inner_header_fixed_width);
	
	//specialties_panel_max_width = ;
	//attorney_panel_combined_children_max_width = ;

	
	//Set top position for homepage background container
	//$("#homepage_background_container").css({
        //position: "absolute",
        //top: (header_height*-1) + "px",
        //left: (pos.left + width) + "px"
    //});
	//Sister elements should also be moved by same dimension
	/*$(".content_proper").css({
        position: "relative",
        top: (header_height*-1) + "px"
    });
	$("#homepage_foreground").css({
        position: "relative",
        top: (header_height*-3) + "px"
    });	*/
	
	//Set min height for class content	
	//document_height = $(document).height();
	//header_height = $(".header").height();
	//alert(header_height);
	//content_min_height = document_height - header_height;
	//$(".content").css("min-height", content_min_height + "px");	

	
	//Set homepage foreground width
	//$("#homepage_foreground").css("width", (window_width*0.7) + "px");
	
	//Set homepage background image width and other properties
	//set_header_properties();//See restructure header func
	set_homepage_background_image_dimensions(window_width_original);
	rebuild_elements(prev_window_width, window_width_original, header_width);//Initially build header
	set_logo_image();

//$(".header").css("width", old_header_width0 + "px");
//$(".header").css("margin-left", (1.01*(window_width-old_header_width0)/2)+"px");

//old_header_width0 = $(".header").width();//Will be new header width instead of letting css determine	
	
	//rebuild_elements(window_width, $(".header").width());
	
	

	
	
	
	
	
});


