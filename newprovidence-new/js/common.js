$(function () {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function () {
		var hamburgerWidth = parseInt($('.hamburger-menu__list').css('width'));

		$(this).toggleClass('open');

		if (hamburgerWidth === 0) {
			$('.hamburger-menu__list').css('width', 250);
		} else {
			$('.hamburger-menu__list').css('width', 0);
		};
	});

	// Кнопка в выезжающем меню
	$('.hamburger-menu__closebtn').on('click', function () {
		$('.hamburger-menu__list').css('width', 0);
		$('.hamburger-toggle').removeClass('open');
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
