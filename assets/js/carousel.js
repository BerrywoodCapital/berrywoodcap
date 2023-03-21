!(function ($) {
	'use strict'

	// $('.owl-client').owlCarousel({
	// 	animateOut: 'SlideOutDown',
	// 	animateIn: 'flipInX',
	// 	dots: true,
	// 	loop: true,
	// 	nav: true,
	// 	autoplayHoverPause: true,
	// 	autoplay: true,
	// 	smartSpeed: 2000,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 		},
	// 		767: {
	// 			items: 1,
	// 		},
	// 		1000: {
	// 			items: 1,
	// 		},
	// 	},
	// })

	$('.carousel').carousel({
		pause: 'hover',
		interval: 3000,
		keyboard: true,
	})
})(jQuery)

let owl_prev = document.querySelector('.carousel-control-prev-icon')
let owl_next = document.querySelector('.owl-next')

owl_prev.textContent = ''
owl_next.textContent = ''
let li = document.createElement('i')
owl_next.append(li)
owl_prev.classList.add('icofont-simple-left')
li.classList.add('icofont-simple-right')
owl_next.style.fontSize = '2rem'
owl_prev.style.fontSize = '2rem'
