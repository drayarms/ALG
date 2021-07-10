$(document).ready(function(){
	
	//var num_pages = parseInt($("#num_pages").text());
	var num_slots = parseInt($("#num_slots").text());
	//var page_num = parseInt($("#page_num").text());

	/*var slot1 = parseInt($(".pagination_slot:visible").eq(0).text())
	var slot_last = parseInt($(".pagination_slot:visible").eq(num_slots).text())	
	var slot1_index = slot1 - 1;
	var slot_last_index = slot_last - 1;*/
	
	//alert(num_pages+1)
	//alert(num_slots+1)
	//alert(page_num+1)

	//$(".pagination_slots").children().eq(0).css("background", "yellow");
	//$(".pagination_slots").children().eq(4).addClass("highlighted_slot");
	//$(".pagination_slots").children().eq(4).removeClass("unhighlighted_slot");



	//$(".pagination_slot:visible").eq(num_slots-1).css("background", "yellow")
	
	$(".pagination_previous").click(function(){
		
		var first_visible_slot = $(".pagination_slot:visible").eq(0);
		var last_visible_slot = $(".pagination_slot:visible").eq(num_slots-1);		
		
		first_visible_slot.prev().addClass("unhidden_page");
		first_visible_slot.prev().removeClass("hidden_page");
		
		if(last_visible_slot.length > 0){//Make sure the slot exists
			last_visible_slot.addClass("hidden_page");
			last_visible_slot.removeClass("unhidden_page");
		}		
		
		show_hide_prev_next();
		
	});
	
	$(".pagination_next").click(function(){
		
		var first_visible_slot = $(".pagination_slot:visible").eq(0);
		var last_visible_slot = $(".pagination_slot:visible").eq(num_slots-1);		
		
		first_visible_slot.addClass("hidden_page");
		first_visible_slot.removeClass("unhidden_page");
		
		if(last_visible_slot.next().length > 0){//Make sure the slot exists
			last_visible_slot.next().addClass("unhidden_page");
			last_visible_slot.next().removeClass("hidden_page");
		}		
		
		show_hide_prev_next();
		
	});
});



function show_hide_prev_next(){
	var num_pages = parseInt($("#num_pages").text());
	var num_slots = parseInt($("#num_slots").text());
	//var page_num = parseInt($("#page_num").text());
	//var slot1 = parseInt($(".pagination_slots").children().eq(0).text())
	var slot1 = parseInt($(".pagination_slot:visible").eq(0).text())
	var slot_last = parseInt($(".pagination_slot:visible").eq(num_slots-1).text())

	//Show prev if slot 1 isn't occupied by bubble 1
	if(slot1 == 1){
		$(".pagination_previous").hide();
	}else{
		$(".pagination_previous").show();
	}
	
	//Show next if slot lst isn't occupied by bubble last page

	if(slot_last == num_pages){
		$(".pagination_next").hide();
	}else{
		$(".pagination_next").show();
	}
}


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
		
			if(!$(".specialty_statement").eq(i).hasClass("displayed")){//Your turn but not displayed
			
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
	if(specialty_text_time % specialty_statement_count == 0){
		specialty_text_time = 0;//Reset
	}
}


