var contact_us_form_inputs = [];
var testimonials_form_inputs = [];


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
				//alert("error")
				//alert($(this).attr("placeholder"));
				//alert($(this).attr("class"))
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
		//console.log("blur");
		//$(this).attr("placeholder", error_txt);
		//alert($(this).val())
		/*if(e.val().length < 1){//No text entered
			//alert("nothing entered")
				e.removeClass("input_valid");
				e.removeClass("input_error");	
				e.addClass("input_default");
				//return false;
		}else{
			if(e.val().match(regex)){
				//alert("valid")
				e.addClass("input_valid");
				e.removeClass("input_error");	
				e.removeClass("input_default");
				//alert($(this).attr("class"))
				//return true;
			}else{
				e.addClass("input_error");
				e.removeClass("input_valid");	
				e.removeClass("input_default");				
				e.val("");//First clear input
				e.attr("placeholder", error_txt);
				//alert("error")
				//alert($(this).attr("placeholder"));
				//alert($(this).attr("class"))
				//return false;
			}
		}*/			
	});		
}


/*function process_keyup(e, regex, error_txt){
	e.keyup(function(){
		establish_input_validity(e, regex, error_txt, "keyup")
	});
}*/


//process_keyup($("#contact_us_email"), email_regex, "Please, enter a valid email");
function enable_submit(form_inputs, input_item, input_exceptions, input_submit){

	input_item.keyup(function(){//Triggered on keyup and also on autofill
		
		var $this = $(this);
		
		//console.log("val "+$this.val());
		//$this.css("background-color", "red");//In cas of autofill, revert to original color
		
		for(var i = 0; i < form_inputs.length; i++){
			if(form_inputs[i].elem.is($this)){
				establish_input_validity(form_inputs[i].elem, form_inputs[i].regex, form_inputs[i].err_msg, "keyup");
			}
			/*if(contact_us_form_inputs[i].elem.is($("#contact_us_addy2"))){
				$("#contact_us_addy2").addClass("validity_established");
				$("#contact_us_addy2").removeClass("validity_not_established");					
			}*/
			//for(var j = 0; j < input_exceptions.lenth; j++){//Establish as valid, any input element in the exceptions array
				if(form_inputs[i].elem.is(input_exceptions[0])){
					input_exceptions[0].addClass("validity_established");
					input_exceptions[0].removeClass("validity_not_established");					
				}	
			//}
		}
	
		//alert($("#contact_us_addy2").attr("class"));
		//alert($(this))
		//alert("2")
		
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

$(document).ready(function(){

	/*$(".form_input_space").focus(function(){
		//console.log("focus");
	});

	$(".form_input_space").blur(function(){
		//console.log("blur");
	});*/	
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
	
	//alert(all_inputs[1].regex)
	//Use objects instead to process focus, blur and keyup. Can now move process keyup meat into the keyup func
	
	for(var i = 0; i < contact_us_form_inputs.length; i++){
		process_focus(contact_us_form_inputs[i].elem, contact_us_form_inputs[i].placeholder_txt);
		process_blur(contact_us_form_inputs[i].elem, contact_us_form_inputs[i].regex, contact_us_form_inputs[i].err_msg);
	}
	
	
	
	testimonials_form_inputs.push({elem:$("#testimonials_name"), regex:full_name_regex, err_msg:"Please, enter a valid name", placeholder_txt:$("#testimonials_name").attr("placeholder")});
	testimonials_form_inputs.push({elem:$("#testimonials_email"), regex:email_regex, err_msg:"Please, enter a valid email", placeholder_txt:$("#testimonials_email").attr("placeholder")});
	testimonials_form_inputs.push({elem:$("#testimonials_website"), regex:website_regex, err_msg:"Please, enter a valid website", placeholder_txt:$("#testimonials_website").attr("placeholder")});	
	testimonials_form_inputs.push({elem:$("#testimonials_msg"), regex:message_regex, err_msg:"Invalid message", placeholder_txt:$("#testimonials_msg").attr("placeholder")});
	
	for(var i = 0; i < testimonials_form_inputs.length; i++){
		process_focus(testimonials_form_inputs[i].elem, testimonials_form_inputs[i].placeholder_txt);
		process_blur(testimonials_form_inputs[i].elem, testimonials_form_inputs[i].regex, testimonials_form_inputs[i].err_msg);
	}	
	
	/*process_focus($("#contact_us_fname"));
	process_blur($("#contact_us_fname"), name_regex, "Please, enter a valid first name");
	process_keyup($("#contact_us_fname"), name_regex, "Please, enter a valid first name");
	
	process_focus($("#contact_us_lname"));
	process_blur($("#contact_us_lname"), name_regex, "Please, enter a valid last name");
	process_keyup($("#contact_us_lname"), name_regex, "Please, enter a valid last name");
	
	process_focus($("#contact_us_addy1"));
	process_blur($("#contact_us_addy1"), address_regex, "Please, enter a valid address");
	process_keyup($("#contact_us_addy1"), address_regex, "Please, enter a valid address");
	
	process_focus($("#contact_us_addy2"));
	process_blur($("#contact_us_addy2"), address_regex, "Please, enter a valid address");
	process_keyup($("#contact_us_addy2"), address_regex, "Please, enter a valid address");
	
	process_focus($("#contact_us_email"));
	process_blur($("#contact_us_email"), email_regex, "Please, enter a valid email");
	process_keyup($("#contact_us_email"), email_regex, "Please, enter a valid email");

	process_focus($("#contact_us_phone"));
	process_blur($("#contact_us_phone"), phone_num_regex, "Please, enter a valid phone number");
	process_keyup($("#contact_us_phone"), phone_num_regex, "Please, enter a valid phone number");	
	
	process_focus($("#contact_us_msg"));
	process_blur($("#contact_us_msg"), message_regex, "Invalid message"); 
	process_keyup($("#contact_us_msg"), message_regex, "Invalid message"); */

	//setTimeout(function(){enable_submit();},10);
	//$("#contact_us_addy2").addClass("validity_established");
	//$("#contact_us_addy2").removeClass("validity_not_established");
	enable_submit(contact_us_form_inputs, $("#contact_us_page_form .form_input_space"), [$("#contact_us_addy2")], $("#contact_us_submit"));
	enable_submit(testimonials_form_inputs, $("#testimonials_page_form .form_input_space"), [$("#testimonials_website")], $("#testimonials_submit"));
	
	$("#contact_us_page_form .form_input_space").each(function(){
		/*$(this).autocomplete({
			//alert($(this).val());
			focus: function( event, ui ) {
				alert($(this).val());
			}
		});*/
		
		//$("#contact_us_fname").on('autocompleteSelect', function(event, node) {
		//$(this).on('autocompleteSelect', function(event, node) {
			//alert(1)
		//});		
	});
	
	//$("#contact_us_page_form .form_input_space").select(function(){
		//alert(1)
	//});
	

	
});
