
function process_focus(e){
	e.focus(function(){
		//console.log("focus");
		$(this).removeClass("input_error");
		$(this).removeClass("input_valid");
		$(this).addClass("input_default");
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


function process_keyup(e, regex, error_txt){
	e.blur(function(){
		establish_input_validity(e, regex, error_txt, "keyup")
	});
}


function enable_submit(){
	$("#contact_us_page_form .form_input_space").keyup(function(){
		//alert($(this))
		alert("2")
		var $this = $(this);
		var all_other_inputs_valid = true;//Assume by default all other inputs have been validated
		$("#contact_us_page_form .form_input_space").each(function(){//Iterate all inputs/textareas
			if($(this).is($this)){//The element in focus
				//alert(1)
			}else{//Not an element currently in focus
				//alert(0)
				if(!$(this).hasClass("input_valid")){
					all_other_inputs_valid = false;
				}
			}
		});
		if(all_other_inputs_valid){
			//alert(1)
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
	var address_regex = /^[a-z0-9\s,'-]*$/i;
	var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var phone_num_regex = /^[0-9]+$/;
	var message_regex = /^.{6,}$/;
	
	process_focus($("#contact_us_fname"));
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
	process_keyup($("#contact_us_msg"), message_regex, "Invalid message"); 
	
	setTimeout(function(){enable_submit();},10);
	
});
