
$(document).ready(function(){

	var div_top = $(".header").offset().top;

	//alert(original_window_top)
	//console.log(div_top)
	$(window).scroll(function() {
		var window_top = $(window).scrollTop();

	
		if (window_top > div_top)
		{
			$(".header").addClass("stick");
		}
		else
		{
			$(".header").removeClass("stick");
		}
    });

});