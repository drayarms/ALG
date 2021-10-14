
function get_menu_bar_width(fraction_of_menu_bar){
	header_core_width_to_window_width_ratio = header_core_fixed_width/resize_threshold1;
	if(resize_level == 1){//Maintain header inner fixed width
		return header_core_fixed_width*fraction_of_menu_bar;//*1.35;
	}
	
	if(resize_level == 2){//Shrink header inner to fit window
		//console.log(2)
		return (window_width*header_core_width_to_window_width_ratio);
	}	
	
	if(resize_level == 3){//Collapse header
		//console.log(3)
		return window_width;		
	}	
	
	if(resize_level == 4){//Collapse header
		//console.log(4)
		return window_width;		
	}	
}

function rebuild_flap_header_close_icon(){
	var close_icon_width = ($(".flap_header_logo_box_parent").width() - $(".flap_header .logo_box").width())*0.9;//Room for float
	var logo_box_height = $(".logo_box").height()
	var close_icon_height = logo_box_height;
	$(".flap_header_logo_box_parent").css("height", logo_box_height + "px");
	$(".flap_header .logo_box").css("float", "left");
	$(".close_icon").css("width", close_icon_width +"px");//$(".close_icon i").width()*1.8);
	$(".close_icon").css("float", "right");
	$(".close_icon").css("height", close_icon_height +"px");	
}


function rebuild_menu_bar(){		
	$(".menu_bar").each(function(){//All menu bar instances
		var $this = $(this);
		var num_menu_items = $this.find(".menu_item").length;
		
		if(! $this.hasClass("flap_menu_bar")){//All other menu bars except for flap menu bar	
			//var menu_item_vertical_shift = menu_bar_height*0.5 - 0.5*menu_item_anchor_original_height;

			//Remove all prev separators. Prevents multiple seperators from popping up as page is resized
			if($this.find(".menu_item_separator").length > 0){
				$this.find(".menu_item_separator").each(function(){
					$(this).remove();
				});
			}
			
			//Insert separators
			if(resize_level <= 2){
				//$(this).css("padding-top", "0px");//Remove any padding from previous window configuration
				var menu_bar_height = screen_width*0.03;
				var menu_bar_width = get_menu_bar_width(1);
	
				$this.css("height", menu_bar_height+"px");
				$this.css("width", menu_bar_width+"px");
	
				var menu_item_vertical_shift = menu_bar_height*0.5 - 0.5*menu_item_anchor_original_height;
			
				//Remove all prev separators		
				$this.find(".menu_item").each(function(){
					$(this).after("<div class = 'menu_item_separator' style = 'color:"+theme_darkblue1+";font-size:100%'>|</div>");
				});
				var num_separators = $this.find(".menu_item_separator").length;
				//Remove last separator
				$this.find(".menu_item_separator").eq(num_separators - 1).remove();

				var menu_item_separator_collective_width = 0;
				$this.find(".menu_item_separator").each(function(){
					menu_item_separator_collective_width += $(this).width();//Width of a separator
					$(this).css({
						position: "relative",
						top: menu_item_vertical_shift +"px"
					});	
				});

				//Divy up menu bar proportionately according to size of each element
				var menu_items_collective_width = 0;
				$this.find(".menu_item_anchor").each(function(){//Iterate each item of each menu bar to get width
					var txt = $(this).text();
					var txt_len = txt.length				
					menu_items_collective_width += txt_len;//$(this).width();
				});
	
				$this.find(".menu_item_anchor").each(function(index){//Iterate each item of each menu bar to set width
					//Dimensioning
					var txt = $(this).text();
					var txt_len = txt.length
					var this_width = txt_len; //$(this).width();//Width of a tag
					var parent_width = (this_width/menu_items_collective_width)*(menu_bar_width - menu_item_separator_collective_width)*0.996;//Give a little to avoid overflow
					$(this).parent().css("width", parent_width +"px");
					//Stretch the anchor to cover parent w
					$(this).css("width", parent_width +"px");
				//});	
			
					//Styling
					$(this).css("border", "none");//Remove any borders from prev window configs
		
				//Stretch the anchor to cover entire menu bar
				//$this.find(".menu_item_anchor").each(function(){
					$(this).parent().css("height", menu_bar_height +"px");
					$(this).parent().css("float", "left");
					//$(this).css("height", (menu_bar_height-menu_item_separator_collective_width) +"px");
					$(this).css("height", menu_bar_height +"px");
					//Move the text
					$(this).css("padding-top", menu_item_vertical_shift+"px");
				
					//Positioning
					$(this).parent().css({
						position: "relative",
						top: "0px"
					});	
					$(this).parent().css({
						position: "relative",
						left: "0px"
					});	
					$(this).css({
						position: "relative",
						top: "0px"
					});	
					$(this).css({
						position: "relative",
						left: "0px"
					});			
				});		
		
			}else if(resize_level >= 3){//Min window3
				//console.log("window 3")
				//var num_menu_items = $this.find(".menu_item").length;
				var num_rows = Math.ceil(num_menu_items/2);
				var row_height = screen_width*0.03;;				
				var row_width = window_width;
				var menu_bar_height = row_height*num_rows + 20;
				var menu_bar_width = row_width;
				var menu_item_width = (row_width/2)-0;
				var menu_item_height = row_height;
				var menu_item_anchor_height = menu_item_height*0.7;
				var menu_item_anchor_width = menu_item_width*0.95;
			
				$this.css("height", menu_bar_height+"px");
				$this.css("width", menu_bar_width+"px");
			
				$this.find(".menu_item_anchor").each(function(index){//Iterate each item of each menu bar to get width
					//Dimensioning
					$(this).css("padding-top", "0px");//Remove any padding from previous window configuration
					$(this).parent().css("width", menu_item_width +"px");
					$(this).parent().css("height", row_height +"px");
					$(this).parent().css("float", "left");
					$(this).css("height", menu_item_anchor_height +"px");
					$(this).css("width", menu_item_anchor_width +"px");
				
					//Styling
					$(this).css("border", "1px solid #ffffff");
				
					//Positioning
					//Move both sides to extremes
					var aggregate_gap = 2*(menu_item_width - menu_item_anchor_width);
					var left_cells_shift = 0;
					var right_cells_shift = menu_item_width - menu_item_anchor_width;
					var fraction_of_gap_shift = 0.38;//Not to exceed 0.5. 0 means no shift at all. 0.5 means no middle
					//Now center both sides
					left_cells_shift += aggregate_gap*fraction_of_gap_shift;
					right_cells_shift -= aggregate_gap*fraction_of_gap_shift;
					
					if(index % 2 == 0){//Left cells
						//$(this).css("float", "left");
						$(this).css({
							position: "relative",
							left: left_cells_shift+"px"
						});							
					}else{//Right cells
						//$(this).css("float", "right");
						$(this).css({
							position: "relative",
							left: right_cells_shift+"px"
						});							
					}
					centralize_element_vertically($(this));
					var menu_item_vertical_shift = menu_item_anchor_height*0.5 - 0.5*menu_item_anchor_original_height;
					$(this).css("padding-top", menu_item_vertical_shift+"px");				
				});			
			}


		}else{//Flap menu bar
			
			//alert("screen w "+screen_width+" window w "+window_width+" screen h "+screen_height)
			var browser_height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
			var menu_width = $(".flap_header").width();//window_width;
			var menu_height = screen_height - logo_box_fixed_height;//browser_height - logo_box_fixed_height;
			if(is_mobile()){
				menu_height *= 2.2;
				$(".menu_item_anchor").css("font-size", "150%");
			}
			var menu_item_width = menu_width*1.05;
			var menu_item_height = (menu_height/num_menu_items)-0;//To account for bottom border
			var menu_item_anchor_width = menu_item_width;
			var menu_item_anchor_height = menu_item_height;

			$this.css("height", menu_height +"px");

			$this.find(".menu_item_anchor").each(function(index){//Iterate each item of each menu bar to get width
				//Dimensioning
				$(this).parent().css("width", menu_item_width +"px");
				$(this).parent().css("height", menu_item_height +"px");
				$(this).css("height", menu_item_anchor_height +"px");
				$(this).css("width", menu_item_anchor_width +"px");
				
				//Remove border from first item
				if(index == 0){
					$(this).css("border", "none");
				}
				
			
				var menu_item_vertical_shift = menu_item_anchor_height*0.5 - 0.5*menu_item_anchor_original_height;
				$(this).css("padding-top", menu_item_vertical_shift+"px");	
			});
		}
		
	});
	
}


