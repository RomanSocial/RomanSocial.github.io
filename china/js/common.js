$(function () {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.hamburger-menu__list').toggleClass('open');
	});
	// $('.hamburger-toggle').click(function (e) {
	// 	e.preventDefault();
	// 	$(this).toggleClass('open');
	// 	$('.hamburger-menu').toggleClass('menu-open');
	// });

	// Кнопка в выезжающем меню
	$('.hamburger-menu__closebtn').on('click', function () {
		$('.hamburger-menu__list').removeClass('open');
		$('.hamburger-toggle').removeClass('open');
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

	// Google Карта
	var myLatlng = new google.maps.LatLng(55.617464, 37.715743);
	var mapOptions = {
		zoom: 17,
		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		title: "RealOPT"
	});
	marker.setMap(map);

	// Объявление попап-функций. Плагин Magnific Popup
	var openSucsessPopup = function () {
		$.magnificPopup.open({
			items: { src: '#sucsess-popup' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	};

	var openFailPopup = function () {
		$.magnificPopup.open({
			items: { src: '#fail-popup' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	};

	// Проверка форм
	$('#sale-form-1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email"
			},
			text: "Поле обязательно к заполнению",
		}
	});

	// Функции отслеживания событий
	var submitListener1 = function () {
		$('#sale-form-1').on("submit", sendAjax);
	};

	// Функция сброса формы.
	var resetForm1 = function () {
		$('#sale-form-1').trigger('reset');
	};

	// Аяксовая отправка форм.
	var sendAjax = function (event) {
		event.preventDefault();
		var submitButton = $('#sale-form-1').find('input[type="submit"]');
		submitButton.attr('disabled', '');
		var
			form = $('#sale-form-1'),
			url = form.attr('action'),
			data = form.serialize(),
			result = $.ajax({
				url: "mailer/smart.php",
				type: 'POST',
				data: data
			})
				.done(function () {
					console.log("sucsess");
					openSucsessPopup();
					resetForm1();
				})
				.fail(function () {
					console.log("error");
					openFailPopup();
				})
				.always(function () {
					submitButton.removeAttr('disabled');
				});
	};

	// Инилизация функций.
	submitListener1();

	// Проверка форм
	$('.sale__calculation').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email"
			},
		}
	});

	// Функция сброса формы.
	var resetForm2 = function () {
		$('#sale-form-2').trigger('reset');
	};

	// Функции отслеживания событий
	var submitListener2 = function () {
		$('#sale-form-2').on("submit", sendAjax);
	};

	// Аяксовая отправка форм.
	var sendAjax = function (event) {
		event.preventDefault();
		var submitButton = $('#sale-form-2').find('input[type="submit"]');
		submitButton.attr('disabled', '');
		var
			form = $('#sale-form-2'),
			url = form.attr('action'),
			data = form.serialize(),
			result = $.ajax({
				url: "mailer/smart.php",
				type: 'POST',
				data: data
			})
				.done(function () {
					console.log("sucsess");
					openSucsessPopup();
					resetForm2();
				})
				.fail(function () {
					console.log("error");
					openFailPopup();
				})
				.always(function () {
					submitButton.removeAttr('disabled');
				});
	};

	// Инилизация функций.
	submitListener2();

	// Проверка форм
	$('#sale-form-3').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
			},
			text: {
				required: true,
			},
			date: {
				required: true,
			},
			time: {
				required: true,
			}
		},
		messages: {
			email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email"
			},
		}
	});

	// Функция сброса формы.
	var resetForm3 = function () {
		$('#sale-form-3').trigger('reset');
	};

	// Функции отслеживания событий
	var submitListener3 = function () {
		$('#sale-form-3').on("submit", sendAjax);
	};

	// Аяксовая отправка форм.
	var sendAjax = function (event) {
		event.preventDefault();
		var submitButton = $('#sale-form-3').find('input[type="submit"]');
		submitButton.attr('disabled', '');
		var
			form = $('#sale-form-3'),
			url = form.attr('action'),
			data = form.serialize(),
			result = $.ajax({
				url: "mailer/smart.php",
				type: 'POST',
				data: data
			})
				.done(function () {
					console.log("sucsess");
					openSucsessPopup();
					resetForm3();
				})
				.fail(function () {
					console.log("error");
					openFailPopup();
				})
				.always(function () {
					submitButton.removeAttr('disabled');
				});
	};
	// Инилизация функций.
	submitListener3();



	// Оповещения о окончании времени
	// 10 минут
	var open10minPopup = function () {
		$.magnificPopup.open({
			items: { src: '#10min-timer' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	};
	// 5 минут
	var open5minPopup = function () {
		$.magnificPopup.open({
			items: { src: '#5min-timer' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	};
	// 3 минут
	var open3minPopup = function () {
		$.magnificPopup.open({
			items: { src: '#3min-timer' },
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	};



	// Таймер с подарком 
	// $('#clock').countdown('2019/04/10 10:29:25')
	// 	.on('update.countdown', function (event) {
	// 		var format = '%H:%M:%S';
	// 		if (event.offset.totalSeconds == 659) {
	// 			open10minPopup();
	// 		}
	// 		if (event.offset.totalSeconds === 359) {
	// 			open5minPopup();
	// 		}
	// 		if (event.offset.totalSeconds === 240) {
	// 			open3minPopup();
	// 		}
	// 		if (event.offset.totalDays > 0) {
	// 			format = '%-d day%!d ' + format;
	// 		}
	// 		if (event.offset.weeks > 0) {
	// 			format = '%-w week%!w ' + format;
	// 		}
	// 		$(this).html(event.strftime(format));
	// 	})
	// 	.on('finish.countdown', function (event) {
	// 		openFailPopup();
	// 	});

	// Задача: Взять время с сервера
	// get the current time when button clicked
	// var currentTime = moment();
	// // add 25 minutes for interval
	// var timerInterval = moment(currentTime).add(25, 's');
	// // format interval
	// var timerIntervalFormatted = moment(timerInterval).format('YYYY/MM/DD HH:mm:ss');
	// // start the 25 minute timer and at the end popup two buttons for breaks
	// $timer.removeClass('is-countdown').html('').countdown({
	// 	until: timerInterval._d,
	// 	onExpiry: function () {
	// 		$timerButtons.toggleClass('break');
	// 	}
	// });




});
