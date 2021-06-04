function rotate_specialty_statement_text(){
	//console.log(specialty_text_time);
	//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
	var prev_specialty_text_time = specialty_text_time - 1;
	if (prev_specialty_text_time == -1){
		prev_specialty_text_time = specialty_statement_count - 1;
	}
	//console.log("now "+specialty_text_time+" prev "+prev_specialty_text_time);
	$(".specialty_statement").eq(specialty_text_time).fadeOut(400);
	$(".specialty_statement").eq(specialty_text_time).fadeIn(400);
	specialty_text_time++;
	if(specialty_text_time%specialty_statement_count == 0){
		specialty_text_time = 0;//Reset
	}
}

$("document").ready(function(){
	$(".specialty_box").hover(
	function(){
		$(this).css("opacity", "0.75");
	},function() {
		$(this).css("opacity", "1.0");
	});
	
	//Timer for rotating specialty statement text
	$(".specialty_statement").eq(specialty_text_time).fadeIn(400);
	specialty_statement_count = $(".specialty_statement").length;
	window.setInterval(rotate_specialty_statement_text, 4000);
});


function color_specialty_boxes(){
	$(".specialty_box1").css("background-image", "linear-gradient(to bottom, "+theme_gold2+","+theme_gold1+")");	
	$(".specialty_box2").css("background-image", "linear-gradient(to bottom, "+theme_darkblue2+","+theme_darkblue1+")");
	$(".specialty_box3").css("background-image", "linear-gradient(to bottom, "+theme_gold2+","+theme_gold1+")");
}


function rebuild_mission_statement_panel(resize_level, window_width){
	//
	//Content
	//Set min height for class content	
	//document_height = $(document).height();
	//header_height =  $(".header").height();
	//alert(header_height);
	//content_min_height = 0;// document_height - header_height;
	//$(".content").css("min-height", content_min_height + "px");	
	
	//Mission statement
	//mission_statement_panel_container_width = window_width_original*0.72;
	//mission_statement_panel_container_height = window_width_original*0.31;

	if(resize_level <= 2){
		mission_statement_panel_container_width = screen_width*0.7;
		mission_statement_panel_container_height = screen_width*0.31;	
		mission_statement_panel_width = mission_statement_panel_container_width*0.5;//0.5;
		mission_statement_panel_height = mission_statement_panel_container_height*0.7;//0.69;		
	}else{//resize level 3 or 4
		mission_statement_panel_container_width = window_width;
		mission_statement_panel_container_height = screen_width*0.18;	
		mission_statement_panel_width = mission_statement_panel_container_width;
		mission_statement_panel_height = mission_statement_panel_container_height*0.98;			
	}


	$("#mission_statement_panel_container").css("width", mission_statement_panel_container_width + "px");
	$("#mission_statement_panel_container").css("min-height", mission_statement_panel_container_height + "px");
	$("#mission_statement_panel").css("width", mission_statement_panel_width + "px");
	$("#mission_statement_panel").css("min-height", mission_statement_panel_height + "px");	
	//$("#mission_statement_panel").css("margin-bottom", "0px");
//alert($("#mission_statement_panel_container").width())
//alert($("#mission_statement_panel").width())
	centralize_element_horizontally($("#mission_statement_panel_container"));
	if(resize_level <= 2){
		var panel_vertical_shift = mission_statement_panel_container_height - $("#mission_statement_panel").height();
		//var panel_horizontal_shift = (window_width_original - mission_statement_panel_container_width)/2
		$("#mission_statement_panel").css({
			position: "relative",
			top: panel_vertical_shift + "px"
		});	
		/*$("#mission_statement_panel").css({
			position: "relative",
			left: panel_horizontal_shift + "px"
		});	*/	
	}else{//Resize level 2 or 3
		$("#mission_statement_panel").css({
			position: "relative",
			top: "0px"
		});		
		centralize_element_horizontally($("#mission_statement_panel"));		
		//console.log("container "+$("#mission_statement_panel_container").width()+" panel "+$("#mission_statement_panel").width());
	}
	

	
	/*$("#mission_statement_panel h1").css("text-align", "center");
	$("#mission_statement_panel h1").css("width", "fit-content");
	$("#mission_statement_panel h1").css("margin", "auto");
	$("#mission_statement_panel h2").css("text-align", "center");
	$("#mission_statement_panel h2").css("width", "fit-content");
	$("#mission_statement_panel h2").css("margin", "auto");
	$("#mission_statement_panel h3").css("text-align", "center");
	$("#mission_statement_panel h3").css("width", "fit-content");
	$("#mission_statement_panel h3").css("margin", "auto");	
	$("#mission_statement_panel h5").css("text-align", "center");
	$("#mission_statement_panel h5").css("width", "fit-content");
	$("#mission_statement_panel h5").css("margin", "auto");*/
	

}


