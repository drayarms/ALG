function show_statement(i){
	$(".specialty_statement").eq(i).addClass("displayed");
	$(".specialty_statement").eq(i).removeClass("undisplayed");
	//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
	$(".specialty_statement").eq(i).fadeIn(1600);	
}

function rotate_specialty_statement_text(){
	//console.log(specialty_text_time);
	
	var prev_specialty_text_time = specialty_text_time - 1;
	if (prev_specialty_text_time == -1){
		prev_specialty_text_time = specialty_statement_count - 1;
	}
	//console.log("now "+specialty_text_time+" prev "+prev_specialty_text_time);
	//$(".specialty_statement").eq(specialty_text_time).fadeOut(400);
	//$(".specialty_statement").eq(specialty_text_time).fadeIn(400);
	
	for(i = 0; i < specialty_statement_count; i++){
		
		if(i == specialty_text_time){//Your turn
			//Remove all others
			for(j = 0; j < specialty_statement_count; j++){
				if(j != i){
					$(".specialty_statement").eq(j).removeClass("displayed");
					$(".specialty_statement").eq(j).addClass("undisplayed");
					//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
					$(".specialty_statement").eq(j).hide();//fadeOut(1000);
				}
			}
		
			if(! $(".specialty_statement").eq(i).hasClass("displayed")){//Your turn but not displayed
			
				//Remove previous guy
				//$(".specialty_statement").eq(prev_specialty_text_time).removeClass("displayed");
				//$(".specialty_statement").eq(prev_specialty_text_time).addClass("undisplayed");
				
				//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
				//$(".specialty_statement").eq(prev_specialty_text_time).hide();//fadeOut(1000);
				
				//Then show current guy
				window.setTimeout(show_statement(i), 600);//Set timeout time must be greater than fadeout time

			}			
		}		
		
		/*if(i != specialty_text_time){//If not your turn
			if($(".specialty_statement").eq(i).hasClass("displayed")){//Not your turn but displayed
				$(".specialty_statement").eq(i).removeClass("displayed");
				$(".specialty_statement").eq(i).addClass("undisplayed");
				//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
				$(".specialty_statement").eq(i).fadeOut(1000);
			}		
		}else{//Your turn
			if(! $(".specialty_statement").eq(i).hasClass("displayed")){//Your turn but not displayed
				$(".specialty_statement").eq(i).addClass("displayed");
				$(".specialty_statement").eq(i).removeClass("undisplayed");
				//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
				$(".specialty_statement").eq(i).fadeIn(1000);
			}			
		}*/
	}
	
	//console.log("specialty txt time "+specialty_text_time);
	//console.log("in timer session scroll top: "+window.sessionStorage.scrollTop+ " scroll top:"+$(window).scrollTop());
	specialty_text_time++;
	if(specialty_text_time%specialty_statement_count == 0){
		specialty_text_time = 0;//Reset
	}
}


function show_bg_img(i){
	$(".homepage_background_image").eq(i).addClass("displayed");
	$(".homepage_background_image").eq(i).removeClass("undisplayed");
	//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
	$(".homepage_background_image").eq(i).fadeIn(1600);	
}


function rotate_bg_img(){
	
	var prev_bg_img_time = bg_img_time - 1;
	if (prev_bg_img_time == -1){
		prev_bg_img_time = homepage_background_image_count - 1;
	}

	
	for(i = 0; i < homepage_background_image_count; i++){
		
		if(i == bg_img_time){//Your turn
			//Remove all others
			for(j = 0; j < homepage_background_image_count; j++){
				if(j != i){
					$(".homepage_background_image").eq(j).removeClass("displayed");
					$(".homepage_background_image").eq(j).addClass("undisplayed");
					//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
					$(".homepage_background_image").eq(j).hide();//fadeOut(1000);
				}
			}		
			if(! $(".homepage_background_image").eq(i).hasClass("displayed")){//Your turn but not displayed
			
				//Remove previous guy
				//$(".homepage_background_image").eq(prev_bg_img_time).removeClass("displayed");
				//$(".homepage_background_image").eq(prev_bg_img_time).addClass("undisplayed");
				//Make sure aggregate of fadeIn and fadeOut time doesn't exceed interval between each timer
				//$(".homepage_background_image").eq(prev_bg_img_time).hide();//fadeOut(1000);
				
				//Then show current guy
				window.setTimeout(show_bg_img(i), 600);//Set timeout time must be greater than fadeout time

			}			
		}		
		
	}
	
	//console.log("bg image time "+bg_img_time);
	//console.log("in timer session scroll top: "+window.sessionStorage.scrollTop+ " scroll top:"+$(window).scrollTop());
	bg_img_time++;
	if(bg_img_time%homepage_background_image_count == 0){
		bg_img_time = 0;//Reset
	}	
}

