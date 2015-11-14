$(document).ready(function() {

	var root = '/geekz/';

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		
		if(top > 0 && top < 100) {
			$('.ui.large.six.menuholder').addClass('fixedTopMenu').removeClass('animated');
			$('body.pushable').css('marginTop', '120px');
		}

		if( $(window).scrollTop() > ($('.grayback.bottomgray').offset().top + 180)) {
			$('.ui.large.six.menuholder').removeClass('fixedTopMenu').removeClass('animated');
			$('body.pushable').css('marginTop', '0px');
		} else if (top > 100  && $('.ui.large.six.menuholder').css('top') == 'auto') {
			$('.ui.large.six.menuholder').addClass('fixedTopMenu').addClass('animated');
			$('body.pushable').css('marginTop', '120px');
		}

	});

	//$('#options').dropdown();

	$('#contact-menu').click(function(e) {
		e.preventDefault();
		$('#container').animate({ opacity:0 }, 400, function() {
			$("html, body").animate({ scrollTop: $(document).height()-500 }, 1200, "easeOutCubic");
			$(this).animate({ opacity:1 }, 1500);
		});
	});

	$('#mobile-contact-menu').click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});

	$('.switchmenu').click(function() {
		if($(this).hasClass('open')) {
			$('.mobileMenuholder').slideUp(100);
		} else {
			$('.mobileMenuholder').slideDown(200);
		}

		$(this).toggleClass('open');
	});
	
	var container = $('#container');
	var source    = "home";
	$('.menu.right .item, .mobilemenu li').click(function(e) {
		var self = $(this);
		e.preventDefault();
		e.stopPropagation();
		if($(this).hasClass("active")) {
			$('html, body').animate({
				scrollTop: 0
			});
			return false;
		}
		if ($(window).width() < 766) $('.switchmenu.open').trigger('click');
		if($(this).attr('href') != "#")
		$.ajax({
			type: "GET",
			url: $(this).attr('href'),
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});
				
				if(this.url.replace('.html', '') == 'home') {
					history.pushState({}, '', root);
					
					$('.cd-slider-wrapper').show();
					$('html, body').scrollTop(321);
					$('html, body').animate({
						scrollTop: 0
					}, 'slow');
					source = "home";
				} else {
					history.pushState({}, '', this.url.replace('.html', ''));
					console.log(source);
					$('html, body').animate({
						scrollTop: ($(window).width() > 766) ? ((source == "home") ? 321 : 0) : 0
					}, 'slow', function() {
						$('.cd-slider-wrapper').hide();
						$('html, body').scrollTop(0);
					});
					source = "others";
				}

				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				self.addClass('active');
			}
		});
	});

	$('a.about-button').parent().click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			type: "GET",
			url: 'about.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				history.pushState({}, '', this.url.replace('.html', ''));
				$('html, body').animate({
					scrollTop:  ($(window).width() > 766) ? 321 : 0
				}, 'slow', function() {
					$('.cd-slider-wrapper').hide();
					$('html, body').scrollTop(0);
				});
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.about').addClass('active');
				$('.mobilemenu .about-item').addClass('active');
			}
		});
	});

	$('a.home-button').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			type: "GET",
			url: 'home.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				history.pushState({}, '', root);
				$('html, body').animate({
					scrollTop:  0
				}, 'slow');
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.home').addClass('active');
				$('.mobilemenu .home-item').addClass('active');
			}
		});
	});

	$('body').on('click', 'a.business-button', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			type: "GET",
			url: 'business.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				history.pushState({}, '', this.url.replace('.html', ''));
				$('html, body').animate({
					scrollTop:  ($(window).width() > 766) ? 321 : 0
				}, 'slow', function() {
					$('.cd-slider-wrapper').hide();
					$('html, body').scrollTop(0);
				});
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.business').addClass('active');
				$('.mobilemenu .business-item').addClass('active');
			}
		});
	});

	$('body').on('click', 'a.about-button', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			type: "GET",
			url: 'about.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				history.pushState({}, '', this.url.replace('.html', ''));
				$('html, body').animate({
					scrollTop:  ($(window).width() > 766) ? 321 : 0
				}, 'slow', function() {
					$('.cd-slider-wrapper').hide();
					$('html, body').scrollTop(0);
				});
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.about').addClass('active');
				$('.mobilemenu .about-item').addClass('active');
			}
		});
	});

	$('body').on('click', 'a.reviews-button', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			type: "GET",
			url: 'reviews.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				history.pushState({}, '', this.url.replace('.html', ''));
				$('html, body').animate({
					scrollTop:  ($(window).width() > 766) ? 321 : 0
				}, 'slow', function() {
					$('.cd-slider-wrapper').hide();
					$('html, body').scrollTop(0);
				});
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.reviews').addClass('active');
				$('.mobilemenu .reviews-item').addClass('active');
			}
		});
	});

	$('body').on('click', 'a.services-button', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var link = $(this).attr('href');
		$.ajax({
			type: "GET",
			url: 'services.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500, function() {
					       		if(typeof link != "undefined" && link.indexOf('#') != -1) {
					       			$('.sidemenu a.item[href=' +link+  ']').trigger('click');
					       			$('html, body').animate({ scrollTop : ($(link).offset().top - 135) }, 100);
					       		}
					       		
					       });
				});


				history.pushState({}, '', this.url.replace('.html', ''));
				$('html, body').animate({
					scrollTop: ($(window).width() > 766) ? 321 : 0
				}, 'slow', function() {
					$('.cd-slider-wrapper').hide();
					$('html, body').scrollTop(0);
				});
				
				$('.menu.right .item').removeClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.menu.right .item.services').addClass('active');
				$('.mobilemenu .services-item').addClass('active');
			}
		});
	});

	setTimeout(function() {
		var url = document.location.href.split('/').pop();
		if(url == '') url = 'home';
		$.ajax({
			type: "GET",
			url: url + '.html',
			dataType: "html",
			success: function(response) {
				container.html(response);

				if(this.url.replace('.html', '') == 'home') {
					history.pushState({}, '', '');
				} else {
					$('html, body').animate({
						scrollTop: ($(window).width() > 766) ? 321 : 0
					}, 'slow', function() {
						$('.cd-slider-wrapper').hide();
						$('html, body').scrollTop(0);
					});
					history.pushState({}, '', this.url.replace('.html', ''));
				}

				$('.menu.right .item').removeClass('active');
				$('.menu.right .item[href="' + this.url +'"]').addClass('active');
				$('.mobilemenu li').removeClass('active');
				$('.mobilemenu .' + this.url.replace('.html', '') + '-item').addClass('active');
			}
		});
	}, 3000);
	

	$(window).on("popstate", function(e) {
    	var url = document.location.href.split('/').pop();
		if(url == '') url = 'home';
		$.ajax({
			type: "GET",
			url: url + '.html',
			dataType: "html",
			success: function(response) {
				container.animate({ opacity:0 }, 400, function() {
					$(this).html(response)
					       .animate({ opacity:1 }, 500);
				});

				$('.menu.right .item').removeClass('active');
				$('.menu.right .item[href="' + this.url +'"]').addClass('active');
			}
		});
	});


	//  Slider

	/*
		convert a cubic bezier value to a custom mina easing
		http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
	*/
	var duration = 200,
		delay = 0,
		epsilon = (10 / 60 / duration) / 4,
		firstCustomMinaAnimation = bezier(.42,.03,.77,.63, epsilon),
		secondCustomMinaAnimation = bezier(.27,.5,.6,.99, epsilon);


	//initialize the slider
	$('.cd-slider-wrapper').each(function(){
		initSlider($(this));
	});

	function initSlider(sliderWrapper) {
		//cache jQuery objects
		var slider = sliderWrapper.find('.cd-slider'),
			sliderNavigation = sliderWrapper.find('.cd-slider-navigation').find('li'),
			svgCoverLayer = sliderWrapper.find('div.cd-svg-cover'),
			pathId = svgCoverLayer.find('path').attr('id'),
			svgPath = Snap('#'+pathId);
		
		//store path 'd' attribute values	
		var pathArray = [];
		pathArray[0] = svgCoverLayer.data('step1');
		pathArray[1] = svgCoverLayer.data('step6');
		pathArray[2] = svgCoverLayer.data('step2');
		pathArray[3] = svgCoverLayer.data('step7');
		pathArray[4] = svgCoverLayer.data('step3');
		pathArray[5] = svgCoverLayer.data('step8');
		pathArray[6] = svgCoverLayer.data('step4');
		pathArray[7] = svgCoverLayer.data('step9');
		pathArray[8] = svgCoverLayer.data('step5');
		pathArray[9] = svgCoverLayer.data('step10');	

		//update visible slide when user clicks .cd-slider-navigation buttons
		sliderNavigation.on('click', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if(!selectedItem.hasClass('selected')) {
				// if it's not already selected
				var selectedSlidePosition = selectedItem.index(),
					selectedSlide = slider.children('li').eq(selectedSlidePosition),
					visibleSlide = slider.find('.visible'),
					visibleSlidePosition = visibleSlide.index(),
					direction = '';
				//direction = ( visibleSlidePosition < selectedSlidePosition) ? 'next': 'prev';
				direction = ( selectedSlidePosition % 2 == 0) ? 'next': 'prev';

				updateSlide(visibleSlide, selectedSlide, direction, svgCoverLayer, sliderNavigation, pathArray, svgPath);
			}
		});
	}

	function updateSlide(oldSlide, newSlide, direction, svgCoverLayer, sliderNavigation, paths, svgPath) {
		if( direction == 'next' ) {
			var path1 = paths[0],
				path2 = paths[2],
				path3 = paths[4];
				path4 = paths[6];
				path5 = paths[8];
		} else {
			var path1 = paths[1],
				path2 = paths[3],
				path3 = paths[5];
				path4 = paths[7];
				path5 = paths[9];
		}

		svgCoverLayer.addClass('is-animating');
		svgPath.attr('d', path1);
		svgPath.animate({'d': path2}, duration, firstCustomMinaAnimation, function(){
			svgPath.animate({'d': path3}, duration, secondCustomMinaAnimation, function(){
				oldSlide.removeClass('visible');
				newSlide.addClass('visible');
				updateNavSlide(newSlide, sliderNavigation);
				setTimeout(function(){
					svgPath.animate({'d': path4}, duration, firstCustomMinaAnimation, function(){
						svgPath.animate({'d': path5}, duration, secondCustomMinaAnimation, function(){
							svgCoverLayer.removeClass('is-animating');
						});
					});
				}, delay);
			});
		});
	}

	function updateNavSlide(actualSlide, sliderNavigation) {
		var position = actualSlide.index();
		sliderNavigation.removeClass('selected').eq(position).addClass('selected');
	}

	function bezier(x1, y1, x2, y2, epsilon){
		//https://github.com/arian/cubic-bezier
		var curveX = function(t){
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function(t){
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function(t){
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
		};

		return function(t){

			var x = t, t0, t1, t2, x2, d2, i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++){
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			t0 = 0, t1 = 1, t2 = x;

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1){
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}

			// Failure
			return curveY(t2);

		};
	};

	$('.cd-slider-wrapper').hover(function(){
		$(this).removeClass("animated");
	}, function() {
		$(this).addClass("animated");
	});

	function loopSlider() { 
		setTimeout(function () {
			var selected = $('.cd-slider-navigation li.selected');
			if($('.cd-slider-wrapper').hasClass('animated')) {
				if(selected.index() == 3) {
					$('.cd-slider-navigation li:first-child').trigger('click');
				} else {
					selected.next().trigger('click');
				}	
			}
			
			loopSlider();
		}, 8500); 

		setTimeout(function() {
		var selectedquote = $('.quotes blockquote.active');
		if(selectedquote.index() == $('.quotes blockquote').size() - 1) {
			$('.quotes blockquote').removeClass('active');
			$('.quotes blockquote:first-child').addClass('active');
		} else {
			$('.quotes blockquote').removeClass('active');
			selectedquote.next().addClass('active');
		}
		}, 300);
		$('.quotes').animate({opacity : 0}, 200).delay(800).animate({ opacity : 1 }, 200);
	}

	setTimeout(function () {
		loopSlider();
	}, 5000);


	$('#contact-form').submit(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		$.ajax({
			type: "POST",
			url: 'emailme.php',
			data: $(this).serialize(),
			success: function(response) {
				$('.ui.basic.modal').modal('show');
				$('#contact-form')[0].reset();
			}
		});

		return false;
	});

	$('#modal-contact-form').submit(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		$.ajax({
			type: "POST",
			url: 'emailme.php',
			data: $(this).serialize(),
			success: function(response) {
				$('.ui.basic.modal').modal('show');
				$('#modal-contact-form')[0].reset();
			}
		});

		return false;
	});

	$('body').on('submit', '#reviews-form', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		$.ajax({
			type: "POST",
			url: 'emailme.php',
			data: $(this).serialize(),
			success: function(response) {
				$('.ui.basic.modal').modal('show');
				$('#contact-form')[0].reset();
			}
		});

		return false;
	});


});