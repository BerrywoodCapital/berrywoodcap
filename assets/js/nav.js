(function ($) {
	'use strict';
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#sideNav',
		offset: navHeight,
	});

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on('click', function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1000
		);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000,
	});

	/*--/ Star Scrolling nav /--*/
	$('a.jj-scroll[href*="#"]:not([href="#"])').on('click', function () {
		if (
			location.pathname.replace(/^\//, '') ==
				this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate(
					{
						scrollTop: target.offset().top - navHeight + 5,
					},
					1000,
					'easeInOutExpo'
				);
				return false;
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.side_nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active_side');
				}
				main_nav
					.find('a[href="#' + $(this).attr('id') + '"]')
					.parent('li')
					.addClass('active_side');
			}
			if (cur_pos < 300) {
				$('.nav-menu ul:first li:first').addClass('active_side');
			}
		});
	});
})(jQuery);
