
function rebuild_logo_image1(){
	//First vertically align circle
	logo_box_height = $(".logo_box").height();
	logo_circle_height = $(".logo_circle").height();
	vertical_shift = (logo_box_height - logo_circle_height)/2; 

	$(".logo_circle").css({
		position: "relative",
		top: vertical_shift + "px"
	});	

	//Position image
	scale_and_position_image($(".logo_image"), $(".logo_circle"), 1.0);
	/*const magnification = 1.4;//Factor to magnify new image if it is too small.
	var xi = $(".logo_circle").width()*magnification;
	var xo = $(".logo_image").width();
	var yi = $(".logo_cicle").height()*magnification;
	var yo = $(".logo_image").height();
	var bg_img_x_ratio = xi/xo;
	var bg_img_y_ratio = yi/yo;
	var effective_bg_image_ratio = bg_img_x_ratio;
	if(bg_img_y_ratio > effective_bg_image_ratio){
		effective_bg_image_ratio = bg_img_y_ratio;
	}
	
	
	var x_new = bg_img_x_ratio * xo;
	var y_new = bg_img_y_ratio * yo;
	
	var x_shift = Math.abs(x_new - xi)/2;
	var y_shift = Math.abs(y_new - yi)/2;

	$(".logo_image").css("width", x_new + "px");
	$(".logo_image").css("height", y_new + "px");
	$(".logo_image").css({
		position: "relative",
		left: x_shift + "px"
	});	
	$(".logo_image").css({
		position: "relative",
		top: y_shift + "px"
	});	*/
		
}


function set_homepage_background_image_dimensions(window_width){
	//console.log(window_width)
	//Set dimensions for homepage background container
	//var homepage_width = window_width*1.05;
	//var homepage_height = window_width*0.65;//0.6;
	var homepage_width = window_width*1.05;
	var homepage_height = window_width*0.65;//0.6;	
	$("#homepage_background_container").css("width", homepage_width + "px");
	$("#homepage_background_container").css("margin-left", ((window_width-homepage_width)/2)+"px");
	$("#homepage_background_container").css("height", homepage_height + "px");
	
	//Position image
	scale_and_position_image($(".homepage_background_image"), $("#homepage_background_container"), 1);
	/*var xi = $("#homepage_background_container").width();
	var xo = $(".homepage_background_image").width();
	var yi = $("#homepage_background_container").height();
	var yo = $(".homepage_background_image").height();
	var bg_img_x_ratio = xi/xo;
	var bg_img_y_ratio = yi/yo;
	var effective_bg_image_ratio = bg_img_x_ratio;
	if(bg_img_y_ratio > effective_bg_image_ratio){
		effective_bg_image_ratio = bg_img_y_ratio;
	}
	var x_new = bg_img_x_ratio * xo;
	var y_new = bg_img_y_ratio * yo;
	
	var x_shift = Math.abs(x_new - xi)/2;
	var y_shift = Math.abs(y_new - yi)/2;
	
	//Set homepage background image width
	//background_image_width = screen_width;// + window_width*0.3;
	//background_image_height = $("#homepage_background_container").height() + 3;//Small allowance
	//$(".homepage_background_image").css("width", background_image_width + "px");
	//$(".homepage_background_image").css("height", background_image_height + "px");
	
	//Set homepage background image width as well as displacement
	$(".homepage_background_image").css("width", x_new + "px");
	$(".homepage_background_image").css("height", y_new + "px");
	$(".homepage_background_image").css({
		position: "relative",
		left: x_shift + "px"
	});	
	$(".homepage_background_image").css({
		position: "relative",
		top: y_shift + "px"
	});	*/
	
	
	//Display pic
	$(".homepage_background_image").fadeIn(1500);
}