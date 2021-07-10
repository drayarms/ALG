var contact_us_form_inputs = [];
var testimonials_form_inputs = [];
var hompage_contact_form_inputs = [];
var bubble_anim;
var curr_form;



function process_focus(e, placeholder_txt){
	e.focus(function(){
		//console.log(e.attr("class"))
		//console.log("focus");
		if(e.hasClass("input_error")){
			e.val("");//Clear any input
			e.attr("placeholder", placeholder_txt);//Put back placeholder	
		}
		$(this).removeClass("input_error");
		$(this).removeClass("input_valid");
		$(this).addClass("input_default");//Default regardless of whether we have placeholder or validated
	});	
}


/*Checks a given field and returns a boolean depending on whether or not it passes the regex
requirements
*/
function establish_input_validity(e, regex, error_txt, action){
	//alert("1")
	if(e.val().length < 1){//No text entered 
			//alert("nothing entered")
		if(action == "blur"){
			e.removeClass("input_valid");
			e.removeClass("input_error");	
			e.addClass("input_default");
		}
		if(action == "keyup"){
			e.removeClass("validity_established");	
			e.addClass("validity_not_established");			
		}
	}else{
		if(e.val().match(regex)){
			if(action == "blur"){
				//alert("valid")
				e.addClass("input_valid");
				e.removeClass("input_error");	
				e.removeClass("input_default");
				//alert($(this).attr("class"))
			}
			if(action == "keyup"){
				e.removeClass("validity_not_established");	
				e.addClass("validity_established");					
			}
		}else{
			if(action == "blur"){
				e.addClass("input_error");
				e.removeClass("input_valid");	
				e.removeClass("input_default");				
				e.val("");//First clear input
				e.attr("placeholder", error_txt);
			}
			if(action == "keyup"){
				e.removeClass("validity_established");	
				e.addClass("validity_not_established");					
			}
		}
	}	
}

function process_blur(e, regex, error_txt){
	e.blur(function(){
		establish_input_validity(e, regex, error_txt, "blur")		
	});		
}


function enable_submit(form_inputs, input_item, input_exceptions, input_submit){

	input_item.keyup(function(){//Triggered on keyup and also on autofill
		
		var $this = $(this);
		
		//console.log("val "+$this.val());
		//$this.css("background-color", "red");//In cas of autofill, revert to original color
		
		for(var i = 0; i < form_inputs.length; i++){
			if(form_inputs[i].elem.is($this)){
				establish_input_validity(form_inputs[i].elem, form_inputs[i].regex, form_inputs[i].err_msg, "keyup");
			}
			if(input_exceptions.length > 0){
			//for(var j = 0; j < input_exceptions.lenth; j++){//Establish as valid, any input element in the exceptions array
				if(form_inputs[i].elem.is(input_exceptions[0])){
					input_exceptions[0].addClass("validity_established");
					input_exceptions[0].removeClass("validity_not_established");					
				}	
			//}
			}
		}
	
		
		var all_other_inputs_valid = true;//Assume by default all other inputs have been validated
		//$("#contact_us_page_form .form_input_space").each(function(){//Iterate all inputs/textareas
		input_item.each(function(){//Iterate all inputs/textareas
			if($(this).is($this)){//The element in focus
				//alert(1)
			}else{//Not an element currently in focus
				//alert(0)
				//if(!$(this).hasClass("input_valid")){
				if(!$(this).hasClass("validity_established")){	
					all_other_inputs_valid = false;
				}
			}
		});
		
		
		if(all_other_inputs_valid && $this.hasClass("validity_established")){
			//console.log("all other inputs valid")
			input_submit.addClass("form_submit_non_ghosted");
			input_submit.removeClass("form_submit_ghosted");
		}else{
			//console.log("not all other inputs valid")
			input_submit.addClass("form_submit_ghosted");
			input_submit.removeClass("form_submit_non_ghosted");			
		}
	});
}


function animate_animation_bubbles(num_bubbles, animation_bubble_width){
	var curr_bubble = 0;
	var new_bubble_width;
	var new_bubble_height;
	function animate_bubbles(){
		curr_bubble %= num_bubbles;
		//console.log(curr_bubble);
		for(var i = 0; i < num_bubbles; i++){
			if(i == curr_bubble){
				new_bubble_width = animation_bubble_width*1.1;
				$(".animation_bubble").eq(i).css("opacity", "0.2");
			}else{
				new_bubble_width = animation_bubble_width;
				$(".animation_bubble").eq(i).css("opacity", "0.6");
			}
			new_bubble_height = new_bubble_width;
			$(".animation_bubble").eq(i).css("width", new_bubble_width+"px");
			$(".animation_bubble").eq(i).css("height", new_bubble_height+"px");
			centralize_element_vertically($(".animation_bubble").eq(i));
		}
		curr_bubble++;
	}

	bubble_anim = window.setInterval(animate_bubbles, 180);
}



