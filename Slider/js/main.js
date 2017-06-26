(function(){

	//Actual slide
	var actual = 0;
	var width = 600;

	var $slideShow = $(".slideShow ul");
	var slides = $slideShow.find("li").length;
	
	//Loop interval
	var interval = setInterval(function(){
		move("next");
	}, 1500);

	function move (dir, click){

		// if (dir === "next"){
		// 	actual++;
		// }else{
		// 	actual--;
		// }

		//Break the interval loop


		(dir === "next") ? actual-- : actual++;

		if(actual > 0){

			actual = (slides - 1) * (-1);

		}else if(actual <= (slides * (-1))){
			actual = 0;
		}

		move_by_point(actual, click);
		

	}

	function move_by_point(actual, click){

		//Stop the interval when you click a slide
		if ( click )
			clearInterval (interval);

		var margin = actual * width;

		$slideShow.animate({
			marginLeft: margin
		},750);

	}


	//Control for ball buttons
	$(".slideButton").on("click", function(){

		var idx = $(this).data("idx");
		idx = idx *-1;

		move_by_point(idx, true);
	});



	//Control about next and previous buttons
	$(".butSlide").on("click", function(){

		var dir = $(this).data("mov");
		//True paramente to break the loop interval
		move(dir, true);

	});


})();