(function(){

	//Actual slide
	var actual = 0;
	var width = 600;


	var $slideShow = $(".slideShow ul");
	var slides = $slideShow.find("li").length;
	
	var interval = setInterval(function(){

		move("next");

	}, 1500);

	function move (dir, click){

		// if (dir === "next"){
		// 	actual++;
		// }else{
		// 	actual--;
		// }

		if ( click )
			clearInterval (interval);

		(dir === "next") ? actual-- : actual++;

		if(actual > 0){

			actual = (slides - 1) * (-1);

		}else if(actual <= (slides * (-1))){
			actual = 0;
		}

		var margin = actual * width;

		$slideShow.animate({
			marginLeft: margin
		},450);
		

	}

	$(".butSlide").on("click", function(){

		var dir = $(this).data("mov");
		move(dir, true);

	});


})();