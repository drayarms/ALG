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
	$(".menu_bar").each(function(){
		$(this).css("background-color", theme_gold2);
	});
	//$(".menu_bar").css("background-color", theme_gold2);	
	//$(".menu_bar div").css("background-image", "linear-gradient(to bottom, "+theme_gold1+","+theme_gold2+")");	
}


function highlight_menu(){
    if (window.location.href.indexOf("index") > -1) {
		$(".menu_home").each(function(){
			$(this).find("a").css("color", menu_highlight_color);	
		});
		//$(".menu_home a").css("color", menu_highlight_color);
    }	
}


function rebuild_header_inner1(resize_level, window_width, header_width){

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
	
	
}


function rebuild_header_elements1(resize_level, window_width, header_width){
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





function rebuild_header1(resize_level, window_width){//, header_width, header_inner_width){
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
	
	$(".menu_bar").each(function(){//All menu bar instances
		centralize_element_horizontally($(this));
	});
	rebuild_logo_image();
	$(".logo_image").show();//Can now display since it has been appropriately sized
	//centralize_element_horizontally($(".menu_bar"));
	
	//alert($("#a").width())

}



function rebuild_menu_bar(resize_level, window_width){
	//var menu_bar_height = screen_width*0.03;
	//var menu_bar_width = get_menu_bar_width(resize_level, window_width);
	
	//$(".menu_bar").css("height", menu_bar_height+"px");
	//$(".menu_bar").css("width", menu_bar_width+"px");
				
	$(".menu_bar").each(function(){//All menu bar instances
		var $this = $(this);
		//var menu_item_vertical_shift = menu_bar_height*0.5 - 0.5*menu_item_anchor_original_height;

		//Remove all prev separators
		if($this.find(".menu_item_separator").length > 0){
			$this.find(".menu_item_separator").each(function(){
				$(this).remove();
			});
		}
			
		//Insert separators
		if(resize_level <= 2){
			$(this).css("padding-top", "0px");//Remove any padding from previous window configuration
			var menu_bar_height = screen_width*0.03;
			var menu_bar_width = get_menu_bar_width(resize_level, window_width);
	
			$(".menu_bar").css("height", menu_bar_height+"px");
			$(".menu_bar").css("width", menu_bar_width+"px");
	
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
				menu_items_collective_width += $(this).width();
			});
	
			$this.find(".menu_item_anchor").each(function(){//Iterate each item of each menu bar to set width
				//Dimensioning
				var this_width = $(this).width();//Width of a tag
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
		
		}else if(resize_level == 3){//Min window3
			console.log("window 3")
			var num_menu_items = $this.find(".menu_item").length;
			var num_rows = Math.ceil(num_menu_items/2);
			var row_height = screen_width*0.03;
			var row_width = window_width;
			var menu_bar_height = row_height*num_rows;
			var menu_bar_width = row_width;
			var menu_item_width = (row_width/2)-0;
			var menu_item_height = row_height;
			var menu_item_anchor_height = menu_item_height*0.7;
			var menu_item_anchor_width = menu_item_width*0.95;
			
			$(".menu_bar").css("height", menu_bar_height+"px");
			$(".menu_bar").css("width", menu_bar_width+"px");
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
				centralize_element($(this));
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
		}else{//Min window4
		console.log("window 4")
			
		}
		

	
	});
	
	/*$(".menu_bar").each(function(){//All menu bar instances
		var $this = $(this);
		//$this.css("margin", "auto");

		if(resize_level <= 2){//Max window
			//Restructue menu bar items
			$this.find("div").css("float", "left");
			$this.find("div").css("border", "none");
			//Divy up menu bar proportionately according to size of each element
			var menu_items_collective_width = 0;
			$this.find("div a").each(function(){
				//alert($(this).width())
				menu_items_collective_width += $(this).width();
			});
			//alert(menu_items_collective_width)
	
			//$(".menu_bar div").css("width",  menu_item_width);
			var menu_item_height = $this.find("div a").height();
			var vertical_shift = (menu_bar_height - menu_item_height)/2;
			//alert(vertical_shift)
	
			$this.find("div a").each(function(){
				this_width = $(this).width();
				//parent_width = (this_width/menu_items_collective_width)*menu_bar_width*0.99;//Give a little to avoid overflow
				parent_width = (this_width/menu_items_collective_width)*menu_bar_width*0.99;//Give a little to avoid overflow
				$(this).parent().css("width",  parent_width);

				centralize_element_horizontally($(this));

				$(this).css({
					position: "relative",
					top: vertical_shift + "px"
				});			
			});		
		}else{//Min window
			//Restructure menu bar
			$this.find("div").css("float", "none");//Remove float
			$this.find("div").css("width", menu_bar_item_width +"px");
			$this.find("div").css("height", menu_bar_item_height +"px");
			$this.find("div").css("border", "1px solid"+menu_highlight_color_hex);
			//$(".menu_bar div").css("background-color", "red");
	
			//Centralize menu text in thier respective containers
			$this.find("div a").each(function(){
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
		//centralize_element_horizontally($this);
	});*/
}




function rebuild_logo_box(resize_level, window_width){
	var logo_box_width = logo_box_fixed_width;
	var logo_box_height = logo_box_fixed_height;

	$(".logo_box").css("width", logo_box_width);
	$(".logo_box").css("height", logo_box_height);
	
}	


function rebuild_logo_image(){
	//First vertically align circle
	var logo_box_height = $(".logo_box").height();
	var logo_circle_height = $(".logo_circle").height();
	/*vertical_shift = (logo_box_height - logo_circle_height)/2; 

	$(".logo_circle").css({
		position: "relative",
		top: vertical_shift + "px"
	});*/	

	//Position image
	scale_and_position_image($(".logo_image"), $(".logo_circle"), 1.0);		
}


function assemble_header_elements(resize_level, window_width){
	//var header_height = header_fixed_height;
	//var header_core_height = header_core_fixed_height;	
	var header_banner_width;
	var header_banner_height = $(".logo_box").height();	
	

	
	if(resize_level == 1){//Maintain header inner fixed width
		//header_banner_width = (header_core_width_fixed - $(".logo_box").width());//Give allowance for float
		//menu_bar_width = header_core_width_fixed;
	}
	
	if(resize_level == 2){//Shrink header inner to fit window
		//header_banner_width = window_width*header_core_width_to_window_width_ratio - logo_box_width;
		//menu_bar_width = window_width*header_core_width_to_window_width_ratio;
	}	
	
	if(resize_level > 2){//Collapse header
		//console.log("collapse")
		//header_banner_width = window_width*header_inner_width_to_window_width_ratio;
		//menu_bar_width = header_banner_width;
		
		//menu_bar_item_height = logo_box_height*0.27;
		//menu_bar_item_width = menu_bar_width;
		//var num_menu_items = $(".menu_bar").children().length;
		//menu_bar_height = (menu_bar_item_height*num_menu_items)+(2*num_menu_items);//Extra allowance for border				
	}	
}

function get_menu_bar_width(resize_level, window_width){
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
}

function rebuild_header(resize_level, window_width){
	
	//menu_bar_width = get_menu_bar_width(resize_level, window_width);
	//Changes as window is resized
	
	rebuild_logo_box(resize_level, window_width);
	//menu_bar_height = header_core_fixed_height - $(".logo_box").height();
	rebuild_menu_bar(resize_level, window_width);
	
	assemble_header_elements(resize_level, window_width);

	set_header_colors();
	highlight_menu();
	

	rebuild_logo_image();
	$(".logo_image").show();//Can now display since it has been appropriately sized




}
