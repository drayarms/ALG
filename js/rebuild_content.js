$(document).ready(function(){
	
	//var num_pages = parseInt($("#num_pages").text());
	var num_slots = parseInt($("#num_slots").text());

	
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
				//Then show current guy
				window.setTimeout(show_statement(i), 600);//Set timeout time must be greater than fadeout time

			}			
		}		
	}
	
	specialty_text_time++;
	if(specialty_text_time % specialty_statement_count == 0){
		specialty_text_time = 0;//Reset
	}
}


function show_bg_img(i){
	//rebuild_bg_img_dimensions();
	//rebuild_bg_img_position();
	$(".homepage_background_image").eq(i).fadeIn(1600);	
	scale_and_position_image($(".homepage_background_image").eq(i), $("#homepage_background_image_container"), 1);//Repeat this on every resize
	$(".homepage_background_image").eq(i).addClass("displayed");
	$(".homepage_background_image").eq(i).removeClass("undisplayed");
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

				//Then show current guy
				window.setTimeout(show_bg_img(i), 600);//Set timeout time must be greater than fadeout time

			}			
		}		
		
	}
	
	bg_img_time++;
	if(bg_img_time%homepage_background_image_count == 0){
		bg_img_time = 0;//Reset
	}	
}


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

	insert_image(current_displayed_img, $("#homepage_background_image_container"), 1, image_load_wait_time);
	
}