function rebuild_specialties_panel(resize_level, window_width){
	//Specialties panel
	fixed_specialties_panel_width = logo_box_fixed_width*5.58;
	//The max panel to window width ratio is gotten by using the max panel width(fixed width computed above)
	//and the max window width for intermediate window A(resize_threshold1)
	specialties_panel_width_to_window_width_ratio = fixed_specialties_panel_width/resize_threshold1;
	var specialties_panel_width;
	var specialties_panel_height;
	var specialty_box_width;
	var specialty_box_height;
	if(resize_level == 1){
		specialties_panel_width = fixed_specialties_panel_width;
		//console.log(specialties_panel_width);
	}
	
	if(resize_level == 2){
		specialties_panel_width = window_width*specialties_panel_width_to_window_width_ratio;
		//console.log(specialties_panel_width);
	}
	
	specialty_box_width = specialties_panel_width/3;
	specialty_box_height = logo_box_fixed_width*1.3;

	if(resize_level < 3){
		specialties_panel_height = specialty_box_height*1.53;	
	}else{
		specialties_panel_height = specialty_box_height;
	}
	//specialties_panel_height = logo_box_fixed_width*2;	
	//specialty_box_height = specialties_panel_height*0.65;		
	
	$(".specialties_panel").css("width", specialties_panel_width+"px");
	$(".specialties_panel").css("height", specialties_panel_height+"px");
	//$(".specialties_panel").css("border", "1px solid red");

	
	  
	$(".specialty_box").each(function(){
		$(this).css("width", specialty_box_width +"px");
		$(this).css("height", specialty_box_height +"px");
		$(this).css("float", "left");
		$(this).css("margin-top", "2px");
		//$(this).css("background-color", "red");
	});	
}

function rebuild_content(resize_level, window_width){
	//Content
	//Set min height for class content	
	//document_height = $(document).height();
	//header_height =  $(".header").height();
	//alert(header_height);
	//content_min_height = 0;// document_height - header_height;
	//$(".content").css("min-height", content_min_height + "px");	
	
	//Mission statement
	//mission_statement_panel_container_width = window_width_original*0.72;
	//mission_statement_panel_container_height = window_width_original*0.31;
	/*mission_statement_panel_container_width = screen_width*0.7;
	mission_statement_panel_container_height = screen_width*0.31;	
	mission_statement_panel_width = mission_statement_panel_container_width*0.4;//0.5;
	mission_statement_panel_height = mission_statement_panel_container_height*0.7;//0.69;
	
	$("#mission_statement_panel_container").css("width", mission_statement_panel_container_width + "px");
	$("#mission_statement_panel_container").css("height", mission_statement_panel_container_height + "px");
	$("#mission_statement_panel").css("width", mission_statement_panel_width + "px");
	$("#mission_statement_panel").css("height", mission_statement_panel_height + "px");	
	$("#mission_statement_panel").css("margin-bottom", "0px");

	var panel_vertical_shift = mission_statement_panel_container_height - $("#mission_statement_panel").height();
	//var panel_horizontal_shift = (window_width_original - mission_statement_panel_container_width)/2
	$("#mission_statement_panel").css({
		position: "relative",
		top: panel_vertical_shift + "px"
	});	
	*/

	rebuild_mission_statement_panel(resize_level, window_width);
	rebuild_specialties_panel(resize_level, window_width);
	
	
	color_specialty_boxes();
	
	
	//Attorney panel
	//attorney_panel_height = window_width_original*0.45;//0.35;
	attorney_panel_height = screen_width*0.45;//0.35;
	$("#attorney_panel").css("min-height", attorney_panel_height+"px");
	
		//Attorney photo container
	//attorney_photo_container_width = window_width_original*0.4;
	attorney_photo_container_width = screen_width*0.45;
	attorney_photo_container_height = attorney_panel_height*0.95;
	$("#attorney_photo_container").css("width", attorney_photo_container_width+"px");
	$("#attorney_photo_container").css("height", attorney_photo_container_height+"px");
	$("#attorney_photo_container").css("float", "left");
	attorney_photo_container_vertical_shift = (attorney_panel_height - attorney_photo_container_height)/2;
	$("#attorney_photo_container").css({
		position: "relative",
		top: attorney_photo_container_vertical_shift + "px"
	});		
		
		//Scale and position pic
	scale_and_position_image($("#attorney_photo"), $("#attorney_photo_container"), 1);
	$("#attorney_photo").show();
	
		//Law office details
	//law_office_details_width = window_width_original*0.35;
	law_office_details_width = screen_width*0.3;
	law_office_details_height = attorney_photo_container_height;
	$("#law_office_details").css("width", law_office_details_width+ "px");
	$("#law_office_details").css("height", law_office_details_height+ "px");
	$("#law_office_details").css("float", "left");
	law_office_details_vertical_shift = (attorney_panel_height - law_office_details_height)/2;
	law_office_details_horizontal_shift = ($("#attorney_panel").width()*0.05)/2;
	$("#law_office_details").css({
		position: "relative",
		top: law_office_details_vertical_shift + "px"
	});	
	$("#law_office_details").css({
		position: "relative",
		left: law_office_details_horizontal_shift + "px"
	});		
	
	//Contact panel
	//contact_panel_height = window_width_original*0.23;
	contact_panel_height = screen_width*0.23;
	$("#contact_panel").css("height", contact_panel_height+"px");
	
}