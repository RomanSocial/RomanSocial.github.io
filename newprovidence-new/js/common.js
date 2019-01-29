$(function () {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function () {
		$(this).toggleClass('open');
		$('.hamburger-menu__list').toggleClass('open');
	});

	// Кнопка в выезжающем меню
	$('.hamburger-menu__closebtn').on('click', function () {
		$('.hamburger-menu__list').removeClass('open');
		$('.hamburger-toggle').removeClass('open');
	});

	// Поп-ап окно с видео
	$(document).ready(function () {
		$('.main-screen__button').magnificPopup({
			type: 'iframe',

			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',

				patterns: {
					youtube: {
						index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

						id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }

						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
				},
				srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
			}
		});
		$('.pu-app__link').magnificPopup({
			type: 'inline',
			midClick: true
		});
		$('.pu-send__link').magnificPopup({
			type: 'inline',
			midClick: true
		});
	});

	// Карусель отзывов
	$('.r-comments').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		infinite: false,
		asNavFor: '.r-photos',
	});
	$('.r-photos').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.r-comments',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		arrows: true,
		infinite: false,
		prevArrow: $('.r-photos__prev'),
		nextArrow: $('.r-photos__next'),
	});

	// Рейтинг звездами
	$('.star.rating').click(function () {
		console.log($(this).parent().data('stars') + ", " + $(this).data('rating'));
		$(this).parent().attr('data-stars', $(this).data('rating'));
	});

	// Переключатель плана
	var planToggle = function () {
		var switchWrapper = document.querySelector('.choose-u__wrapper');
		var switchNav = document.querySelector('.choose-u__toggle');
		var profileIndividual = document.querySelector('.choose-u__individual');
		var profileCompany = document.querySelector('.choose-u__company');
		var planStarter = document.querySelector('.plan__starter');
		var planPro = document.querySelector('.plan__pro');

		switchWrapper.addEventListener('click', function (e) {
			if (e.target.classList.contains('choose-u__company')) {
				switchNav.classList.add('choose-u__toggle--active');
				profileIndividual.classList.remove('choose-u__active');
				profileCompany.classList.add('choose-u__active');
				planStarter.classList.remove('plan__active');
				planPro.classList.add('plan__active');
			} else {
				switchNav.classList.remove('choose-u__toggle--active');
				profileIndividual.classList.add('choose-u__active');
				profileCompany.classList.remove('choose-u__active');
				planStarter.classList.add('plan__active');
				planPro.classList.remove('plan__active');
			}
		});
	}();
});