function show_bg_img(i){
	//rebuild_bg_img_dimensions();
	//rebuild_bg_img_position();
	scale_and_position_image($(".homepage_background_image").eq(i), $("#homepage_background_image_container"), 1);//Repeat this on every resize
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
		//console.log(bg_img_time)
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


function rebuild_bg_img_dimensions(){//Use pictures that are not too wide. Narrow is ok but screen proportions is ideal
	//var bg_img_container_width = window_width;	
	var bg_img_container_width;
	var fixed_bg_img_container_width = screen_width*0.9;

	//The max panel to window width ratio is gotten by using the max panel width(fixed width computed above)
	//and the max window width for intermediate window A(resize_threshold1)
	bg_img_container_width_to_window_width_ratio = fixed_bg_img_container_width/resize_threshold1;

	if(resize_level == 1){
		bg_img_container_width = fixed_bg_img_container_width;
	}else if(resize_level == 2){
		bg_img_container_width = bg_img_container_width_to_window_width_ratio*window_width;
	}else{
		bg_img_container_width = window_width;
	}

	
	var bg_img_container_height = bg_img_container_width*0.85;
	
	$("#homepage_background_image_container").css("width", bg_img_container_width + "px");
	$("#homepage_background_image_container").css("height", bg_img_container_height + "px");
	
	centralize_element_horizontally($("#homepage_background_image_container"));
	//console.log("scaling")
	var current_displayed_img;
	for(i = 0; i < homepage_background_image_count; i++){	
		if($(".homepage_background_image").eq(i).is(":visible")){
			current_displayed_img = $(".homepage_background_image").eq(i);
			//console.log(i+" displayed")
		}else{
			//console.log(i+" not displayed")
		}
	}
	//console.log(current_displayed_img.attr("src"));
	scale_and_position_image(current_displayed_img, $("#homepage_background_image_container"), 1);
	
}


function rebuild_bg_img_position(){
	//$(".homepage_background_image").eq(bg_img_time).hide();
	
	var top_header_height = $(".top_header").height();
	var top_header_margin_top = parseFloat($(".top_header").css("margin-top"));
	//console.log("top header h: "+top_header_height+" margin top: "+top_header_margin_top)
	
	
	
	if(resize_level <= 2){
		//alert(top_header_margin_top)
		var resultant_top = -1*top_header_margin_top;//Maintain at least this distance
		resultant_top += window.sessionStorage.scrollTop*background_scroll_factor; //Move against direction of scroll by a fraction, proportional to scroll top to give a bouncy effect
		$("#homepage_background_image_container").css({
			position: "absolute",
			top: (resultant_top) + "px"
		});			
	}else{
		$("#homepage_background_image_container").css({
			position: "relative",
			top: (0) + "px"
		});			
	}	
	
	
	//scale_and_position_image($(".homepage_background_image").eq(bg_img_time), $("#homepage_background_image_container"), 1);
	//$(".homepage_background_image").eq(bg_img_time).show();
	////////////////////////////////////////////////////
	//centralize_element_horizontally($(".homepage_background_image"));
	//scale_and_position_image($(".homepage_background_image").eq(0), $("#homepage_background_image_container"), 1);
	//$(".homepage_background_image").eq(0).fadeIn(1600);	
	/*Remeber to trigger rotate_bg_img in document ready. Function definition on this page*/
}


function rebuild_bg_img1(){//Use pictures that are not too wide. Narrow is ok but screen proportions is ideal
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


function rebuild_mission_statement_box(){
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
		//console.log(2)
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
		//$("#mission_statement_panel").css({
			//position: "relative",
			//left: panel_horizontal_shift + "px"
		//});		
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
	//fixed_specialties_panel_width = logo_box_fixed_width*6.58;

	//The max panel to window width ratio is gotten by using the max panel width(fixed width computed above)
	//and the max window width for intermediate window A(resize_threshold1)
	//specialties_panel_width_to_window_width_ratio = fixed_specialties_panel_width/resize_threshold1;
	var specialties_panel_width = get_menu_bar_width(0.85);
	var specialties_panel_height;
	var specialty_box_width;
	var specialty_box_height;
	/*if(resize_level == 1){
		specialties_panel_width = fixed_specialties_panel_width;
	}
	if(resize_level == 2){
		specialties_panel_width = window_width*specialties_panel_width_to_window_width_ratio;
	}
	if(resize_level > 2){
		specialties_panel_width = window_width//*0.95;
	}*/
	
	specialty_box_width = (specialties_panel_width/3)-1;
	specialty_box_height = logo_box_fixed_width*1.5;

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
		
		$(this).find("a div").css("width", specialty_box_width + "px");
		$(this).find("a div").css("height", (specialty_box_height/3) + "px");
	});	
	
	//Vertically align specialty box checkbox to bottom of container
	$(".specialty_box_checkbox i").css({
		position: "relative",
		top: ($(".specialty_box_checkbox").height() - $(".specialty_box_checkbox i").height())+"px"
	});		
}


