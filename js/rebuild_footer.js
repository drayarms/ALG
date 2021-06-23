
function rebuild_mission_statement_panel(){
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



function rebuild_footer_contact_details_panel(){
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
	
	footer_contact_details_height = footer_contact_details_fixed_width*0.8;
	footer_map_panel_height = footer_contact_details_height;
	if(resize_level <= 2){
		footer_contact_details_panel_height = footer_contact_details_height;
	}else{
		footer_contact_details_panel_height = footer_contact_details_height + footer_map_panel_height;
	}
	

	
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


function rebuild_marketing_panel(){
	var marketing_panel_width;
	var marketing_panel_height = screen_width*0.15;
	var marketing_panel_box_width;
	var marketing_panel_box_height = marketing_panel_height;
	marketing_panel_width_to_window_width_ratio = marketing_panel_fixed_width/resize_threshold1;
	var num_marketing_panel_boxes = $(".marketing_panel_box").length;
	
	
	if(resize_level == 1){
		marketing_panel_width = marketing_panel_fixed_width;
	}else{
		marketing_panel_width = window_width*marketing_panel_width_to_window_width_ratio;
	}
	
	marketing_panel_box_width = (marketing_panel_width/num_marketing_panel_boxes) - (6*num_marketing_panel_boxes);//Leave some gaps

	
	$(".marketing_panel").css("width", marketing_panel_width + "px");
	$(".marketing_panel").css("height", marketing_panel_height + "px");
	
	$(".marketing_panel_box").css("width", marketing_panel_box_width + "px");
	$(".marketing_panel_box").css("height", marketing_panel_box_height + "px");
	
	$(".marketing_panel_box a div").css("width", marketing_panel_box_width + "px");
	$(".marketing_panel_box a div").css("height", (marketing_panel_box_height/3) + "px");	

	//if(resize_level == 1){
		var marketing_panel_box_right_shift = (marketing_panel_width - (num_marketing_panel_boxes * marketing_panel_box_width * 1.005))/(num_marketing_panel_boxes - 1);
		$(".marketing_panel_box").css("float", "left");
		for(var i = 1; i < num_marketing_panel_boxes; i++){
			($(".marketing_panel_box").eq(i)).css({
				position: "relative",
				left: (i*marketing_panel_box_right_shift) +"px"
			});		
		}
	//}else{
		
	//}
	if(resize_level == 1){
		$(".marketing_panel_box").css({
			position: "relative",
			top: (marketing_panel_box_height*-0.5) +"px"
		});	
	}else{
		$(".marketing_panel_box").css({
			position: "relative",
			top: "0px"
		});			
	}
	
	$(".marketing_panel_box").hover(
	function(){
		$(this).css("background-color", theme_gold2);
	},function() {
		$(this).css("background-color", "#ffffff");
	});	
	
	//Vertically align marketing panel icon to bottom of container
	$(".marketing_panel_icon i").css({
		position: "relative",
		top: ($(".marketing_panel_icon").height() - $(".marketing_panel_icon i").height())+"px"
	});		
	
	//alert($(".marketing_panel_icon i").height());
}


function rebuild_footer(){

	rebuild_mission_statement_panel();
	rebuild_footer_contact_details_panel();
	rebuild_marketing_panel();
	

	//$(".footer_contact_details_panel").css("height", ($(".footer_contact_details").height()+$(".footer_map_panel").height())+"px");
	
	//alert("footer upper half height "+$(".footer_upper_half").height());
	//alert("footer lower half height "+$(".footer_lower_half").height());
	//alert("footer height "+$(".footer").height());
	
}