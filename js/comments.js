
//Facebook login with JavaScript SDK
function fbLogin() {
	FB.login(function (response) {
		if (response.authResponse) {
			// Get and display the user profile data
			getFbUserData();
		}else{
			alert("User cancelled login or did not fully authorize.");
		}
	},{scope:'email'});
}

function statusChangeCallback(response, sender){
	//connected - the person is logged into Facebook, and has logged into your app.
	//not_authorized - the person is logged into Facebook, but has not logged into your app.
	//unknown - the person is not logged into Facebook, so you don't know if they've logged into your app 	
	if(response.status === "connected"){
		console.log("connected");
	}else if(response.status === "not_authorized"){
		console.log("not authorized");
	}else if(response.status === "unknown"){
		console.log("unknown");
		if(sender == "click"){
			fbLogin();
		}
	}
	
}


$(document).ready(function(){
	
	//Add dummy image to image box
	insert_image($("#add_comment_pic"), $("#add_comment_pic_box"), 1, 100);
	
	$("#add_comment_line").click(function(){

		FB.getLoginStatus(function(response) {//Called after the JS SDK has been initialized.
			statusChangeCallback(response, "click");//Returns the login status.
		});
		
		//$("#add_comment_form").show();
		//$(this).css("cursor", "default");
		//$(this).hide();
	});
	
});