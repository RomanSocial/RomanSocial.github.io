$(function () {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.hamburger-menu').toggleClass('menu-open');
	});

	//Карусель отзывов
	$('.c-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		navContainer: ".c-slider__navigation",
	})
	var owl = $('.c-slider');
	owl.owlCarousel();
	$('.c-slider__prev').click(function () {
		owl.trigger('prev.owl.carousel');
	})
	$('.c-slider__next').click(function () {
		owl.trigger('next.owl.carousel');
	})

	$('#sale-1st-timer').countdown('2019/05/05', function (event) {
		var $this = $(this).html(event.strftime(''
			+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});
	$('#sale-2st-timer').countdown('2019/05/05', function (event) {
		var $this = $(this).html(event.strftime(''
			+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});
	$('#gift-1st-timer').countdown('2019/05/05', function (event) {
		var $this = $(this).html(event.strftime(''
			+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>'
			+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});

	// Поп-ап окно Форма
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		mainClass: 'mfp-fade',
		midClick: true
	});

	// Плавный скрол
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		// bl_top = $(target).offset().top - 100; если нужен отступ, когда есть фикс меню
		$('body, html').animate({ scrollTop: bl_top }, 700);
		return false;
	});

	// Всплывающее видео
	$('.ad-video__button').magnificPopup({
		type: 'iframe',

		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
			},
			srcAction: 'iframe_src',
		}
	});

});
