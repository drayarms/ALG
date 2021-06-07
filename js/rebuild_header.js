$("document").ready(function(){
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
	});*/
});

function set_header_colors(){
	$(".header_banner").css("background-color", theme_darkblue1);//For browsers that don't support gradient
	$(".header_banner").css("background-image", "linear-gradient(to right, "+theme_darkblue1+","+theme_darkblue2+")");
	$(".menu_bar").css("background-color", theme_gold2);	
	//$(".menu_bar div").css("background-image", "linear-gradient(to bottom, "+theme_gold1+","+theme_gold2+")");	
}


function highlight_menu(){
    if (window.location.href.indexOf("index") > -1) {
      $(".menu_home a").css("color", menu_highlight_color);
    }	
}


function rebuild_header_inner(resize_level, window_width, header_width){
	
	var header_inner_width = ($(".logo_box").width() + $(".header_banner").width())+1;//Give some allowance for float
	var header_inner_height = $(".logo_box").height() + $(".menu_bar").height();
	var header_width = window_width*window_to_header_width_ratio;
	var header_height = header_inner_height;
	
	//console.log("header banner height "+$(".header_banner").height()+" menu bar height: "+$(".menu_bar").height());
	$(".inner_header").css("width", header_inner_width + "px");
	$(".inner_header").css("height", header_inner_height+"px");//("height", header_inner_height);
	//centralize_element_horizontally($(".inner_header"));
	//$(".inner_header").css("margin-left", ((header_width-header_inner_width)/2)+"px");
	
	$(".header").css("width", header_width + "px");
	$(".header").css("height", header_height+"px");
	//$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	//centralize_element_horizontally($(".header"));
	
	
}


function rebuild_header_elements(resize_level, window_width, header_width){
	//Header elements(logo box and header banner)
	//console.log(window_width);
	//The max header inner to window width ratio is gotten by using the  fixed header inner width
	//and the max window width for intermediate window A(resize_threshold1)	
	header_inner_width_to_window_width_ratio = header_inner_width_fixed/resize_threshold1;
	
	var logo_box_width = logo_box_fixed_width;
	var logo_box_height = logo_box_fixed_height;
	var header_banner_width;
	var header_banner_height = logo_box_height;
	menu_bar_height = header_fixed_height - logo_box_height;
	//var menu_bar_width; moved to init
	//var menu_bar_height; moved to init
	
	
	if(resize_level == 1){//Maintain header inner fixed width
		header_banner_width = (header_inner_width_fixed - logo_box_width);//Give allowance for float
		menu_bar_width = header_inner_width_fixed;
	}
	
	if(resize_level == 2){//Shrink header inner to fit window
		header_banner_width = window_width*header_inner_width_to_window_width_ratio - logo_box_width;
		menu_bar_width = window_width*header_inner_width_to_window_width_ratio;
	}	
	
	if(resize_level > 2){//Collapse header
		//console.log("collapse")
		header_banner_width = window_width*header_inner_width_to_window_width_ratio;
		menu_bar_width = header_banner_width;
		
		menu_bar_item_height = logo_box_height*0.27;
		menu_bar_item_width = menu_bar_width;
		var num_menu_items = $(".menu_bar").children().length;
		menu_bar_height = (menu_bar_item_height*num_menu_items)+(2*num_menu_items);//Extra allowance for border				
	}
		



	$(".logo_box").css("width", logo_box_width);
	$(".logo_box").css("height", logo_box_height);
	if(resize_level <= 2){
		$(".logo_box").css("float", "left");
	}else{
		$(".logo_box").css("float", "none");
	}
	$(".header_banner").css("width", header_banner_width + "px");
	$(".header_banner").css("height", header_banner_height + "px");
	if(resize_level <= 2){
		$(".header_banner").css("float", "left");
		$(".header_banner").css({//Remove the center positioning
			position: "relative",
			left: "0px"
		});		
	}else{
		$(".header_banner").css("float", "none");		
	}
	$(".menu_bar").css("width",  menu_bar_width + "px");
	$(".menu_bar").css("height",  menu_bar_height + "px");	
	$(".menu_bar").css("float", "left");
	
	

	/*if(resize_level <= 2){
	}else{
		var header_height = logo_box_height + header_banner_height + menu_bar_height;
		var header_inner_height = header_height;

		$(".header").css("width", header_width + "px");
		$(".header").css("min-height", "0px");//$(".header").css("height", header_height + "px");
		$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	
		$(".inner_header").css("width", window_width);
		$(".inner_header").css("height", "1000px");//("height", header_inner_height + "px");
		//$(".inner_header").css("margin-left", ((header_width-header_inner_width)/2)+"px");
		centralize_element_horizontally($(".inner_header"));
	}*/
	
	
}	
	

function rebuild_menu_bar(resize_level, window_width, header_width){
	if(resize_level <= 2){
		//Restructue menu bar items
		$(".menu_bar div").css("float", "left");
		$(".menu_bar div").css("border", "none");
		//Divy up menu bar proportionately according to size of each element
		var menu_items_collective_width = 0;
		$( ".menu_bar div a" ).each(function(){
			menu_items_collective_width += $(this).width();
		});
	
	
		//$(".menu_bar div").css("width",  menu_item_width);
		var menu_item_height = $(".menu_bar div a").height();
		var vertical_shift = (menu_bar_height - menu_item_height)/2;
	
		$(".menu_bar div a").each(function(){
			this_width = $(this).width();
			parent_width = (this_width/menu_items_collective_width)*menu_bar_width*0.99;//Give a little to avoid overflow
			$(this).parent().css("width",  parent_width);
			horizontal_shift = (parent_width - this_width)/2;
		

			$(this).css({
				position: "relative",
				left: horizontal_shift + "px"
			});	

			$(this).css({
				position: "relative",
				top: vertical_shift + "px"
			});			
		});		
	}else{
		//Restructure menu bar
		$(".menu_bar div").css("float", "none");//Remove float
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
	}	
}


function rebuild_header(resize_level, window_width){//, header_width, header_inner_width){
	/*Builds elements in header div whenever page is refreshed of resized*/
	var header_width = window_width*window_to_header_width_ratio;
	rebuild_header_elements(resize_level, window_width, header_width);
	rebuild_menu_bar(resize_level, window_width, header_width);
	rebuild_header_inner(resize_level, window_width, header_width);
	set_header_colors();
	highlight_menu();
	
	$(".header").css("margin-left", ((window_width-$(".header").width())/2)+"px");
	centralize_element_horizontally($(".inner_header"));
	if(resize_level > 2){
		centralize_element_horizontally($(".header_banner"));
	}
	centralize_element_horizontally($(".menu_bar"));
	
	//alert($("#a").width())

}
