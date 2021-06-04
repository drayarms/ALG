function set_resized_header_properties(window_width, header_width, header_inner_width){

	//Header elements
	var logo_box_width = logo_box_fixed_width;
	var logo_box_height = logo_box_fixed_height;
	var header_banner_width = header_width;
	var header_banner_height = logo_box_height;
	var menu_bar_width = header_width;
	var menu_bar_item_height = logo_box_height*0.27;
	var menu_bar_item_width = menu_bar_width;
	var num_menu_items = $(".menu_bar").children().length;
	var menu_bar_height = (menu_bar_item_height*num_menu_items)+(2*num_menu_items);//Extra allowance for border
	
	$(".logo_box").css("width", logo_box_width);
	$(".logo_box").css("height", logo_box_height);
	//$(".logo_box").css("float", "left");
	$(".header_banner").css("width", header_banner_width);
	$(".header_banner").css("height", header_banner_height);

	//$(".header_banner").css("float", "left");
	$(".menu_bar").css("width",  menu_bar_width);
	$(".menu_bar").css("height",  menu_bar_height);	
	$(".menu_bar").css("float", "left");
	
	
	header_height = logo_box_height + header_banner_height + menu_bar_height;
	header_inner_height = header_height;

	$(".header").css("width", header_width);
	$(".header").css("height", header_height);
	$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	
	$(".header .inner_header").css("width", header_inner_width);
	$(".header .inner_header").css("height", header_inner_height);
	$(".header .inner_header").css("margin-left", ((header_width-header_inner_width)/2)+"px");	
	
	set_header_colors();	
	
	//Restructure menu bar
	$(".menu_bar div").css("float", "none");
	$(".menu_bar div").css("width", menu_bar_item_width +"px");
	$(".menu_bar div").css("height", menu_bar_item_height +"px");
	$(".menu_bar div").css("border", "1px solid"+menu_highlight_color_hex);
	//$(".menu_bar div").css("background-color", "red");
	
	//Centralize menu text in thier respective containers
	$(".menu_bar div a").each(function(){
		horizontal_shift = (menu_bar_item_width - $(this).width())/2;
		vertical_shift = (menu_bar_item_height - $(this).height())/2;
		
		$(this).css({
			position: "relative",
			left: horizontal_shift + "px"
		});	

		$(this).css({
			position: "relative",
			top: vertical_shift + "px"
		});			
	});
	
	highlight_menu();
}