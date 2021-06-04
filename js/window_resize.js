//$(window).on('resize', function(){
/*$(window).resize(function(){	
	//Set homepage background image width
	set_homepage_background_image_dimensions(screen_width, window_width);		
});*/

var onresize = function(e) {
	current_window_width = e.target.innerWidth - scroll_width;
	//console.log("current window w "+current_window_width);
	//console.log("window width "+window_width);
	//console.log("target width "+e.target.innerWidth);//outerWidth);
	set_homepage_background_image_dimensions(current_window_width);//, $(".header").width());//Same dimension as window width
	
	//header_width_to_window_width_ratio = $(".header").width()/$(".body").width();
	//console.log(header_width_to_window_width_ratio);
	//console.log("b4 "+current_window_width);
	//console.log("prev "+(prev_window_width-scroll_width)+" curr "+(e.target.innerWidth - scroll_width))

	header_width = current_window_width*window_to_header_width_ratio;
	//console.log("header w "+header_width);
	//console.log("from resize header inner fixed w "+header_inner_fixed_width);
	rebuild_elements(prev_window_width, current_window_width, header_width);
	prev_window_width = current_window_width;
	//console.log("after "+current_window_width);
}
window.addEventListener("resize", onresize);