$("document").ready(function(){
	/*$(".specialty_box").hover(
	function(){
		$(this).css("opacity", "0.75");
	},function() {
		$(this).css("opacity", "1.0");
	});
	
	//Timer for rotating specialty statement text
	specialty_statement_count = $(".specialty_statement").length;
	window.setInterval(rotate_specialty_statement_text, 4000);//Run func every 4 secs
	*/
});


function color_specialty_boxes(){
	$(".specialty_box1").css("background-image", "linear-gradient(to bottom, "+theme_gold2+","+theme_gold1+")");	
	$(".specialty_box2").css("background-image", "linear-gradient(to bottom, "+theme_darkblue2+","+theme_darkblue1+")");
	$(".specialty_box3").css("background-image", "linear-gradient(to bottom, "+theme_gold2+","+theme_gold1+")");
}



function restyle_statements(){
	if(resize_level <= 2){
		$(".statements h1").css("text-align", "left");
		$(".statements h1").css("margin-left", "0");
		$(".statements h2").css("text-align", "left");
		$(".statements h2").css("margin-left", "0");
		$(".statements h3 a").css("text-align", "left");
		$(".statements h3 a").css("margin-left", "0");
		$(".statements h5").css("text-align", "left");
		$(".statements h5").css("margin-left", "0");
	}else{//Collapse
		$(".statements h1").css("text-align", "center");
		$(".statements h1").css("margin", "auto");
		$(".statements h2").css("text-align", "center");
		$(".statements h2").css("margin", "auto");
		$(".statements h3 a").css("text-align", "center");
		$(".statements h3 a").css("margin", "auto");
		$(".statements h5").css("text-align", "center");
		$(".statements h5").css("margin", "auto");		
	}
}



function rebuild_bg_img(){//Use pictures that are not too wide. Narrow is ok but screen proportions is ideal
	var bg_img_container_width = window_width;	
	var bg_img_container_height;
	var new_bg_img_width;
	var new_bg_img_height;
	
	if(resize_level <= 2){
		bg_img_container_height = max_bg_img_container_height;
		new_bg_img_width = max_bg_img_container_width;
		new_bg_img_height = original_bg_img_height*max_container_to_bg_img_ratio;			
	}else{
		bg_img_container_height = window_width*0.75;
		width_ratio = bg_img_container_width/original_bg_img_width;
		height_ratio = bg_img_container_height/original_bg_img_height;
		var effective_ratio = width_ratio;
		if(height_ratio > width_ratio){
			effective_ratio = height_ratio;
		}
		new_bg_img_width = original_bg_img_width*effective_ratio;
		new_bg_img_height = original_bg_img_height*effective_ratio;
	}
	
	$("#homepage_background_image_container").css("width", bg_img_container_width + "px");
	$("#homepage_background_image_container").css("height", bg_img_container_height + "px");
	$(".homepage_background_image").css("width", new_bg_img_width + "px");
	$(".homepage_background_image").css("height", new_bg_img_height + "px");	
	
	if(resize_level <= 2){

		var window_top = window.sessionStorage.scrollTop;//$(window).scrollTop();
		var background_scroll_disp = window_top;
		//console.log("on refresh background scroll disp "+background_scroll_disp);
	
		var delta_y = background_scroll_disp*background_scroll_factor;
		//console.log("delta y "+delta_y)
		
		$(".homepage_background_image").css({
			position: max_bg_img_position_type,
			top: ((($(".inner_header").height())*-1) + delta_y) + "px"
		});	
		
		$(".homepage_background_image").css("z-index", -1);
		$(".homepage_background_image_container").css("z-index", -1);
		
		$(".homepage_background_image").eq(homepage_background_image_count).fadeIn(1500);
		should_scroll_background_image = true;
	}else{
		
		$(".homepage_background_image").eq(homepage_background_image_count).css({
			position: "relative",
			top: "0px"
		});	
		
		$(".homepage_background_image").css("z-index", 1);
		$(".homepage_background_image").eq(homepage_background_image_count).show();
		should_scroll_background_image = false;
	}
	centralize_element_horizontally($(".homepage_background_image"));
	
	//prev_background_img_top = $("#homepage_background_image_container").offset().top;//*Also reset this when window is scrolled
	//console.log("prev top "+prev_background_img_top);
}


