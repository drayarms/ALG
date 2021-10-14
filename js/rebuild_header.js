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
	//console.log("setting colors")
	$(".header_banner").css("background-color", theme_darkblue1);//For browsers that don't support gradient
	$(".header_banner").css("background-image", "linear-gradient(to right, "+theme_darkblue1+","+theme_darkblue2+")");
	$(".menu_bar").each(function(){
		$(this).css("background-color", theme_gold2);
	});
	//$(".menu_bar").css("background-color", theme_gold2);	
	//$(".menu_bar div").css("background-image", "linear-gradient(to bottom, "+theme_gold1+","+theme_gold2+")");	
	$(".top_header").each(function(){
		if($(this).hasClass("homepage_top_header")){
			$(".top_header").css("background-color", "rgba(255, 255, 255, 0)");//Transparent
		}else{
			if(resize_level == 4){
				$(".top_header").css("background-color", "rgba(255, 255, 255, 0)");//Transparent
				$(".top_header").css("background-image", "none");
			}else{
				$(".top_header").css("background-image", "linear-gradient(to right, "+theme_darkblue1+","+theme_darkblue2+")");
				$(".top_header").css("background-color", "none");
			}
		}		
	});

}


function highlight_menu(){
    /*if (window.location.href.indexOf("index") > -1) {
		$(".menu_home").each(function(){
			$(this).find("a").css("color", menu_highlight_color);	
		});
		//$(".menu_home a").css("color", menu_highlight_color);
    }*/	
	function highlight_menu_item($this, url_check, class_name){
		//console.log(highlighted)
		//if(!highlighted && (url_check > -1) && $this.hasClass(class_name)){
		if(!$this.hasClass("highlighted") && (url_check > -1 || url_check == "/") && $this.hasClass(class_name)){	
			$this.find("a").css("color", menu_highlight_color);
			//highlighted = true;
			$this.addClass("highlighted");
		}	
	}
	
	$(".menu_item").each(function(){
		//var highlighted = false;
		/*if(!highlighted && (window.location.href.indexOf("index") > -1 || window.location.href.indexOf("home") > -1) && $(this).hasClass("menu_home")){
			$(this).find("a").css("color", menu_highlight_color);
			highlighted = true;
		}else{
			$(this).find("a").css("color", theme_darkblue1);
		}	
		
		if(!highlighted && (window.location.href.indexOf("attorny_profiles") > -1) && $(this).hasClass("attorney_profiles")){
			$(this).find("a").css("color", menu_highlight_color);
			highlighted = true;
		}else{
			$(this).find("a").css("color", theme_darkblue1);
		}	*/	
		//window.location.pathname == "/"
		highlight_menu_item($(this), window.location.pathname, "menu_home");
		highlight_menu_item($(this), window.location.href.indexOf("index"), "menu_home");
		highlight_menu_item($(this), window.location.href.indexOf("about-us"), "menu_about_us");	
		highlight_menu_item($(this), window.location.href.indexOf("attorney-profiles"), "menu_attorney_profiles");
		highlight_menu_item($(this), window.location.href.indexOf("practice-areas"), "menu_practice_areas");
		highlight_menu_item($(this), window.location.href.indexOf("blog"), "menu_blog");
		highlight_menu_item($(this), window.location.href.indexOf("faqs"), "menu_faqs");
		highlight_menu_item($(this), window.location.href.indexOf("testimonials"), "menu_testimonials");
		highlight_menu_item($(this), window.location.href.indexOf("contact"), "menu_contact");
		
		if(!$(this).hasClass("highlighted")){
			$(this).find("a").css("color", theme_darkblue1);
		}
	});
}


