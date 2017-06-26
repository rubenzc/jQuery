(function(){

	//Function to customize the slider
	$.slideShow = function(options){

		options = $.extend({

			divDestiny: ".slideShow",
			interval: 1500,
			width: 600,
			slides: [],

		}, options);

		if(options.slides.length === 0){
			alert("SLIDES NECCESARY");
			return;
		}

		//Actual slide
		var actual = 0;
		var width = options.width;

		
		var slides = options.slides.length;

		//Slideshow creation
		var content = "";
			content += "<ul>"

				for( var i=0; i< options.slides.length; i++){
					content += '<li><img src="'+ options.slides[i] +'"></li>';
				}

			content += "<ul>"

		$(options.divDestiny).append(content);
		var $slideShow = $(".slideShow ul");

		//Create buttons

		var $points = $(".slideShowButtons");

		$points.find("div").eq(0).css({
			backgroundColor: "#58167d"
		});
		
		//Loop interval
		var interval = setInterval(function(){
			move("next");
		}, options.interval);

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
			var idx = actual * -1;

			var $actualPoint = $points.find("div").eq(idx);
			var $otherPoints = $points.find("div").not($actualPoint);

			var tl = new TimelineMax();
			tl.to( $slideShow, 1.2, { marginLeft: margin, ease: Elastic.easeOut.config(1, 0.75) } )
			  .to( $actualPoint, 0.5, { backgroundColor: "#58167d" }, "-=1.2" )
			  .to( $otherPoints, 0.5, { backgroundColor: "#a1a1a1" }, "-=1.2" );

			// $slideShow.animate({
			// 	marginLeft: margin
			// },750);
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


		}



})();