function rebuild_mission_statement_panel(){
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


function rebuild_specialties_panel(){
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
		//$(".specialties_panel").css("background-color", "none");
		//console.log(specialties_panel_width);
	}
	if(resize_level == 2){
		specialties_panel_width = window_width*specialties_panel_width_to_window_width_ratio;
		//$(".specialties_panel").css("background-color", "none");
		//console.log(specialties_panel_width);
	}
	if(resize_level > 2){
		specialties_panel_width = window_width//*0.95;
		//$(".specialties_panel").css("background-color", "#d9d9d9");
		//#d9d9d9
	}
	
	specialty_box_width = (specialties_panel_width/3)-1;
	specialty_box_height = logo_box_fixed_width*1.3;

	if(resize_level < 3){
		specialties_panel_height = specialty_box_height*1.33;	
	}else{
		specialties_panel_height = specialty_box_height;
	}
	//alert("specialties panel height "+specialties_panel_height)
	//specialties_panel_height = logo_box_fixed_width*2;	
	//specialty_box_height = specialties_panel_height*0.65;		
	
	$(".specialties_panel").css("width", specialties_panel_width+"px");
	$(".specialties_panel").css("height", specialties_panel_height+"px");
	//$(".specialties_panel").css("border", "1px solid red");

	
	  
	$(".specialty_box").each(function(){
		//border:1px solid blue
		$(this).css("width", specialty_box_width +"px");
		$(this).css("height", specialty_box_height +"px");
		$(this).css("float", "left");
		$(this).css("margin-top", "2px");
		//$(this).css("background-color", "red");
	});	
}


function rebuild_contact_panel(){
	contact_panel_height = screen_width*0.23;
	$("#contact_panel").css("height", contact_panel_height+"px");	
}
	