function get_submit_feedback(success_msg){
	$(".submit_feedback").addClass("submit_success");
	$(".submit_feedback").addClass("remove_error");
	//$(".submit_feedback").addClass("submit_error");
	//$(".submit_feedback").removeClass("submit_success");
	$(".submit_feedback").append(success_msg);
}


function generate_animation_bubbles(animation_bubbles, success_msg){
	animation_bubbles.show();
	var num_bubbles = 3;
	var bubble_container_width = $(".animation_bubbles").width()/num_bubbles;
	var bubble_container_height = $(".animation_bubbles").height();
	var animation_bubble_width = bubble_container_width*0.8;
	var animation_bubble_height = animation_bubble_width;
	
	for(var i = 0; i < num_bubbles; i++){
		$(".animation_bubbles").append("<div class = 'animation_bubble_container' style = 'float:left;width:"+bubble_container_width+"px;height:"+bubble_container_height+"px;'></div>");
		$(".animation_bubble_container").eq(i).append("<div class = 'animation_bubble' style = 'width:"+animation_bubble_width+"px;height:"+animation_bubble_height+"px;border-radius:50%;margin-left:auto;margin-right:auto;background:#ba2d8b;'></div>");
		centralize_element_vertically($(".animation_bubble").eq(i));
	}
	
	animate_animation_bubbles(num_bubbles, animation_bubble_width);
	get_submit_feedback(success_msg);
}

function generate_from_submit_screen(success_msg){
	$("#submit_screen").show();
	$("#submit_screen").css("top", window.sessionStorage.scrollTop+"px");
	$("body").css("overflow", "hidden");//Disable scroll
	centralize_element($("#submit_div"));
	
	generate_animation_bubbles($(".animation_bubbles"), success_msg);
}

function process_contact_us_submit($this, success_msg){
	//generate_from_submit_screen(success_msg);
	if($this.hasClass("form_submit_non_ghosted")){
		var name1 = $("#contact_us_fname").val();
		var name2 = $("#contact_us_lname").val();
		var address1 = $("#contact_us_addy1").val();
		var address2 = $("#contact_us_addy2").val();
		var email = $("#contact_us_email").val();
		var phone = $("#contact_us_phone").val();
		var msg = $("#contact_us_msg").val();
		curr_form = $this.closest(".page_form");
		
		generate_from_submit_screen(success_msg);
		
	}
}



function process_testimonials_submit($this, success_msg){
	if($this.hasClass("form_submit_non_ghosted")){
		var name = $("#testimonials_name").val();
		var email = $("#testimonials_email").val();
		var website = $("#testimonials_website").val();
		var msg = $("#testimonials_msg").val();
		curr_form = $this.closest(".page_form");
		
		generate_from_submit_screen(success_msg);
	
	}
}


function process_homepage_contact_submit($this, success_msg){
	if($this.hasClass("form_submit_non_ghosted")){
		var name = $("#homepage_contact_name").val();
		var email = $("#homepage_contact_email").val();
		var phone = $("#homepage_contact_phone").val();
		var msg = $("#homepage_contact_msg").val();
		curr_form = $this.closest(".page_form");
		
		alert(name)
		alert(email)
		alert(phone)
		alert(msg)
		
		generate_from_submit_screen(success_msg);
	
	}
}


function restore_original_state(e){
	e.removeClass("input_valid");
	e.removeClass("input_error");	
	e.addClass("input_default");

	e.removeClass("validity_established");	
	e.addClass("validity_not_established");		
}


function clear_inputs(this_form, form_inputs){
	//i = 0;
	this_form.find(".form_input_space").each(function(){
		//alert(i+" "+$(this).attr("id")+" "+form_inputs[i].placeholder_txt)
		 //$(this).reset();
		restore_original_state($(this));
		//$(this).css("width", "90px");
		//$(this).attr("placeholder", form_inputs[i].placeholder_txt);
		//$(this).val(form_inputs[i].placeholder_txt);
		//i++;
	});	
}


function clear_form(this_form){
	//alert(this_form.attr("class"))
	 this_form.trigger("reset");
	if(this_form.attr("id") == "contact_us_page_form"){
		//alert("contact")
		clear_inputs(this_form, contact_us_form_inputs);
	}
	if(this_form.attr("id") == "testimonials_page_form"){
		//alert("tes")
		clear_inputs(this_form, testimonials_form_inputs);
	}
	if(this_form.attr("id") == "homepage_contact_form"){
		//alert("home")
		clear_inputs(this_form, hompage_contact_form_inputs);
	}	

	this_form.find(".form_submit").removeClass("form_submit_non_ghosted");
	this_form.find(".form_submit").addClass("form_submit_ghosted");
}



function process_submit_click(){
	$("#submit_div .close i").click(function(){
		$("#submit_screen").hide();
		$("body").css("overflow-y", "auto");
		$("body").css("overflow-x", "hidden");
		$(".animation_bubble_container").remove();
		$(".submit_feedback").empty();
		//console.log(bubble_anim)
		window.clearInterval(bubble_anim);
		clear_form(curr_form);
	});	
}