function rebuild_bg_img_position(){
	//$(".homepage_background_image").eq(bg_img_time).hide();
	
	var top_header_height = $(".top_header").height();
	var top_header_margin_top = parseFloat($(".top_header").css("margin-top"));
	
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


function rebuild_mission_statement_box(){

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
	centralize_element_horizontally($("#mission_statement_panel_container"));
	if(resize_level <= 2){
		var panel_vertical_shift = mission_statement_panel_container_height - $("#mission_statement_panel").height();
		//var panel_horizontal_shift = (window_width_original - mission_statement_panel_container_width)/2
		$("#mission_statement_panel").css({
			position: "relative",
			top: panel_vertical_shift + "px"
		});	

		$("#mission_statement_panel").css("text-align", "left");
	}else{//Resize level 2 or 3
		$("#mission_statement_panel").css({
			position: "relative",
			top: "0px"
		});	
		$("#mission_statement_panel").css("text-align", "justify");		
		centralize_element_horizontally($("#mission_statement_panel"));		
	}

}


function rebuild_specialties_panel(){

	var specialties_panel_width = get_menu_bar_width(0.85);
	var specialties_panel_height;
	var specialty_box_width;
	var specialty_box_height;

	specialty_box_width = (specialties_panel_width/3)-1;
	if(is_mobile()){
		specialty_box_height = logo_box_fixed_width*6.5;
	}else{
		specialty_box_height = logo_box_fixed_width*1.5;
	}

	if(resize_level < 3){
		specialties_panel_height = specialty_box_height*1.33;	
	}else{
		specialties_panel_height = specialty_box_height;
	}

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


function rebuild_attorney_panel(){
	var attorney_panel_width = window_width;
	var attorney_panel_height;
	var attorney_photo_container_width;
	var attorney_photo_container_height;
	var law_office_details_width;
	var law_office_details_height;

	
	if(resize_level <= 2){//Max Window
		attorney_photo_container_width = screen_width*0.4;
		attorney_photo_container_height = attorney_photo_container_width*1.125;	
	
		law_office_details_width = attorney_panel_width - attorney_photo_container_width - 10;//Allowance for float	
		law_office_details_height = attorney_photo_container_height;
		attorney_panel_height = attorney_photo_container_height;
		
		$("#attorney_photo_container").css("float", "left");
		$("#law_office_details").css("float", "right");
		
	}else{//Min Window
		attorney_photo_container_width = attorney_panel_width*0.9;
		attorney_photo_container_height = attorney_photo_container_width*0.7;	
	
		law_office_details_width = attorney_panel_width;//window width
		if(is_mobile()){
			law_office_details_height = screen_width*1.1;
		}else{
			law_office_details_height = screen_width*0.25;
		}
		attorney_panel_height = attorney_photo_container_height + law_office_details_height;
		
		$("#attorney_photo_container").css("float", "none");
		$("#law_office_details").css("float", "none");	
		
	}
	
	
	$("#attorney_panel").css("width", attorney_panel_width + "px");
	$("#attorney_panel").css("height", attorney_panel_height + "px");
	$("#attorney_photo_container").css("width", attorney_photo_container_width + "px");
	$("#attorney_photo_container").css("height", attorney_photo_container_height + "px");
	$("#law_office_details").css("width", law_office_details_width + "px");
	$("#law_office_details").css("height", law_office_details_height + "px");

	if(resize_level <= 2){//Max Window
		//Uncentralize horizontally
		$("#attorney_photo_container").css({
			position: "relative",
			left: "0px"
		});	
		
		$("#law_office_details").css("text-align", "left");
		$("#law_office_details").css("padding-right", "15%");
		$("#law_office_details").css("padding-left", "5%");
		
	}else{	
			
		centralize_element_horizontally($("#attorney_photo_container"));
		
		$("#law_office_details").css("text-align", "justify");
		$("#law_office_details").css("padding-right", "1%");
		$("#law_office_details").css("padding-left", "1%");		
	}
	
	insert_image($("#attorney_photo"), $("#attorney_photo_container"), 1, image_load_wait_time);	
}


function rebuild_contact_panel(){
	var contact_panel_height;
	if(is_mobile()){
		contact_panel_height = screen_width*1;
	}else{
		contact_panel_height = screen_width*0.27;//0.24;
	}
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


function rebuild_content_banner(content_banner_width){

	$(".content_banner").css("width", content_banner_width +"px");

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

	insert_image($(".blog_img"), $(".blog_img_container"), 1, image_load_wait_time);
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
	
	var content_banner_width = get_menu_bar_width(1);
	if((window.location.href.indexOf("index") > -1) || (window.location.pathname == "/")){

		rebuild_mission_statement_box();

		rebuild_specialties_panel();
		rebuild_contact_panel();
		rebuild_attorney_panel();
	
		restyle_statements();
		color_specialty_boxes();
		$(".content_maintenance").css("width", content_banner_width*1 +"px");
	}else{
		//console.log("soo NOT root url")
		$(".disclaimer").css("width", content_banner_width +"px");
		rebuild_content_banner(content_banner_width);
	}
	
	if(window.location.href.indexOf("about-us") > -1){
		$("#firm_info").css("width", content_banner_width +"px");
		insert_image($("#firm_info_image"), $("#firm_info_image").parent(), 1, image_load_wait_time);

	}else if(window.location.href.indexOf("attorney-profiles") > -1){
		
		$(".attorneys_bio").css("width", content_banner_width +"px");
		
		insert_image($(".attorney_bio_image"), $(".attorney_bio_image").parent(), 1, image_load_wait_time);
			
	}else if(window.location.href.indexOf("contact-us") > -1){
		$("#contact_bulletin").css("width", content_banner_width +"px");
		$("#contact_us_page_form").css("width", content_banner_width +"px");

		resize_contact_us_form();
						
	}else if(window.location.href.indexOf("article") > -1){//Ensure this condition appears b4 the blog condition coz href also contains string "blog"
		$("#article_inner").css("width", content_banner_width*0.96 +"px");
		insert_image($("#article_image"), $("#article_image").parent(), 1, image_load_wait_time);
	}else if(window.location.href.indexOf("blog") > -1){
		$("#blog_inner").css("width", content_banner_width*0.96 +"px");
		rebuild_blog_square($("#blog_inner").width());
		//rebuild_pagination_tab();
	}else if(window.location.href.indexOf("faqs") > -1){
		$("#faqs_inner").css("width", content_banner_width*0.96 +"px");
	}else if(window.location.href.indexOf("practice-areas") > -1){
		$("#practice_areas_inner").css("width", content_banner_width*0.96 +"px");
		insert_image($("#intro_image"), $("#intro_image").parent(), 1, image_load_wait_time);
	}else if(window.location.href.indexOf("testimonials") > -1){
		$("#testimonials_bulletin").css("width", content_banner_width +"px");
		$("#testimonials_page_form").css("width", content_banner_width +"px");
		resize_testimonials_form();
	}else if(window.location.href.indexOf("referrals") > -1){
		$("#referrals_inner").css("width", content_banner_width*0.96 +"px");
	}//else if(window.location.href.indexOf("maintenance") > -1){
		//$("#maintenance_inner").css("width", content_banner_width*0.96 +"px");
	//}
	
}