function rebuild_attorney_panel(){
	var container_to_content_height_ratio = 1.06;
	var attorney_panel_width = window_width*0.95;
	var attorney_panel_height;
	var attorney_photo_container_width;
	var attorney_photo_container_height;
	//var attorney_photo_width;
	//var attorney_photo_height;
	var law_office_details_width;
	var law_office_details_height;
	
	//Dimensioning
	attorney_photo_container_width = screen_width*0.4;
	attorney_photo_container_height = screen_width*0.45;
	//attorney_panel_width = window_width*0.95;
	attorney_panel_height = attorney_photo_container_height*container_to_content_height_ratio;
	law_office_details_height = attorney_photo_container_height;
	if(resize_level <= 1){//Max Window
		law_office_details_width = attorney_panel_width - attorney_photo_container_width - 10;//Allowance for float	
	}else{//Min Window
		law_office_details_width = window_width;//attorney_panel_width;
		law_office_details_height = screen_width*0.2;
		attorney_panel_height = (attorney_photo_container_height + law_office_details_height)//*container_to_content_height_ratio;
	}
	
	$("#attorney_panel").css("width", attorney_panel_width + "px");
	$("#attorney_panel").css("height", attorney_panel_height + "px");
	$("#attorney_photo_container").css("width", attorney_photo_container_width + "px");
	$("#attorney_photo_container").css("height", attorney_photo_container_height + "px");
	$("#law_office_details").css("width", law_office_details_width + "px");
	$("#law_office_details").css("min-height", law_office_details_height + "px");	
//alert($("#law_office_details").height())
//alert($("#law_office_details").width())

	//Positioning
	if(resize_level <= 1){//Max Window
		//Unfloat
		$("#attorney_photo_container").css("float", "left");
		$("#law_office_details").css("float", "right");
		//Uncentralize horizontally
		$("#attorney_photo_container").css({
			position: "relative",
			left: "0px"
		});	
		$("#law_office_details").css({
			position: "relative",
			left: "0px"
		});			
		//Centralize vertically
		centralize_element_vertically($("#attorney_photo_container"));
		centralize_element_vertically($("#law_office_details"));		
	}else{//Min Window
		$("#attorney_photo_container").css("float", "none");
		$("#law_office_details").css("float", "none");	
		centralize_element_horizontally($("#attorney_photo_container"));
		centralize_element_horizontally($("#law_office_details"));
		//Uncentralize vertically
		$("#attorney_photo_container").css({
			position: "relative",
			top: "0px"
		});	
		$("#law_office_details").css({
			position: "relative",
			top: "0px"
		});			
		centralize_element_horizontally($("#attorney_photo_container"));
		centralize_element_horizontally($("#law_office_details"));
	}	
	//centralize_element_horizontally($("#attorney_panel")); 

	scale_and_position_image($("#attorney_photo"), $("#attorney_photo_container"), 1);	
	$("#attorney_photo").show();
}

/*function rebuild_attorney_panel(resize_level, window_width){
	//Attorney panel
	//attorney_panel_height = window_width_original*0.45;//0.35;
	var attorney_panel_height = screen_width*0.45;//0.35;
	$("#attorney_panel").css("min-height", attorney_panel_height+"px");
	var attorney_photo_container_width;
	
		//Attorney photo container
	//attorney_photo_container_width = window_width_original*0.4;
	if(resize_level == 1){
		attorney_photo_container_width = screen_width*0.38;
	}else{
		attorney_photo_container_width = window_width*0.95;
	}
	var attorney_photo_container_height = attorney_panel_height*0.95;
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
	law_office_details_width = window_width*0.35;//screen_width*0.3;
	law_office_details_height = attorney_photo_container_height;
	$("#law_office_details").css("width", law_office_details_width+ "px");
	$("#law_office_details").css("height", law_office_details_height+ "px");
	if(resize_level == 1){
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
		$("#attorney_photo_container").css({
			position: "relative",
			left: "0px"//Remove centralize
		});		
		//$("#law_office_details").css("margin", "0px");
	}else{
		$("#law_office_details").css("float", "none");
		$("#law_office_details").css("width", window_width*0.95 +"px");
		$("#law_office_details").css("height", window_width*0.48 +"px");
		$("#law_office_details").css({
			position: "relative",
			left: ((window_width - $("#law_office_details").width())/2) + "px"
		});	
		centralize_element_horizontally($("#attorney_photo_container"));
		//centralize_element_horizontally($("#law_office_details"));
		//$("#law_office_details").css("margin", "15px");
	}
	
	//Contact panel
	//contact_panel_height = window_width_original*0.23;
	contact_panel_height = screen_width*0.23;
	$("#contact_panel").css("height", contact_panel_height+"px");	
}*/


function rebuild_content_homepage(){
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

	//$(window).scrollTop(window.sessionStorage.scrollTop);
	rebuild_bg_img();
	//$(window).scrollTop(window.sessionStorage.scrollTop);
	rebuild_mission_statement_panel();
	//$(window).scrollTop(window.sessionStorage.scrollTop);
	rebuild_specialties_panel();
	rebuild_attorney_panel();
	rebuild_contact_panel();
	
	restyle_statements();
	color_specialty_boxes();
	
	/*
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
	$("#contact_panel").css("height", contact_panel_height+"px");*/
	
}