/*function rebuild_header_inner1(resize_level, window_width, header_width){

	var header_inner_width = ($(".logo_box").width() + $(".header_banner").width())+1;//Give some allowance for float
	var header_inner_height = $(".logo_box").height() + $(".header_menu_bar").height();
	var header_width = window_width*window_to_header_width_ratio;
	var header_height = header_inner_height;
	
	//console.log("header banner height "+$(".header_banner").height()+" menu bar height: "+$(".header_menu_bar").height());
	$(".inner_header").css("width", header_inner_width + "px");
	$(".inner_header").css("height", header_inner_height+"px");//("height", header_inner_height);
	//centralize_element_horizontally($(".inner_header"));
	//$(".inner_header").css("margin-left", ((header_width-header_inner_width)/2)+"px");
	
	$(".header").css("width", header_width + "px");
	$(".header").css("height", header_height+"px");
	//$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	//centralize_element_horizontally($(".header"));
	
	
}*/


/*function rebuild_header_elements1(resize_level, window_width, header_width){
	//Header elements(logo box and header banner)
	//console.log(window_width);
	//The max header inner to window width ratio is gotten by using the  fixed header inner width
	//and the max window width for intermediate window A(resize_threshold1)	
	header_core_width_to_window_width_ratio = header_core_width_fixed/resize_threshold1;
	
	var logo_box_width = logo_box_fixed_width;
	var logo_box_height = logo_box_fixed_height;
	var header_banner_width;
	var header_banner_height = logo_box_height;
	menu_bar_height = header_fixed_height - logo_box_height;
	//var menu_bar_width; moved to init
	//var menu_bar_height; moved to init
	
	
	if(resize_level == 1){//Maintain header inner fixed width
		header_banner_width = (header_core_width_fixed - logo_box_width);//Give allowance for float
		menu_bar_width = header_core_width_fixed;
	}
	
	if(resize_level == 2){//Shrink header inner to fit window
		header_banner_width = window_width*header_core_width_to_window_width_ratio - logo_box_width;
		menu_bar_width = window_width*header_core_width_to_window_width_ratio;
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
	//$(".menu_bar").css("float", "left");
	
	

	//if(resize_level <= 2){
	//}else{
		//var header_height = logo_box_height + header_banner_height + menu_bar_height;
		//var header_inner_height = header_height;

		//$(".header").css("width", header_width + "px");
		//$(".header").css("min-height", "0px");//$(".header").css("height", header_height + "px");
		//$(".header").css("margin-left", ((window_width-header_width)/2)+"px");
	
		//$(".inner_header").css("width", window_width);
		//$(".inner_header").css("height", "1000px");//("height", header_inner_height + "px");
		
		//centralize_element_horizontally($(".inner_header"));
	//}
	
	
}	*/
	

/*function rebuild_menu_bar(resize_level, window_width, header_width){
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
}*/



/*function rebuild_header1(){//, header_width, header_inner_width){
	//Builds elements in header div whenever page is refreshed of resized
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
	
	$(".menu_bar").each(function(){//All menu bar instances
		centralize_element_horizontally($(this));
	});
	rebuild_logo_image();
	$(".logo_image").show();//Can now display since it has been appropriately sized
	//centralize_element_horizontally($(".menu_bar"));
	
	//alert($("#a").width())

}*/



