//Swiper JS CDN
Mirai.query.getScript( "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js", function( data, textStatus, jqxhr ) {

	if( textStatus === 'success' &&  jqxhr.status == 200  ){
	    var homeSlider = new Swiper('#homeSlider', {
	        autoplay: '6000',
	        autoplayDisableOnInteraction: false,
	        nextButton: '#homeSlider .swiper-button-next',
	        prevButton: '#homeSlider .swiper-button-prev',
	        pagination: '.swiper-pagination',
	        paginationClickable: true  
		});

	    jQuery("#homeSlider").height(jQuery(window).height());
	};

});

Mirai.query(document).ready(function(){  

	//Swiper CSS CDN
	var head = document.getElementsByTagName('head')[0];
	var swiperCss = document.createElement("link");
	swiperCss.rel = "stylesheet";
	swiperCss.href = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css";
	head.appendChild(swiperCss);

	 jQuery("#homeSlider").height(jQuery(window).height());

	 jQuery(window).resize(function(){
	    jQuery("#homeSlider").height(jQuery(window).height());
	});

});
