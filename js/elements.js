/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	shane_tm_portfolio_second();
	shane_tm_portfolio_third();
	shane_tm_projects();
	shane_tm_elements_carousel();
	
	
	jQuery(window).on('resize',function(){
		
	});
	
	jQuery(window).load('body', function(){
		
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function shane_tm_portfolio_second(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.shane_tm_portfolio_second .portfolio_list ul');
		var filter		 = jQuery('.shane_tm_portfolio_second .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function shane_tm_projects() {
	
	"use strict";
	
	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}

function shane_tm_portfolio_third(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.shane_tm_portfolio_third .portfolio_list ul');
		var filter		 = jQuery('.shane_tm_portfolio_third .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function shane_tm_elements_carousel(){
	
	"use strict";
	
		var carousel			= jQuery('.shane_tm_testimonials_third .owl-carousel');
		carousel.owlCarousel({
			loop: true,
			items: 4,
			lazyLoad: true,
			margin: 70,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			center: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		shane_tm_imgtosvg_elements();
	
		var carousel2			= jQuery('.shane_tm_testimonials_fourth .owl-carousel');
		carousel2.owlCarousel({
			loop: true,
			items: 3,
			margin: 50,
			lazyLoad: true,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
	}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function shane_tm_imgtosvg_elements(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}