function rebuild_menu_bar_working_version(){
	//var menu_bar_height = screen_width*0.03;
	//var menu_bar_width = get_menu_bar_width(resize_level, window_width);
	
	//$(".menu_bar").css("height", menu_bar_height+"px");
	//$(".menu_bar").css("width", menu_bar_width+"px");
				
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
				var menu_bar_width = get_menu_bar_width(resize_level, window_width);
	
				$this.css("height", menu_bar_height+"px");
				$this.css("width", menu_bar_width+"px");
	
				var menu_item_vertical_shift = menu_bar_height*0.5 - 0.5*menu_item_anchor_original_height;
			
				//Remove all prev separators
				//if($this.find(".menu_item_separator").length > 0){
					//$this.find(".menu_item_separator").each(function(){
						//$(this).remove();
					//});
				//}
			
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
				console.log("window 3")
				//var num_menu_items = $this.find(".menu_item").length;
				var num_rows = Math.ceil(num_menu_items/2);
				var row_height = screen_width*0.03;
				var row_width = window_width;
				var menu_bar_height = row_height*num_rows + 20;
				var menu_bar_width = row_width;
				var menu_item_width = (row_width/2)-0;
				var menu_item_height = row_height;
				var menu_item_anchor_height = menu_item_height*0.7;
				var menu_item_anchor_width = menu_item_width*0.95;
			
				$this.css("height", menu_bar_height+"px");
				$this.css("width", menu_bar_width+"px");
				//alert(num_menu_items)
				//alert(num_rows)
				/*for(var i = 0; i < num_rows; i++){
					$(".menu_bar").append("<div class = 'menu_bar_row' style = 'height:"+row_height+"px; width:"+row_width+"px;border:1px dotted white;'></div>");
				}*/
			
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
					//var aggregate_gap = 2*(menu_item_width - menu_item_anchor_width);
					//var left_cells_shift = aggregate_gap * 1;//Can vary the factor 
					//var right_cells_shift = aggregate_gap - left_cells_shift;
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
					//alert(index+" row height "+row_height+" position "+((Math.floor(index/2))*row_height))
					/*$(this).parent().css({
						position: "relative",
						top:  ((Math.floor(index/2))*row_height)*0+"px"
					});	*/
				
					/*var left_shift = 0;
					//if(index % 2 != 0){
						//left_shift = menu_item_width;
					//}
					//alert(index+")menu bar width"+menu_bar_width+" row width "+row_width+" left shift "+left_shift)
					$(this).parent().css({
						position: "relative",
						left:  left_shift +"px"
					});	*/				
				});			
			}

			/*else{//Min window4
				console.log("window 4")
				var menu_width = window_width/3;
				var menu_height = window_width*0.65;
				var menu_item_width = menu_width;
				var menu_item_height = (menu_height/num_menu_items)-1;//To account for bottom border
				var menu_item_anchor_width = menu_item_width;
				var menu_item_anchor_height = menu_item_height;
			
				$this.css("width", menu_width +"px");
				$this.css("height", menu_height +"px");

				$this.find(".menu_item_anchor").each(function(index){//Iterate each item of each menu bar to get width
					//Dimensioning
					$(this).css("padding-top", "0px");//Remove any padding from previous window configuration
					$(this).parent().css("float", "none");//Remove float
					$(this).parent().css("width", menu_item_width +"px");
					$(this).parent().css("height", menu_item_height +"px");
					$(this).css("height", menu_item_anchor_height +"px");
					$(this).css("width", menu_item_anchor_width +"px");
				
					//Styling
					$(this).css("border", "none");
					$(this).css("border-bottom", "1px solid #ffffff");
				
					//Positioning
					//centralize_element($(this));
					$(this).css({
						position: "relative",
						top: "0px"
					});	
					$(this).css({
						position: "relative",
						left: "0px"
					});				
					var menu_item_vertical_shift = menu_item_anchor_height*0.5 - 0.5*menu_item_anchor_original_height;
					$(this).css("padding-top", menu_item_vertical_shift+"px");			
				});						
			}*/
		}else{//Flap menu bar
			
			//alert("screen w "+screen_width+" window w "+window_width+" screen h "+screen_height)
			var browser_height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
			var menu_width = $(".flap_header").width();//window_width;
			var menu_height = browser_height - logo_box_fixed_height;
			var menu_item_width = menu_width;
			var menu_item_height = (menu_height/num_menu_items)-0;//To account for bottom border
			var menu_item_anchor_width = menu_item_width;
			var menu_item_anchor_height = menu_item_height;


			//$this.css("width", menu_width +"px");
			$this.css("height", menu_height +"px");
			//$this.css("border", "3px solid orange")


			$this.find(".menu_item_anchor").each(function(index){//Iterate each item of each menu bar to get width
				//Dimensioning
				//$(this).css("padding-top", "0px");//Remove any padding from previous window configuration
				//$(this).parent().css("float", "none");//Remove float
				$(this).parent().css("width", menu_item_width +"px");
				$(this).parent().css("height", menu_item_height +"px");
				$(this).css("height", menu_item_anchor_height +"px");
				$(this).css("width", menu_item_anchor_width +"px");
				
				//Styling
				//$(this).css("border", "none");
				//$(this).css("border-bottom", "1px solid #ffffff");
				
				//Remove border from first item
				if(index == 0){
					$(this).css("border", "none");
				}
				
				//Positioning
				//centralize_element($(this));
				/*$(this).css({
					position: "relative",
					top: "0px"
				});	
				$(this).css({
					position: "relative",
					left: "0px"
				});*/				
				var menu_item_vertical_shift = menu_item_anchor_height*0.5 - 0.5*menu_item_anchor_original_height;
				$(this).css("padding-top", menu_item_vertical_shift+"px");	
			});
		}
		
	});
	
}