function rebuild_contact_panel1(){
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
	//if(resize_level <= 2){
		//$(".content_homepage").css("background-color", "#ffffff");	
	//}else{
		//$(".content_homepage").css("background-color", "#e6e6e6");	
	//}
	attorney_photo_container_width = screen_width*0.4;
	attorney_photo_container_height = attorney_photo_container_width*1.125;//screen_width*0.45;
	
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

	$("#attorney_photo").show();//Show before scaling and positioning coz hidden element's width and height would be 0
	window.setTimeout(function(){
		scale_and_position_image($("#attorney_photo"), $("#attorney_photo_container"), 0.95);
	}, 100);//Give a sufficient enough delay for image to be rendered first before scaling/positioning	
}



function rebuild_contact_panel(){
	var contact_panel_height = screen_width*0.27;//0.24;
	$("#contact_panel").css("height", contact_panel_height+"px");	
	
	var fixed_form_width = screen_width*0.55;
	var form_width_to_window_width_ratio = fixed_form_width/resize_threshold1;
	
	var form_width;
	var fieldset_width;
	if(resize_level == 1){
		//form_width = screen_width*0.55;
		form_width = fixed_form_width;		
		fieldset_width = form_width*0.495;
	}else if(resize_level == 2){
		form_width = form_width_to_window_width_ratio*window_width;
		fieldset_width = form_width*0.495;
	}else{
		form_width = window_width;
		fieldset_width = form_width*0.495;
	}

	$("#contact_panel form").css("width", form_width+"px");
	$("#contact_panel form").find(".left_fieldset").css("width", fieldset_width+"px");
	$("#contact_panel form").find(".right_fieldset").css("width", fieldset_width+"px");
	
	//$("#contact_panel form").find(".form_submit").css("height", ()+"px");
	centralize_element_horizontally($("#contact_panel form").find(".form_submit"));
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


function rebuild_content_banner(content_banner_width){

	$(".content_banner").css("width", content_banner_width +"px");
	//centralize_element_vertically($(".content_banner").find("span"));
}


function rebuild_blog_square(parent_width){
	if(resize_level <= 3){
		$(".blog_square").css("width", parent_width*0.48 +"px");
		$(".blog_square").css("margin-left","0px");
		$(".blog_square").css("margin-right","0px");
		$(".left_blog").css("float", "left");
		$(".right_blog").css("float", "right");
	}else{
		$(".blog_square").css("width", parent_width*0.8 +"px");
		$(".blog_square").css("margin-left","auto");
		$(".blog_square").css("margin-right","auto");
		$(".left_blog").css("float", "none");
		$(".right_blog").css("float", "none");		
	}

	var blog_square_width = $(".blog_square").width();
	var blog_img_container_width = blog_square_width*0.7;
	var blog_img_container_height = blog_square_width*0.5;
	$(".blog_img_container").css("width", blog_img_container_width +"px");
	$(".blog_img_container").css("height", blog_img_container_height +"px");
	/*$(".blog_img").each(function(){
		$(this).show();
		window.setTimeout(function(){
			alert($(this).parent())
			scale_and_position_image($(this), $(this).parent(), 1);
		}, 100);//Give a sufficient enough delay for image to be rendered first before scaling/positioning	
		
	});*/
	$(".blog_img").show();
	window.setTimeout(function(){
		scale_and_position_image($(".blog_img"), $(".blog_img_container"), 1);
	}, 100);//Give a sufficient enough delay for image to be rendered first before scaling/positioning		

	//Compute blog square height only after all child elements have been inserted with their heights determined
	var max_blog_square_height = 0;
	$(".blog_square").each(function(){
		if($(this).height() > max_blog_square_height){
			max_blog_square_height = $(this).height();
		}
	});	
	$(".blog_square").css("height", max_blog_square_height+"px");
	
	show_hide_prev_next();
}


function resize_contact_us_form(){
	if(resize_level <= 2){
		//$(".fieldset1 .form_input").css("width", "49%");
		$(".left_input").css("float", "left");
		$(".left_input").css("width", "49.5%");
		$(".right_input").css("float", "right");
		$(".right_input").css("width", "49.5%");
			
	}else{
		//$(".fieldset1 .form_input").css("width", "100%");
		$(".left_input").css("float", "none");
		$(".left_input").css("width", "100%");
		$(".right_input").css("float", "none");
		$(".right_input").css("width", "100%");
	}
}


function resize_testimonials_form(){
	if(resize_level <= 2){
		//$(".fieldset1 .form_input").css("width", "49%");
		$(".left_input").css("float", "left");
		$(".left_input").css("width", "49.5%");
		$(".right_input").css("float", "right");
		$(".right_input").css("width", "49.5%");
			
	}else{
		//$(".fieldset1 .form_input").css("width", "100%");
		$(".left_input").css("float", "none");
		$(".left_input").css("width", "100%");
		$(".right_input").css("float", "none");
		$(".right_input").css("width", "100%");
	}
}


function rebuild_content(){
	
	if($("#submit_screen").is(":visible")){
		$("#submit_screen").css("top", window.sessionStorage.scrollTop+"px");
		$("body").css("overflow", "hidden");//Disable scroll
		centralize_element($("#submit_div"));
	}
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
	var content_banner_width = get_menu_bar_width(1);
	//$(window).scrollTop(window.sessionStorage.scrollTop);
	//rebuild_bg_img();//On init and on scrool
	//$(window).scrollTop(window.sessionStorage.scrollTop);
	if(window.location.href.indexOf("index") > -1){
		rebuild_mission_statement_box();
	//$(window).scrollTop(window.sessionStorage.scrollTop);
		rebuild_specialties_panel();
		rebuild_contact_panel();
		rebuild_attorney_panel();
	
		restyle_statements();
		color_specialty_boxes();
	}else{
		$(".disclaimer").css("width", content_banner_width +"px");
		rebuild_content_banner(content_banner_width);
	}
	
	if(window.location.href.indexOf("about-us") > -1){
		$("#firm_info").css("width", content_banner_width +"px");
		$("#firm_info_image").show();//Show before scaling and positioning coz hidden element's width and height would be 0
		window.setTimeout(function(){		
			scale_and_position_image($("#firm_info_image"), $("#firm_info_image").parent(), 1);
		});
	}else if(window.location.href.indexOf("attorney-profiles") > -1){
		
		$(".attorneys_bio").css("width", content_banner_width +"px");
		
		//$(".attorney_bio").each(function(){
			//scale_and_position_image($(this).find(".bio_image"), $(this).find("bio_image_container"), 1);
		//});
		$(".attorney_bio_image").each(function(){
			scale_and_position_image($(this), $(this).parent(), 1);
		});		
	}else if(window.location.href.indexOf("contact-us") > -1){
		$("#contact_bulletin").css("width", content_banner_width +"px");
		$("#contact_us_page_form").css("width", content_banner_width +"px");
		//alert($("#contact_us_page_form").width())
		//centralize_element_horizontally($(".textarea_fieldset"))
		//$("#required_info").css("margin-left", (($("#contact_bulletin").width() - $("#contact_us_page_form").width())/2)+"px");
		resize_contact_us_form();
			
			/*$(".left_fieldset").css("float", "none");
			$(".left_fieldset").css("width", "100%");
			$(".right_fieldset").css("float", "none");
			$(".right_fieldset").css("width", "100%");*/			
	}else if(window.location.href.indexOf("article") > -1){//Ensure this condition appears b4 the blog condition coz href also contains string "blog"
		$("#article_inner").css("width", content_banner_width*0.96 +"px");
		$("#article_image").show();//Show before scaling and positioning coz hidden element's width and height would be 0
		window.setTimeout(function(){		
			scale_and_position_image($("#article_image"), $("#article_image").parent(), 1);
		});
	}else if(window.location.href.indexOf("blog") > -1){
		$("#blog_inner").css("width", content_banner_width*0.96 +"px");
		rebuild_blog_square($("#blog_inner").width());
		//rebuild_pagination_tab();
	}else if(window.location.href.indexOf("faqs") > -1){
		$("#faqs_inner").css("width", content_banner_width*0.96 +"px");
	}else if(window.location.href.indexOf("practice-areas") > -1){
		$("#practice_areas_inner").css("width", content_banner_width*0.96 +"px");
		$("#intro_image").show();//Show before scaling and positioning coz hidden element's width and height would be 0
		window.setTimeout(function(){		
			scale_and_position_image($("#intro_image"), $("#intro_image").parent(), 1);
		});
	}else if(window.location.href.indexOf("testimonials") > -1){
		$("#testimonials_bulletin").css("width", content_banner_width +"px");
		$("#testimonials_page_form").css("width", content_banner_width +"px");
		resize_testimonials_form();
	}
	
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

