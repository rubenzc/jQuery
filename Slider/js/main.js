(function(){

	//Actual slide
	var actual = 0;

	var width = 600;


	var $slideShow = $(".slideShow ul");
	var slides = $(".slideShow ul").find("li").length;
	
	function move (dir){

		(dir === "next") ? actual++ : actual--;

		// if (dir === "next"){
		// 	actual++;
		// }else{
		// 	actual--;
		// }

	}

	$(".botSlide").on("click", function(){

		var dir = $(this).data("mov");
		move(dir);

	});


})();