/*function rebuild_logo_box1(){
	var logo_box_width = logo_box_fixed_width;
	var logo_box_height = logo_box_fixed_height;
	var logo_circle_width = logo_box_width*0.9;
	var logo_circle_height = logo_box_height*0.9;

	$(".logo_box").css("width", logo_box_width);
	$(".logo_box").css("height", logo_box_height);	
	$(".logo_circle").css("width", logo_circle_width);
	$(".logo_circle").css("height", logo_circle_height);		
	
	//alert("logo box h" +$(".logo_box").height())
	//alert("logo circle h" +$(".logo_circle").height())
	centralize_element($(".logo_circle"));
	//scale_and_position_image($(".logo_image"), $(".logo_circle"), 1.0);		
}	


function rebuild_logo_box2(){
//alert("img w " +$(".logo_image").width()+ " img h " +$(".logo_image").height());
//alert("1img w " +$(".flap_header_logo_box .logo_image").width()+ " 1img h " +$(".flap_header_logo_box .logo_image").height());	
	$(".logo_box").each(function(){
		var $this = $(this);
		
		var logo_box_width = logo_box_fixed_width;
		var logo_box_height = logo_box_fixed_height;
		var logo_circle_width = logo_box_width*0.9;
		var logo_circle_height = logo_box_height*0.9;

		$this.css("width", logo_box_width);
		$this.css("height", logo_box_height);	
		$this.find(".logo_circle").css("width", logo_circle_width);
		$this.find(".logo_circle").css("height", logo_circle_height);	
//alert("img src "+$this.find(".logo_image").attr("src"));
//alert("cir w " +$this.find(".logo_circle").width()+ " cir h " +$this.find(".logo_circle").height());		
//alert("img w " +$this.find(".logo_image").width()+ " img h " +$this.find(".logo_image").height());	
		//alert("logo box h" +$(".logo_box").height())
		//alert("logo circle h" +$(".logo_circle").height())
		centralize_element($this.find(".logo_circle"));
		scale_and_position_image($this.find(".logo_image"), $this.find(".logo_circle"), 1.0);	
	});
}*/


/*function rebuild_logo_box(e){
	if(e.is(":visible")){//Logo box display is not none
		//alert("visible")

		var logo_box_width = logo_box_fixed_width;
		var logo_box_height = logo_box_fixed_height;
		var logo_circle_width = logo_box_width*0.9;
		var logo_circle_height = logo_box_height*0.9;

		e.css("width", logo_box_width);
		e.css("height", logo_box_height);	
		e.find(".logo_circle").css("width", logo_circle_width);
		e.find(".logo_circle").css("height", logo_circle_height);	

		centralize_element(e.find(".logo_circle"));
		scale_and_position_image(e.find(".logo_image"), e.find(".logo_circle"), 1.0);	
	}
}*/


/*function rebuild_logo_image(){
	//First vertically align circle
	var logo_box_height = $(".logo_box").height();
	var logo_circle_height = $(".logo_circle").height();
	//vertical_shift = (logo_box_height - logo_circle_height)/2; 

	//$(".logo_circle").css({
		//position: "relative",
		//top: vertical_shift + "px"
	//});	

	//Position image
	centralize_element_vertically($(".logo_circle"));
	scale_and_position_image($(".logo_image"), $(".logo_circle"), 1.0);		
}*/


