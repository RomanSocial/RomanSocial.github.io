$(function () {

	//  Гамбургер открывашка
	$('#hamburger-toggle').click(function (e) {
		e.preventDefault();
		$('.hamburger-toggle').toggleClass('open');
		$('.sub-menu').toggleClass('sub-menu--open');
	});

	// Открывашка информации и валюты
	$('#info').click(function (e) {
		e.preventDefault();
		$('.info__list').toggleClass('info--open');
		$('.info__icon').toggleClass('info__icon--open');
	});
	$('#currency').click(function (e) {
		e.preventDefault();
		$('.currency__list').toggleClass('currency--open');
		$('.currency__icon').toggleClass('currency__icon--open');
	});

	// Magnific окна
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	// Кнопка закрытия Magnific
	$('#scm-header__close').click(function () {
		$.magnificPopup.close();
	});

	// Таймер
	$('#ms-timer__timer').countdown('2019/05/17', function (event) {
		var $this = $(this).html(event.strftime(''
			// + '<span>%w</span> weeks '
			+ '<span class="ms-timer__count">%D</span> <span class="ms-timer__text">Дней</span> '
			+ '<span class="ms-timer__count">%H</span> <span class="ms-timer__text">Часов</span> '
			+ '<span class="ms-timer__count">%M</span> <span class="ms-timer__text">Минут</span> '
			// + '<span>%S</span> sec'
		));
	});

	// Слайдер на главном экране
	var owl = $('.main-slider');
	owl.owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		items: 1,
	});
	// Go to the next item
	$('.ms-nav__next').click(function () {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.ms-nav__prev').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel');
	})

	// Аккардион
	$( "#i-accordion" ).accordion();

});
