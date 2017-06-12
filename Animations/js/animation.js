console.log("We're in!!");

 (function(){

	//$ because It's a full jQeury object
	var $redBox = $(".redBox");

	function move (dir){

		//Avoid a order queue
		$redBox.clearQueue();

		switch(dir){

			case "up":

				$redBox.animate({
					top: "-=50px"
				},200);

			break;

			case "down":
				$redBox.animate({
					top: "+=50px"
				},200);
			break;

			case "right":
				$redBox.animate({
					left: "+=50px"
				},200);
			break;

			case "left":
				$redBox.animate({
					left: "-=50px"
				},200);
			break;

			default:
				$redBox.animate({
					top: "0px",
					left: "0px"
				},1000);

		}

	}

	//Move redBox with keyboard
	$(document).on("keypress", function (e){

		var keyCode = e.keyCode;
		

		switch ( keyCode ){

			case 119: 
				move("up");
			break;

			case 115:
				move("down");
			break;

			case 100:
				move("right");
			break;

			case 97:
				move("left");
			break;

			default:
				move("reset");
			break;

		}

	});


	$("button").on("click", function(){

		var dir = $(this).data("dir");

		move (dir);

	});


})();