function rebuild_logo_box(e){
	if(e.is(":visible")){//Logo box display is not none
		//alert("visible")

		var logo_box_width = logo_box_fixed_width;
		if(is_mobile()){
			logo_box_width = logo_box_fixed_width*5;
		}
		var logo_box_height = logo_box_fixed_height;
		if(is_mobile()){
			logo_box_height = logo_box_fixed_height*5;
		}		
		var logo_circle_width = logo_box_width*0.9;
		var logo_circle_height = logo_box_height*0.9;

		e.css("width", logo_box_width);
		e.css("height", logo_box_height);	
		e.find(".logo_circle").css("width", logo_circle_width);
		e.find(".logo_circle").css("height", logo_circle_height);	

		centralize_element(e.find(".logo_circle"));
		//e.find(".logo_image");
		//window.setTimeout(function(){
			//scale_and_position_image(e.find(".logo_image"), e.find(".logo_circle"), 1.0);
		//}, 100);//Give a sufficient enough delay for image to be rendered first before scaling/positioning				
		insert_image(e.find(".logo_image"), e.find(".logo_circle"), 1, image_load_wait_time);
	}
}

function animate_right_fixed(e, fixed_position, duration){
	var interval = 1;//Pick an interval that is likely to be slower than execution of function
	var animation_speed = interval*fixed_position/duration;//AMount by which position must move each milisecond
	var ms = 0;
	

	/*e.css({
		position: "fixed",
		left:  "-500px"
	});	*/


	function payload(){
		//console.log(animation_speed)
		e.css({
			position: "fixed",
			left: (-1*animation_speed)+"px"
		});			
	}
	
	function stop_timer(){
		window.clearInterval(timer);
	}
	
	var timer = window.setInterval(function(){
		//console.log(ms); 
		payload();
		if(ms == duration){
			stop_timer();
		}
		ms++;
	}, interval);
}

function show_screen(){
	$(".screen").show();
	$(".flap_header_parent").show();
	
	//var flap_header_parent_width = $(".flap_header_parent").width();
	var flap_header_width = $(".flap_header").width();
	var flap_header_shift = flap_header_width;
	//alert(flap_header_parent_width)
	//alert(flap_header_width)
	//Default position of flap header parent should be right shifted by width of flap header
	$(".flap_header_parent").css({
		position: "fixed",
		left: flap_header_shift +"px"
	});		

	//Rebuild now that it is rendered visible(display not none)
	rebuild_logo_box($(".flap_header_logo_box"));
	rebuild_flap_header_close_icon()
	rebuild_menu_bar();
	$("body").css("overflow-y", "hidden");	
	
	window.setTimeout(animate_right_fixed, 1, $(".flap_header_parent"), flap_header_shift, 2000);
	
}

function remove_screen(){
	//$(".top_menu_bar").show();
	$(".screen").hide();
	$(".flap_header_parent").hide();
	$("body").css("overflow-y", "visible");		
}
