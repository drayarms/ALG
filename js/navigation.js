
$(document).ready(function(){
/*
	//$("#sidebar-nav li").hover(function(){//Hide/show content of list
	$(".sidebar-nav-list").hover(function(){//Hide/show content of list

		//$(this).find("ul").show("slide", { direction: "down" }, 700);
		//$(this).find("ul").show();
		$(this).children("ul").show();//We only want to show the direct ul child of list not all ul descendants

	},function(){//Resort to defualt

		//$(this).find("ul").hide("slide", { direction: "up" }, 700);
		//$(this).find("ul").hide();
		$(this).find("ul").hide();

	});//End menu li hover function
*/






	//$(".header-nav-list ul").hide();//By defualt, hide all sub menus
	/*$("#header-nav .header-nav-list .nav-up").hide();

	$("#header-nav .header-nav-list .nav-down").click(function(){
		$(this).hide();
		$(this).parent().children(".nav-up").show();
		$(this).parent().children("ul").show();
	});

	$("#header-nav .header-nav-list .nav-up").click(function(){
		$(this).hide();
		$(this).parent().children(".nav-down").show();
		$(this).parent().children("ul").hide();
	});*/
	
	
	
	//$("#header-nav .top-level-list .nav-up").hide();
	
	$("#header-nav .top-level-list").hover(
		function() {
			$(this).children(".nav-down").hide();
			$(this).children(".nav-up").fadeIn();
			$(this).children("a").css("color", "#00b300");
			$(this).children(".nav-up").css("color", "#00b300");
			$(this).children("ul").slideDown();
		}, function() {//Hover out
			$(this).children("a").css("color", "#1a1a1a");
			$(this).children(".nav-up").hide();
			$(this).children(".nav-down").fadeIn();	
			$(this).children("ul").slideUp();			
		}
	);


	$("#header-nav .top-level-list ul li").hover(
		function() {
			$(this).children("a").css("color", "#00b300");
		}, function() {//Hover out
			$(this).children("a").css("color", "#1a1a1a");			
		}
	);
	

	/*$("#header-nav .header-nav-list .nav-down").click(function(){
		$(this).hide();
		$(this).parent().children(".nav-up").show();
		$(this).parent().children("ul").show();
	});

	$("#header-nav .header-nav-list .nav-up").click(function(){
		$(this).hide();
		$(this).parent().children(".nav-down").show();
		$(this).parent().children("ul").hide();
	});*/
	

});