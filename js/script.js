function switchNav(src){
	srcId = $(src).attr("id");
	console.log(srcId);
	if(srcId==="nav1"){
		$("#underLine").animate({
			left:"20px"
		},50, function(){
				$("#home").removeClass("hide");
				$("#projects").addClass("hide");
			}
		);
	}	
	else{
		$("#underLine").animate({
			left:"132px"
		},50, function(){
				$("#home").addClass("hide");
				$("#projects").removeClass("hide");
			}
		);
	}
}