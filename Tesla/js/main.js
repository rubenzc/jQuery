console.log("We're in!!");

$(document).ready(function(){

(function(){

	//Main object
	var teslaView = {

		loader: $(".divPreloader"),

		colors: ['Blanco', 'Cafe', 'Gris', 'Verde'],

		//Function to change the image and wait time gif
		changeColor: function( img ){

			var $loader = teslaView.loader;

			$loader.fadeIn(150);

			if(img === undefined){

				var color = teslaView.colors[0];
				img =  "img/tesla/modelS-"+ color +".jpg";
			}

			$("<img>",{
				src: img,
				class: 'img-responsive'
			})	//When image is charged in the broswer (load), it will trigger next function
				.load(function(){

					$(".divVistaPrevia").find("img").remove();
					$(this).appendTo('.divVistaPrevia');

					$loader.fadeOut(150);

				})

		},

		//Main function to create colors into the select
		init: function(options){

			//extend add to teslaView all parameters from testlaView.init()
			$.extend( teslaView, options);

			console.log(teslaView);

			//It runs array colors and create the select with those colors
			for( var i = 0; i < teslaView.colors.length; i++ ){

				var color = teslaView.colors[i];

				$("<option>",{
					value: color,
					text: color,
				}).appendTo('#cmbColor');

			}
			//Function to change the color when select

			$('#cmbColor').bind("change", function(){

				//this referes to #cmbColor
				var color = $(this).val();
				var url = "img/tesla/modelS-"+ color +".jpg";

				teslaView.changeColor( url );
				//$("#imgCar").attr("src", url);
			});

			//Change image when you start
			teslaView.changeColor();
		}
	};

	//Instance with parameters to init
	teslaView.init({
		colors: ['Rojo', 'Verde', 'Gris', 'Cafe', 'Negro', 'Blanco']
	});

	// $("#cmbColor").on("change", function(){
		
	// 	var color = $(this).val();
	// 	var url = "img/tesla/modelS-"+ color +".jpg"

	// 	$("#imgCar").attr("src", url);


	// });

})();


});