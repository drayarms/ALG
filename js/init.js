const pixel_to_point = 1.3281472327365; //16/12;
var screen_width = window.screen.width;//*window.devicePixelRatio;//Inflexible
if(window.devicePixelRatio == 1.125){//MS Edge
	screen_width = window.screen.width*pixel_to_point;
}
var scroll_width = screen_width/85.001422895136;
var window_width_original = window.innerWidth - scroll_width;// = $(window).width();//*window.devicePixelRatio;//Varies as window is resized
var prev_window_width = window_width_original;
var header_max_width;//Width of header when page is maximized
//var header_inner_fixed_width;
var resize_threshold1;
var resize_threshold2;
var resize_threshold3;
var logo_box_fixed_width;
var logo_box_fixed_height;
var header_banner_fixed_height;
var header_fixed_height;
var header_inner_fixed_height;	
//var specialties_panel_max_width;
//var attorney_panel_combined_children_max_width;
var window_to_header_width_ratio = 0.999;
var header_width_to_header_inner_width_ratio = 0.6;
var	max_bg_img_container_width;
var	max_bg_img_container_height;
var	max_container_to_bg_img_ratio;
var original_bg_img_width;
var original_bg_img_height;
var specialty_text_time = 0;
var specialty_statement_count;
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
const menu_highlight_color = "rgb(38, 115, 38)";//#267326
const menu_highlight_color_hex = "#267326";
var menu_hover_color;




/*
min window  |resize threshold 3| intermediate window B|resize threshold 2| intermediate window A |resize threshold 1| max window
*/