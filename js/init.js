const pixel_to_point = 1.3281472327365; //16/12;
var screen_width = window.screen.width;//*window.devicePixelRatio;//Inflexible
var screen_height = window.screen.height;
if(window.devicePixelRatio == 1.125){//MS Edge
	screen_width = window.screen.width*pixel_to_point;
	screen_height = window.screen.height*pixel_to_point;
}
var scroll_width = screen_width/85.001422895136;
var window_width_original = window.innerWidth - scroll_width;// = $(window).width();//*window.devicePixelRatio;//Varies as window is resized
var prev_window_width = window_width_original;
var header_max_width;//Width of header when page is maximized
//var header_inner_fixed_width;
//var max_bg_img_position_type = "absolute";
var background_scroll_factor = 0.44;//0.63;
//var background_scroll_disp;	
let top_header_to_header_core_height_ratio = 1.21;
//var should_scroll_background_image;
var prev_window_top;
var resize_threshold1;
var resize_threshold2;
var resize_threshold3;
var logo_box_fixed_width;
var logo_box_fixed_height;
//var header_banner_fixed_height;
//var header_fixed_height;
//var header_core_fixed_height;
var header_core_fixed_width;	
//var menu_bar_width;
var menu_bar_height;
var menu_bar_item_height;
var menu_bar_item_width;
//var footer_mission_statement_panel_fixed_width;
//var footer_mission_statement_panel_width_to_window_width_ratio;
var footer_contact_details_fixed_width;
//var footer_map_panel_width_to_window_width_ratio;
//var footer_map_panel_fixed_width;
//var marketing_panel_width_to_window_width_ratio;
//var marketing_panel_fixed_width;
var menu_item_anchor_original_height;
//var original_menu_item_widths = [];
//var menu_items_collective_width = 0;
//var specialties_panel_max_width;
//var attorney_panel_combined_children_max_width;
var specialties_panel_width_to_window_width_ratio;
var header_core_width_to_window_width_ratio;
var window_to_header_width_ratio = 0.999;
//var header_width_to_header_inner_width_ratio = 0.6;
//var	max_bg_img_container_width;
//var	max_bg_img_container_height;
//var	max_container_to_bg_img_ratio;
//var original_bg_img_width;
//var original_bg_img_height;
var specialty_text_time = 0;
var bg_img_time = 0;
var specialty_statement_count;
var homepage_background_image_count = 0;
var resize_level;
var window_width;


//console.log("original b4 "+prev_window_width);
//alert(scroll_width);
//alert("device pixel ratio: "+window.devicePixelRatio);
//alert("initially: screen width "+screen_width+" window width "+window_width)
//console.log("initially: screen width "+screen_width+" window width "+window_width)
//if(window_width > screen_width){
	//screen_width = window_width;//MS Edge quirk
//}

/*$(document).ready(function(){
	original_inner_header_width = $(".header .inner_header").width();
});*/

//var old_header_width0;
var page_size;
//var theme_gold1 = "rgba(230, 184, 0, 1.0)";//#e6b800
const theme_gold1 = "rgba(204, 163, 0, 1.0)";//#cca300
const theme_gold2 = "rgba(255, 204, 0, 1.0)";//#ffcc00
const theme_darkblue1 = "rgba(0, 26, 51, 1.0)";//#001a33
const theme_darkblue1_hex = "#001a33";
const theme_darkblue2 = "rgba(0, 38, 77, 1.0)";//#00264d
const theme_darkblue2_hex = "#00264d";
//var theme_darkblue = "rgba(0, 64, 128, 1.0)";//#004080
//var theme_darkblue = "rgba(0, 89, 179, 1.0)";//#0059b3
const menu_highlight_color = "rgb(186, 45, 139)";//#ba2d8b
const menu_highlight_color_hex = "#ba2d8b";
//const menu_highlight_color = "rgb(38, 115, 38)";//#267326
//const menu_highlight_color_hex = "#267326";
var menu_hover_color;




