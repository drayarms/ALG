function my_map() {
	var map_prop= {
		//center:new google.maps.LatLng(0,0),
		//center:new google.maps.LatLng(51.508742,-0.120850),
		//center:new google.maps.LatLng(33.7490,84.3880),
		//center:new google.maps.LatLng(33.7490,-84.3880),
		center:new google.maps.LatLng(33.9208555,-84.1139875),
		zoom:15,
	};
		
	var map = new google.maps.Map(document.getElementById("google_map"),map_prop);
}