$(document).ready(function(){
	
	///^[0-9a-zA-Z]+$/
	var name_regex = /^[a-zA-Z]+$/;
	var address1_regex = /^[a-z0-9\s,'-]*$/i;
	var address2_regex = /^.{0,}$/;
	var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var phone_num_regex = /^[0-9]+$/;
	var message_regex = /^.{6,}$/;
	var website_regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var full_name_regex = message_regex;
	
	contact_us_form_inputs.push({elem:$("#contact_us_fname"), regex:name_regex, err_msg:"Please, enter a valid first name", placeholder_txt:$("#contact_us_fname").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_lname"), regex:name_regex, err_msg:"Please, enter a valid last name", placeholder_txt:$("#contact_us_lname").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_addy1"), regex:address1_regex, err_msg:"Please, enter a valid address", placeholder_txt:$("#contact_us_addy1").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_addy2"), regex:address2_regex, err_msg:"Please, enter a valid address", placeholder_txt:$("#contact_us_addy2").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_email"), regex:email_regex, err_msg:"Please, enter a valid email", placeholder_txt:$("#contact_us_email").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_phone"), regex:phone_num_regex, err_msg:"Please, enter a valid phone number", placeholder_txt:$("#contact_us_phone").attr("placeholder")});
	contact_us_form_inputs.push({elem:$("#contact_us_msg"), regex:message_regex, err_msg:"Invalid message", placeholder_txt:$("#contact_us_msg").attr("placeholder")});

	for(var i = 0; i < contact_us_form_inputs.length; i++){
		process_focus(contact_us_form_inputs[i].elem, contact_us_form_inputs[i].placeholder_txt);
		process_blur(contact_us_form_inputs[i].elem, contact_us_form_inputs[i].regex, contact_us_form_inputs[i].err_msg);
	}
	
	
	
	testimonials_form_inputs.push({elem:$("#testimonials_name"), regex:full_name_regex, err_msg:"Please, enter your full name", placeholder_txt:$("#testimonials_name").attr("placeholder")});
	testimonials_form_inputs.push({elem:$("#testimonials_email"), regex:email_regex, err_msg:"Please, enter a valid email", placeholder_txt:$("#testimonials_email").attr("placeholder")});
	testimonials_form_inputs.push({elem:$("#testimonials_website"), regex:website_regex, err_msg:"Please, enter a valid website", placeholder_txt:$("#testimonials_website").attr("placeholder")});	
	testimonials_form_inputs.push({elem:$("#testimonials_msg"), regex:message_regex, err_msg:"Invalid message", placeholder_txt:$("#testimonials_msg").attr("placeholder")});
	
	for(var i = 0; i < testimonials_form_inputs.length; i++){
		process_focus(testimonials_form_inputs[i].elem, testimonials_form_inputs[i].placeholder_txt);
		process_blur(testimonials_form_inputs[i].elem, testimonials_form_inputs[i].regex, testimonials_form_inputs[i].err_msg);
	}	
	
	
	hompage_contact_form_inputs.push({elem:$("#homepage_contact_name"), regex:full_name_regex, err_msg:"Please, enter your full name", placeholder_txt:$("#homepage_contact_name").attr("placeholder")});
	hompage_contact_form_inputs.push({elem:$("#homepage_contact_email"), regex:email_regex, err_msg:"Please, enter a valid email", placeholder_txt:$("#homepage_contact_email").attr("placeholder")});
	hompage_contact_form_inputs.push({elem:$("#homepage_contact_phone"), regex:phone_num_regex, err_msg:"Please, enter a valid phone number", placeholder_txt:$("#homepage_contact_phone").attr("placeholder")});
	hompage_contact_form_inputs.push({elem:$("#homepage_contact_msg"), regex:message_regex, err_msg:"Invalid message", placeholder_txt:$("#homepage_contact_msg").attr("placeholder")});
	
	
	enable_submit(contact_us_form_inputs, $("#contact_us_page_form .form_input_space"), [$("#contact_us_addy2")], $("#contact_us_submit"));
	enable_submit(testimonials_form_inputs, $("#testimonials_page_form .form_input_space"), [$("#testimonials_website")], $("#testimonials_submit"));
	enable_submit(hompage_contact_form_inputs, $("#homepage_contact_form .form_input_space"), [], $("#homepage_contact_submit"));
	
	
	$("#contact_us_submit").click(function(){
		process_contact_us_submit($(this), "Thanks for reaching out. We will get back with you shortly.");
	});
	
	
	$("#testimonials_submit").click(function(){
		process_testimonials_submit($(this), "Thanks for your submission.");
	});	
	
	
	$("#homepage_contact_submit").click(function(){
		process_homepage_contact_submit($(this), "Thanks for reaching out. We will get back with you shortly.");
	});	
	
	process_submit_click();	

});