/*function vertically_centralize_social_media_icons(){
	//alert($(".social_media_panel").height())
	alert($(".social_media_panel .fa").height())
	alert($(".social_media_panel .fa").innerHeight())
	centralize_element_vertically($(".social_media_panel .fa"));
}*/

/*
min window  |resize threshold 3| intermediate window B|resize threshold 2| intermediate window A |resize threshold 1| max window
*/

	/*$(".top_header .menu_item_anchor").each(function(){
		//alert($(this).width())
		var this_width = $(this).width();
		menu_items_collective_width += this_width;
		original_menu_item_widths.push(this_width);
	});*/
	
	



	//document.documentElement.scrollTop //
	$(window).scroll(function() {
		window.sessionStorage.scrollTop = $(this).scrollTop();//Remember the current scroll position even across sessions(refreshes)
		var window_top = window.sessionStorage.scrollTop;//$(this).scrollTop();
		
		//console.log("current session scroll top: "+window.sessionStorage.scrollTop);
		//var window_top = $(window).scrollTop();
		//delta_window_top = window_top - original_window_top;
		//original_window_top = window_top;
		
		//new_homepage_background_container_offset += delta_window_top;
		
		//console.log("scroll top "+window_top)
		//console.log("delta window top "+delta_window_top);
		//console.log("div top "+div_top+" window top "+window_top);
		
		/*/////////////////////////////////////////////////var background_scroll_disp = window_top - prev_window_top;// - window_top;
		//console.log("on scroll background scroll disp "+background_scroll_disp);
		current_homepage_background_image_container_top = $("#homepage_background_image_container").offset().top;
		var y_displacement = current_homepage_background_image_container_top + (background_scroll_disp*background_scroll_factor);
		
		
		//console.log("top "+window_top+" prev "+prev_window_top+" diff"+background_scroll_disp);
		//console.log("curr top "+current_homepage_background_image_container_top);
		//console.log("header height "+$(".inner_header").height());
		//console.log("y disp "+y_displacement);
		//if(window_top > prev_window_top){
			//console.log("scrolling downwards");
			//y_displacement = current_homepage_background_image_container_top + background_scroll_disp;
		//}else{
			//console.log("scrolling upwards");
			//y_displacement = current_homepage_background_image_container_top - background_scroll_disp;
		//}
		
		 
		if(should_scroll_background_image){
			$("#homepage_background_image_container").css({
				position: max_bg_img_position_type,
				top: y_displacement + "px"//Move image by a fraction of page move in opposite direction
				//top: (new_homepage_background_container_offset*background_scroll_factor) + "px"//Move image by a fraction of page move in opposite direction
			});
		}
		//prev_background_img_top = $("#homepage_background_image_container").offset().top;//*Also reset this when element is rebuilt
		//prev_window_top = window_top;
		//window.sessionStorage.scrollTop = $(this).scrollTop();//Remember the current scroll position even across sessions(refreshes)
		prev_window_top = window_top;////////////////////////////////////////////////////*/
	});
	



