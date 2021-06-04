function centralize_element_horizontally(e){
	/*var shift;
	if(e.parent().width() > e.width()){
		shift = (e.parent().width() - e.width())/2;
	}else{
		shift = (e.parent().width() - e.width())/2;
	}
	$(e).css({
		position: "relative",
		left: () + "px"
	});*/
	
	$(e).css({
		position: "relative",
		left: ((e.parent().width() - e.width())/2) + "px"
	});	
}


function centralize_element_vertically(e){
	$(e).css({
		position: "relative",
		left: ((e.parent().height() - e.height())/2) + "px"
	});
}

function centralize_element(e){
	centralize_element_horizontally(e);
	centralize_element_vertically(e);
}