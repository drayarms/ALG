$("document").ready(function(){
	$(".menu_bar a").hover(
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
	});
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

function set_header_properties(window_width, header_width, header_inner_width){
	//console.log("set header properties");
	//header_height = screen_width*0.13;
	header_height = header_fixed_height;
	//header_inner_width = header_fixed_width*0.6;//Should remain constant as long as page isn't shrunken enough
	header_inner_height = header_inner_fixed_height;
	//inner_header_fixed_width = header_inner_width;
	
	//console.log("window w "+window_width+" header w "+header_width);
	
	$(".header").css("width", header_width);
	$(".header").css("height", header_height);
	$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	
	$(".header .inner_header").css("width", header_inner_width);
	$(".header .inner_header").css("height", header_inner_height);
	$(".header .inner_header").css("margin-left", ((header_width-header_inner_width)/2)+"px");

	
	//Header elements
	//var logo_box_width = header_inner_width*0.15;
	var logo_box_width = logo_box_fixed_width;
	//var logo_box_height = header_inner_height*0.75;
	var logo_box_height = logo_box_fixed_height;
	var header_banner_width = header_inner_width - logo_box_width;
	var header_banner_height = logo_box_height;
	var menu_bar_width = header_inner_width;
	var menu_bar_height = header_inner_height - logo_box_height;
	
	$(".logo_box").css("width", logo_box_width);
	$(".logo_box").css("height", logo_box_height);
	$(".logo_box").css("float", "left");
	$(".header_banner").css("width", header_banner_width);
	$(".header_banner").css("height", header_banner_height);

	$(".header_banner").css("float", "left");
	$(".menu_bar").css("width",  menu_bar_width);
	$(".menu_bar").css("height",  menu_bar_height);	
	$(".menu_bar").css("float", "left");
	
	set_header_colors();
	
	//Restructue menu bar items
	$(".menu_bar div").css("float", "left");
	$(".menu_bar div").css("border", "none");
	//Divy up menu bar proportionately according to size of each element
	var menu_items_collective_width = 0;
	$( ".menu_bar div a" ).each(function(){
		menu_items_collective_width += $(this).width();
	});
	
	
	//$(".menu_bar div").css("width",  menu_item_width);
	menu_item_height = $(".menu_bar div a").height();
	vertical_shift = (menu_bar_height - menu_item_height)/2;
	
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
	

	highlight_menu();
	
	//alert($("#a").width())

}