/*function assemble_header_elements1(){
	//var header_height = header_fixed_height;
	//var header_core_height = header_core_fixed_height;
	
	var logo_box_width = $(".logo_box").width();
	var logo_box_height = $(".logo_box").height();
	var menu_bar_width = $(".menu_bar").width();
	var menu_bar_height = $(".menu_bar").height();
	var header_banner_width;
	var header_banner_height = logo_box_height;
	var header_core_width;
	var header_core_height;	
	var header_width = window_width;	
	var top_header_height;
	var bottom_header_height;


	if(resize_level <= 2){
		$(".header_banner").css("text-align", "right");
		//$(".header_banner").css("padding-right", "30px");
		//$(".header_banner").css("padding-top", "5px");
	}else{
		$(".header_banner").css("text-align", "center");
	}
	//if(resize_level == 1){//Maintain header inner fixed width
		
	//}
	
	//if(resize_level == 2){//Shrink header inner to fit window
		//header_banner_width = window_width*header_core_width_to_window_width_ratio - logo_box_width;
		//menu_bar_width = window_width*header_core_width_to_window_width_ratio;
	//}

	//Positioning
	//Case of header banner
	if(resize_level <= 3){
		header_banner_width = menu_bar_width - logo_box_width;
		header_core_width = menu_bar_width;
		header_core_height = logo_box_height + menu_bar_height;
	}else{
		header_banner_width = window_width;
		header_core_width = window_width;
		header_core_height = logo_box_height + header_banner_height;
	}	
	
	if(resize_level <= 2){//1 Maintain header inner fixed width 2 Shrink header inner to fit window 
		top_header_height = header_core_height * top_header_to_header_core_height_ratio;
		bottom_header_height = header_core_height;
		

			
	}
	
	if(resize_level == 3){//Collapse header
		top_header_height = header_core_height;
		bottom_header_height = header_core_height;
		//console.log("collapse")
		//header_banner_width = window_width*header_inner_width_to_window_width_ratio;
		//menu_bar_width = header_banner_width;
		
		//menu_bar_item_height = logo_box_height*0.27;
		//menu_bar_item_width = menu_bar_width;
		//var num_menu_items = $(".menu_bar").children().length;
		//menu_bar_height = (menu_bar_item_height*num_menu_items)+(2*num_menu_items);//Extra allowance for border				
	}	
	
	if(resize_level == 4){
		top_header_height = header_core_height
		bottom_header_height = header_core_height;
	}


	$(".menu_icon").css("width", $(".menu_icon i").width()*1.6);
	
	$(".header").css("width", header_width+"px");
	$(".bottom_header").css("width", header_width+"px");
	$(".top_header").css("height", top_header_height+"px");
	$(".bottom_header").css("height", bottom_header_height+"px");
	$(".header_core").css("width", header_core_width+"px");
	$(".header_core").css("height", header_core_height+"px");	
	$(".top_header_core").css({
		position: "relative",
		top: (top_header_height - header_core_height)+"px"
	});	
	$(".header_banner").css("width", header_banner_width+"px");
	$(".header_banner").css("height", header_banner_height+"px");
	
	
//alert($(".bottom_header").width())
	//Dimensioning
	if(resize_level <= 2){//1 Maintain header inner fixed width 2 Shrink header inner to fit window 
		$(".menu_icon").hide();
		$(".logo_box").css("float", "left");			
		centralize_element_horizontally($(".bottom_logo_box"));	
		
		
	}
	if(resize_level == 3){//Collapse header
		$(".menu_icon").hide();
		$(".logo_box").css("float", "left");
		
		$(".header_banner").css({
			position: "relative",
			top: "0px"
		});			
	}	
	
	if(resize_level == 4){	
		$(".logo_box").css("float", "left");
		$(".menu_icon").show();
		$(".menu_icon").css("float", "right");
		
		$(".header_banner").css({
			position: "relative",
			top: logo_box_height+"px"
		});			
		/////////////////////////////
		//////////////////
		/////////
		////
		//
		///
		///
		///
	}
	
	
	//Case of header banner
	if(resize_level <= 3){
		$(".header_banner").css("float", "left");
		$(".top_menu_bar").show();
	}else{
		$(".header_banner").css("float", "none");
		$(".top_menu_bar").hide();
	}

}*/


