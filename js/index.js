(function($){
	'use Strict'





	// Owl Carosel Setup

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        700:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	})

	// Navber Setup

	$('.social-icon .fa-bars').on('click', function(){

		$('.header-menu ul').slideDown(1000);
	 	$(this).hide();
	 	$('.social-icon .fa-times ').show();
	});

	 $('.social-icon .fa-times').on('click' , function(){
		$('.header-menu ul').slideUp(1000);
	 	$(this).hide();
	 	$('.social-icon .fa-bars').show();
	 });





}) (jQuery);