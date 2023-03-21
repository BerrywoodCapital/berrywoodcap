!(function($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();

  
    $('.navbar-toggler1').on('click', function() {
        if( ! $('#mainNav').hasClass('navbar-reduce1')) {
            $('#mainNav').addClass('navbar-reduce1');
        }
    })

	$('.navbar-toggler2').on('click', function() {
        if( ! $('#mainNav').hasClass('navbar-reduce2')) {
            $('#mainNav').addClass('navbar-reduce2');
        }
    })

    /*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md1').addClass('navbar-reduce1');
			$('.navbar-expand-md1').removeClass('navbar-trans1');
		} else {
			$('.navbar-expand-md1').addClass('navbar-trans1');
			$('.navbar-expand-md1').removeClass('navbar-reduce1');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

        /*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md2').addClass('navbar-reduce2');
			$('.navbar-expand-md2').removeClass('navbar-trans2');
		} else {
			$('.navbar-expand-md2').addClass('navbar-trans2');
			$('.navbar-expand-md2').removeClass('navbar-reduce2');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
			var typed = new Typed('.text-slider', {
				strings: typed_strings.split(','),
				typeSpeed: 100,
				loop: true,
				backDelay: 1100,
				backSpeed: 30
			});
	}

})(jQuery);
new WOW().init();