function assemble_header_elements(){
	var header_core_width = $(".top_menu_bar").width();
	var logo_box_height = $(".top_logo_box").height();
	//var bottom_header_core_width = $(".bottom_menu_bar").width();
	
	//Header core
	$(".header_core").css("width", header_core_width +"px");
	
	//Header
	if(resize_level <= 2){
		//$(".top_header").css("margin-top", "3%");
		$(".homepage_top_header").css("margin-top", "3%");
	}else{
		//$(".top_header").css("margin-top", "0%");
		$(".homepage_top_header").css("margin-top", "0%");
	}
	
	//Logo boxes
	$(".top_logo_box").css("float", "left");
	$(".header_banner").css("float", "left");
	centralize_element_horizontally($(".bottom_logo_box"));
	
	//Menu_bar
	centralize_element_horizontally($(".top_menu_bar"));
	centralize_element_horizontally($(".bottom_menu_bar"));
	
	//Menu icon
	//console.log(resize_level)
	if(resize_level <= 3){
		$(".menu_icon").hide();
		$(".top_menu_bar").show();
	}else{
		if(is_mobile()){
			$(".menu_icon").css("width", $(".menu_icon i").width()*2.5);
		}else{
			$(".menu_icon").css("width", $(".menu_icon i").width()*1.8);
		}
		$(".menu_icon").css("float", "right");
		if(is_mobile()){
			$(".menu_icon").css("height", (logo_box_height*1)+"px");
		}else{
			$(".menu_icon").css("height", logo_box_height+"px");
		}
		$(".menu_icon").show();
		$(".top_menu_bar").hide();
	}
	
	//Close icon of flap header
	rebuild_flap_header_close_icon();
		
	//Remove screen and flap header
	if(resize_level <= 3){
		remove_screen();
	}
}

/*function get_menu_bar_width(){
	header_core_width_to_window_width_ratio = header_core_fixed_width/resize_threshold1;
	if(resize_level == 1){//Maintain header inner fixed width
		return header_core_fixed_width;
	}
	
	if(resize_level == 2){//Shrink header inner to fit window
		//console.log(2)
		return window_width*header_core_width_to_window_width_ratio;
	}	
	
	if(resize_level == 3){//Collapse header
		//console.log(3)
		return window_width;		
	}	
	
	if(resize_level == 4){//Collapse header
		//console.log(4)
		return window_width;		
	}	
}*/


function rebuild_header_banner(){
	var logo_box_width = $(".top_logo_box").width();
	var logo_box_height = $(".top_logo_box").height();
	var menu_bar_width = $(".top_menu_bar").width();
	var menu_bar_height = $(".top_menu_bar").height();
	var header_banner_width = menu_bar_width - logo_box_width;
	var header_banner_height = logo_box_height;
	
	if(resize_level <= 3){
		$(".header_banner").css("width", header_banner_width +"px");
	}else{
		$(".header_banner").css("width", window_width +"px");
	}
	$(".header_banner").css("height", header_banner_height +"px");
	
	if(is_mobile()){
		$(".header_banner .header_banner_text").css("font-size", "160%");
		$(".header_banner .phone_num").css("font-size", "160%");
	}
}


function rebuild_header(){
	//console.log("rebuilding header")
	//menu_bar_width = get_menu_bar_width(resize_level, window_width);
	//Changes as window is resized
	
	$(".logo_box").each(function(){
		rebuild_logo_box($(this));//In screen
	});
	//rebuild_logo_box(resize_level, window_width);
	//rebuild_logo_image();
	$(".logo_image").show();//Can now display since it has been appropriately sized

	if(is_mobile()){
		$(".bottom_header").hide();
	}
	
	//menu_bar_height = header_core_fixed_height - $(".logo_box").height();
	rebuild_menu_bar();
	rebuild_header_banner();//Some properties based on logo box's and menu bar's. So build last
	
	assemble_header_elements();

	set_header_colors();
	highlight_menu();
	

}