$(document).ready(function(){

	//alert("window width "+$(window).width()+" document width "+$(document).width()+" screen width "+window.screen.width)
	//var div_top = $(".header").offset().top;
	//var original_window_top = $(window).scrollTop();
	//prev_window_top = $(window).scrollTop();
	//var delta_window_top = 0;
	
//alert("Page not yet fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());	
	/*if (window.sessionStorage.scrollTop != "undefined") {//Forcibly maintains scrool position across sessions
		//console.log("defined")
		$(window).scrollTop(window.sessionStorage.scrollTop);//Set scroll top to saved session scroll top value
		//$(window).scrollTop = window.sessionStorage.scrollTop;
	}//else{*/
		//console.log("undefined")
	//}
	//window.scrollTo(window, 0, window.sessionStorage.scrollTop);
	//window.scrollTop = 0;//window.sessionStorage.scrollTop;
	 //window.scroll(0, window.sessionStorage.scrollTop);
	//console.log("scroll top "+original_window_top)
	//console.log("on document ready, session scroll top: "+window.sessionStorage.scrollTop+ " scroll top:"+$(window).scrollTop());
	/*$("#homepage_background_container").css({
		position: "absolute",
		top: (original_window_top*background_scroll_factor) + "px"//Move image by a fraction of page move in opposite direction
	});	*/


	//var original_homepage_background_container_offset = $("#homepage_background_container").offset().top;
	//var new_homepage_background_container_offset = original_homepage_background_container_offset;
	//console.log("initial top "+$(window).scrollTop())

	//alert(original_window_top)
	//console.log(div_top)



	//$("#bar1").css("width", screen_width*0.5 + "px");
	//$("#bar2").css("width", window_width +"px");















	//Header dimensions
	//Header dimensions
	header_max_width = screen_width;//*window_to_header_width_ratio;//Width of maximized header
	//header_width_original = window_width_original;//*window_to_header_width_ratio;//Width of resized header
	//header_core_fixed_width = (screen_width - scroll_width)*header_width_to_header_inner_width_ratio;//Should remain constant as long as page isn't shrunken enough
	//header_inner_fixed_width = header_inner_width;
	resize_threshold1 = (screen_width - scroll_width)*0.8; //header_core_fixed_width;
	resize_threshold2 = (screen_width - scroll_width)*0.55; //header_max_width*0.7;//0.48;//0.45;
	resize_threshold3 = (screen_width - scroll_width)*0.42; //header_max_width*0.42;//0.38;
	//console.log("from dimensions header inner fixed width "+header_inner_fixed_width);
	//header_fixed_height = screen_width*0.104;//0.13;
	//header_core_fixed_height = header_fixed_height*0.8;//header_fixed_height*0.8;	
	header_core_fixed_width = resize_threshold1*0.9;//Should remain constant. Must be less than resize threshold1
	
	logo_box_fixed_width = screen_width*0.09;//resize_threshold1*0.15;
	logo_box_fixed_height = logo_box_fixed_width;//header_core_fixed_height*0.75;
	//alert(inner_header_fixed_width);
	
	//original_bg_img_width = $(".homepage_background_image").width();
	//original_bg_img_height = $(".homepage_background_image").height();
	//max_bg_img_container_width = screen_width;//Use pictures that are not too wide. Narrow is ok but screen proportions is ideal	
	//max_bg_img_container_height = max_bg_img_container_width*0.5;
	//max_container_to_bg_img_ratio = max_bg_img_container_width/original_bg_img_width;
	//Height will always depend on how much the width has been streched/compressed. So use ideally pics that aren't too wide
	//footer_mission_statement_panel_fixed_width = screen_width*0.68;//header_core_fixed_width*1.3;
	footer_contact_details_fixed_width = screen_width*0.28;
	//footer_map_panel_fixed_width = screen_width*0.42;
	//marketing_panel_fixed_width = screen_width*0.7;
	menu_item_anchor_original_height = $(".menu_item_anchor").eq(10).height();
	
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
	//set_homepage_background_image_dimensions(window_width_original);
	//vertically_centralize_social_media_icons();
	window_width = window_width_original;
	
	//rebuild_elements(prev_window_width, window_width_original);//Initially build header
	//set_logo_image();
	//Maintain scroll position
	//if (window.sessionStorage.scrollTop != "undefined") {//Forcibly maintains scrool position across sessions
		//$(window).scrollTop(window.sessionStorage.scrollTop);//Set scroll top to saved session scroll top value
	//}
	//window.sessionStorage.removeItem('prev_url');
	//window.sessionStorage.removeItem('url');	
	//$(".top_menu_bar").hide();//Prevents the unrpocessed menu bar from flickering b4 page fully loads
	window.sessionStorage.setItem('prev_url', sessionStorage.getItem('url'));
	window.sessionStorage.setItem('url', location.href);
	
	if (window.sessionStorage.scrollTop != "undefined") {//Forcibly maintains scrool position across sessions
		if(sessionStorage.getItem('prev_url') == sessionStorage.getItem('url')){
			$(window).scrollTop(window.sessionStorage.scrollTop);//Set scroll top to saved session scroll top value
		}
	}	



	$(".to_top").click(function(){
		$(window).scrollTop(0);
	});
	
	//alert("prev url "+sessionStorage.getItem('prev_url')+ " url "+sessionStorage.getItem('url'))	
	//window.sessionStorage.removeItem('prev_url');
	//window.sessionStorage.removeItem('url');
	

	
	/*if(sessionStorage.getItem('prev_url') == sessionStorage.getItem('url')){
		alert("equal")
	}else{
		alert("NOT equal")
	}
	window.sessionStorage.setItem('url', location.href);
	window.sessionStorage.removeItem('url');
	window.sessionStorage.clear();
	//alert(sessionStorage.getItem('url'));
	if(sessionStorage.getItem('url')){
		alert(sessionStorage.getItem('url'))
	}else{
		alert(0)
	}*/
	//console.log("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());
	//alert("Page fully loaded. Session scroll top: "+window.sessionStorage.scrollTop+ ". Scroll top:"+$(window).scrollTop());
	

//$(".header").css("width", old_header_width0 + "px");
//$(".header").css("margin-left", (1.01*(window_width-old_header_width0)/2)+"px");

//old_header_width0 = $(".header").width();//Will be new header width instead of letting css determine	
	
	//rebuild_elements(window_width, $(".header").width());
	
	
	/*if("onhashchange" in window) {
		alert("page changed or refreshed");*/
	
	
	
	
	
	$(".specialty_box").hover(
	function(){
		$(this).css("opacity", "0.75");
	},function() {
		$(this).css("opacity", "1.0");
	});
	
	//Timer for rotating specialty statement text
	specialty_statement_count = $(".specialty_statement").length;
	window.setInterval(rotate_specialty_statement_text, 4000);//Run func every 4 secs
	homepage_background_image_count = $(".homepage_background_image").length;
	
	//show_bg_img(0);//Initialize with img 0
	////window.setTimeout(rotate_bg_img, 5000);

	rotate_bg_img(bg_img_time);
	window.setInterval(rotate_bg_img, 5000);//Run func every 5 secs to rotate the image
	rebuild_elements();//Important to set picture timer first b4 buildng elements so a visible pic obj is accessible in build elements

	/*$(".menu_bar a").hover(
	function(){
		menu_hover_color = $(this).css("color");
		$(this).css("color",menu_highlight_color);
		if(page_size == "shrunken"){
			//$(this).parent().css("background-color", theme_darkblue2_hex);
			$(this).parent().css("border", "1px solid #ffffff");
			//$(this).parent().css("opacity", "0.75");
		}
	},function() {
		$(this).css("color",menu_hover_color);
		if(page_size == "shrunken"){
			//$(this).parent().css("background-color", "none");
			$(this).parent().css("border", "1px solid"+menu_highlight_color_hex);
			//$(this).parent().css("opacity", "1.0");
		}
	});	*/
	
	//$(".menu_bar a").hover(
	$(".menu_item").hover(
	function(){
		menu_hover_color = $(this).find("a").css("color");
		$(this).find("a").css("color",menu_highlight_color);
		if(page_size == "shrunken"){
			//$(this).parent().css("background-color", theme_darkblue2_hex);
			$(this).parent().css("border", "1px solid #ffffff");
			//$(this).parent().css("opacity", "0.75");
		}
	},function() {
		$(this).find("a").css("color",menu_hover_color);
		if(page_size == "shrunken"){
			//$(this).parent().css("background-color", "none");
			$(this).parent().css("border", "1px solid"+menu_highlight_color_hex);
			//$(this).parent().css("opacity", "1.0");
		}
	});	
	
	

	$(".header .menu_icon i").click(function(){
		//$(".top_menu_bar").show();
		show_screen();
	});
	
	$(".flap_header .close_icon i").click(function(){
		remove_screen();
	});	
	
	$(".flap_header_transparent_sibling").click(function(){
		remove_screen();
	});	
	
});


