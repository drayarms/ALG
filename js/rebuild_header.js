

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



function rebuild_menu_bar_working_version(){
				
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
				$(this).parent().css("width", menu_item_width +"px");
				$(this).parent().css("height", menu_item_height +"px");
				$(this).css("height", menu_item_anchor_height +"px");
				$(this).css("width", menu_item_anchor_width +"px");
				
				//Styling

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
			//$(".menu_icon").css("padding-bottom", "1.1%");
			//$(".menu_icon").css("margin-right", "2%");
			$(".menu_icon i").css("font-size", "600%");
			$(".menu_icon .menu_label").hide();
			
			$(".close_icon").css("padding-bottom", "1.8%");
			//$(".close_icon").css("border", "1px dotted red");
			$(".close_icon i").css("font-size", "600%");
			$(".close_icon .close_label").hide();	
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
		if(is_mobile()){
			//$(".header_banner").css("width", (window_width*1.01) +"px");
			$(".header_banner").css("width", (window_width) +"px");
			//$(".top_logo_box").css("position", "fixed");
			//$(".menu_icon").css("position", "fixed");
			//$(".top_logo_box_logo_circle_parent").css("width", (window_width*1.01) +"px");
			//$(".top_logo_box_logo_circle_parent").css("height", logo_box_height +"px");
			//$(".top_logo_box_logo_circle_parent").css("position", "fixed");
			//$(".top_header").css("position", "fixed");
			//$(".top_header").css("background", "#ffffff");
			//$(".top_header").css("z-index", "+10");
			$(".header_banner").css("position", "fixed");
		}else{
			$(".header_banner").css("width", window_width +"px");
		}
		centralize_element_horizontally($(".header_banner"));
	}
	$(".header_banner").css("height", header_banner_height +"px");
	
	if(is_mobile()){
		$(".header_banner .header_banner_text").css("font-size", "160%");
		$(".header_banner .phone_num").css("font-size", "160%");
	}
}


function rebuild_header(){

	$(".logo_box").each(function(){
		rebuild_logo_box($(this));//In screen
	});

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
