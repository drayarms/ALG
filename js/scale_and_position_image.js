function scale_and_position_image(image_object, container_object, magnification){
	//console.log("image obj w: "+image_object.width()+" container_object w: "+container_object.width())
	//Position image
	//Magnification is factor to magnify new image if it is too small.
	var x_target = container_object.width()*magnification;
	var x_original = image_object.width();
	var y_target = container_object.height()*magnification;
	var y_original = image_object.height();
	var bg_img_x_ratio = x_target/x_original;
	var bg_img_y_ratio = y_target/y_original;
	var effective_bg_image_ratio = bg_img_x_ratio;
	if(bg_img_y_ratio > effective_bg_image_ratio){
		effective_bg_image_ratio = bg_img_y_ratio;
	}
	//alert("pic w "+x_original+" pic h "+y_original)
	//alert("from func: container w "+x_target+" container h "+y_target+" pic w "+x_original+" pic h "+y_original);	
	
	//var x_new_target = bg_img_x_ratio * x_original;
	//var y_new_target = bg_img_y_ratio * y_original;
	
	var x_new_target = effective_bg_image_ratio * x_original;
	var y_new_target = effective_bg_image_ratio * y_original;	
	
	//console.log("x original "+x_original+" y original "+y_original+" x target "+x_target+" y target "+y_target);
	//console.log("x ratio "+bg_img_x_ratio+" y ratio "+bg_img_y_ratio+" effective ratio "+effective_bg_image_ratio);
	
	//var x_shift = Math.abs(x_new_target - x_target)/2;
	//var y_shift = Math.abs(y_new_target - y_target)/2;

	//console.log("new x "+x_new_target+" new y "+y_new_target);

	image_object.css("width", x_new_target + "px");
	image_object.css("height", y_new_target + "px");
	//alert("new pic w "+image_object.width()+" new pic h "+image_object.height());
	/*image_object.css({
		position: "relative",
		left: x_shift + "px"
	});	*/
	centralize_element_horizontally(image_object);
	/*image_object.css({
		position: "relative",
		top: y_shift + "px"
	});*/
		
}



function insert_image(img, img_container, scale, timeout){
	if(!img.is(":visible")){//Ie display property is none such as on page refresh. On resize, this shouldn't be the case
		img.show();//Must have display set to show in order to have a width a height
		img.css("visibility", "hidden");//But don't make visible yet though, till dimensions have been set
	}

	window.setTimeout(function(){		
		scale_and_position_image(img, img_container, scale);
		img.css("visibility", "visible");
	},timeout);	//Give a sufficient enough delay for image to be rendered first before scaling/positioning	
	
}




function scale_and_position_image1(image_object, container_object, magnification){

	//Position image
	//Magnification is factor to magnify new image if it is too small.
	var x_target = container_object.width()*magnification;
	var x_original = image_object.width();
	var y_target = container_object.height()*magnification;
	var y_original = image_object.height();
	var bg_img_x_ratio = x_target/x_original;
	var bg_img_y_ratio = y_target/y_original;
	var effective_bg_image_ratio = bg_img_x_ratio;
	if(bg_img_y_ratio > effective_bg_image_ratio){
		effective_bg_image_ratio = bg_img_y_ratio;
	}
	alert("pic w "+x_original+" pic h "+y_original)
	//alert("from func: container w "+x_target+" container h "+y_target+" pic w "+x_original+" pic h "+y_original);	
	
	//var x_new_target = bg_img_x_ratio * x_original;
	//var y_new_target = bg_img_y_ratio * y_original;
	
	var x_new_target = effective_bg_image_ratio * x_original;
	var y_new_target = effective_bg_image_ratio * y_original;	
	
	//console.log("x original "+x_original+" y original "+y_original+" x target "+x_target+" y target "+y_target);
	//console.log("x ratio "+bg_img_x_ratio+" y ratio "+bg_img_y_ratio+" effective ratio "+effective_bg_image_ratio);
	
	//var x_shift = Math.abs(x_new_target - x_target)/2;
	//var y_shift = Math.abs(y_new_target - y_target)/2;

	//console.log("new x "+x_new_target+" new y "+y_new_target);

	image_object.css("width", x_new_target + "px");
	image_object.css("height", y_new_target + "px");
	alert("new pic w "+image_object.width()+" new pic h "+image_object.height());
	/*image_object.css({
		position: "relative",
		left: x_shift + "px"
	});	*/
	centralize_element_horizontally(image_object);
	/*image_object.css({
		position: "relative",
		top: y_shift + "px"
	});*/
		
}