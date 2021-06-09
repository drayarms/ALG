
function rebuild_mission_statement_box(resize_level, window_width){
	footer_mission_statement_panel_width_to_window_width_ratio = footer_mission_statement_panel_fixed_width/resize_threshold1;
	var footer_mission_statement_panel_width;
	//var footer_mission_statement_panel_height = screen_width*0.25;
	var footer_mission_statement_panel_height;
	var footer_mission_statement_width;
	var footer_mission_statement_picture_width;
	//var footer_mission_statement_height = footer_mission_statement_panel_height;	
	var footer_mission_statement_height = screen_width*0.25;	
	var footer_mission_statement_picture_height;
	

	if(resize_level == 1){
		footer_mission_statement_panel_width = footer_mission_statement_panel_fixed_width;

	}
	
	if(resize_level == 2){
		footer_mission_statement_panel_width = window_width*footer_mission_statement_panel_width_to_window_width_ratio;
	}
	
	if(resize_level > 2){//Disappear picture and make statement 100% of container
		footer_mission_statement_panel_width = window_width*window_to_header_width_ratio;
		//footer_mission_statement_width = footer_mission_statement_panel_width;
		centralize_element_horizontally($(".footer_mission_statement"));
	}else{
		//Uncentralize
		$(".footer_mission_statement").css({
			position: "relative",
			left: "0px"
		});			
	}
	
	if(resize_level > 2){
		footer_mission_statement_width = footer_mission_statement_panel_width;
	}else{
		footer_mission_statement_width = footer_mission_statement_panel_width*0.48;
		footer_mission_statement_picture_width = footer_mission_statement_panel_width*0.48;
		footer_mission_statement_picture_height = footer_mission_statement_picture_width*0.95;
	}
	//console.log("pic w "+footer_mission_statement_picture_width+" pic h "+footer_mission_statement_picture_height);
	
	
	footer_mission_statement_panel_height = footer_mission_statement_picture_height;
	if(footer_mission_statement_height > footer_mission_statement_picture_height){
		footer_mission_statement_panel_height = footer_mission_statement_height;
	}
	
	$(".footer_mission_statement_panel").css("width", footer_mission_statement_panel_width +"px");
	$(".footer_mission_statement_panel").css("height", footer_mission_statement_panel_height +"px");
	$(".footer_mission_statement").css("width", footer_mission_statement_width +"px");
	$(".footer_mission_statement").css("height", footer_mission_statement_height +"px");
	$(".footer_mission_statement_picture").css("width", footer_mission_statement_picture_width +"px");
	$(".footer_mission_statement_picture").css("height", footer_mission_statement_picture_height +"px");

	centralize_element_horizontally($(".footer_mission_statement_panel"));
	
	if(resize_level <= 2){
		$(".footer_mission_statement").css("float", "left");
		$(".footer_mission_statement_picture").css("float", "right");
	}else{
		$(".footer_mission_statement").css("float", "none");
		$(".footer_mission_statement_picture").css("float", "none");
	}
	
	//Adjust picture to match bottom of container regardless of what its height is
	var footer_mission_statement_picture_y_disp = $(".footer_mission_statement_panel").height() - $(".footer_mission_statement_picture").height(); 
	$(".footer_mission_statement_picture").css({
		position: "relative",
		top: footer_mission_statement_picture_y_disp + "px"
	});	
	
	if(resize_level > 2){//Disappear picture and make statement 100% of container
		$(".footer_mission_statement_picture").hide();
		$(".footer_mission_statement_photo").hide();
	}else{
		//Scale and place picture
		$(".footer_mission_statement_picture").show();
		scale_and_position_image($("#attorney_photo"), $("#attorney_photo_container"), 1);
		scale_and_position_image($(".footer_mission_statement_photo"), $(".footer_mission_statement_picture"), 1);
		$(".footer_mission_statement_photo").show();
	}	
}



function rebuild_footer_contact_details_panel(resize_level, window_width){
	var footer_contact_details_panel_width;
	var footer_contact_details_panel_height;
	var footer_contact_details_width;
	var footer_contact_details_height;
	var footer_map_panel_width;
	var footer_map_panel_height;
	footer_map_panel_width_to_window_width_ratio = footer_map_panel_fixed_width/resize_threshold1;
	
	if(resize_level == 1){
		footer_map_panel_width = footer_map_panel_fixed_width;
	}	
	if(resize_level == 2){
		footer_map_panel_width = window_width*footer_map_panel_width_to_window_width_ratio;
	}
	if(resize_level > 2){//min
		footer_map_panel_width = window_width*window_to_header_width_ratio;
	}

	
	if(resize_level <= 2){
		footer_contact_details_width = footer_contact_details_fixed_width;
	}else{//Min
		footer_contact_details_width = window_width*window_to_header_width_ratio;
	}
	
	
	if(resize_level <= 2){
		footer_contact_details_panel_width = footer_contact_details_width + footer_map_panel_width;
	}else{//Min
		footer_contact_details_panel_width = footer_contact_details_width;
	}
	
	footer_contact_details_height = footer_contact_details_fixed_width;
	footer_map_panel_height = footer_contact_details_height;
	footer_contact_details_panel_height = footer_contact_details_height;
	

	
	$(".footer_contact_details").css("width", footer_contact_details_width+"px");
	$(".footer_contact_details").css("height", footer_contact_details_height+"px");
	$(".footer_map_panel").css("width", footer_map_panel_width+"px");
	$(".footer_map_panel").css("height", footer_map_panel_height+"px");	
	
	$(".footer_contact_details_panel").css("width", footer_contact_details_panel_width+"px");
	$(".footer_contact_details_panel").css("height", footer_contact_details_panel_height+"px");	


	//alert($(".footer_contact_details_panel").offset().top)
	//alert($(".footer_contact_details").offset().top)
	//alert($(".footer_map_panel").offset().top)	
	
	if(resize_level <= 2){
		//Float left
		$(".footer_contact_details").css("float", "left");
		$(".footer_map_panel").css("float", "right");
		//Uncentralize
		$(".footer_contact_details").css({
			position: "relative",
			left: "0px"
		});		
		$(".footer_map_panel").css({
			position: "relative",
			left: "0px"
		});		
	}else{//Min
		//Unfloat left
		$(".footer_contact_details").css("float", "none");
		$(".footer_map_panel").css("float", "none");		
		//Centralize
		centralize_element_horizontally($(".footer_contact_details"));	
		centralize_element_horizontally($(".footer_map_panel"));			
	}

	centralize_element_horizontally($(".footer_contact_details_panel"));	
	
	//$(".footer_contact_details").css("background-color", theme_darkblue1);
	
	//alert($(".footer_contact_details_panel").offset().top)
	//alert($(".footer_contact_details").offset().top)
	//alert($(".footer_map_panel").offset().top)
}


function rebuild_footer(resize_level, window_width){

	rebuild_mission_statement_box(resize_level, window_width);
	rebuild_footer_contact_details_panel(resize_level, window_width);
	
}