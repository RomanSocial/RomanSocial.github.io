$(function () {

	$(document).ready(function () {
		$('.main-carousel').owlCarousel({
			loop: true,
			items: 1,
			autoplay: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 2000,
			nav: true,
			dots: false,
			navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
			navContainer: false,
		});
	});

	$('.main-sup_title').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace('Pahu Design', '<span>Pahu Design</span>'))
	});
	$('.title').each(function () {
		$('.title').append('<span class="title__rhomb"></span>')
	});

	$('.projects-carousel').owlCarousel({
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		dots: false,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		navContainer: false,
		responsive: {
			0: {
				items: 1,
			},
			450: {
				items: 2,
			},
			769: {
				items: 4,
			},
		}

	});

	$('.hamburger').on('click', function (e) {
		$('.hamburger').toggleClass('hamburger--active');
		$('.top-nav').toggleClass('is-show');
		$('.top-line').toggleClass('fixed');
		$('.main').toggleClass('mt-100');
		$('.body').toggleClass('overflow-yh');
		e.preventDefault();
	});

	$('.top-nav_item').on('click', function (e) {
		$('.hamburger').removeClass('hamburger--active');
		$('.top-nav').removeClass('is-show');
		$('.top-line').removeClass('fixed');
		$('.main').removeClass('mt-100');
		$('.body').removeClass('overflow-yh');
		e.preventDefault();
	});

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		// bl_top = $(target).offset().top - 100; если нужен отступ, когда есть фикс меню
		$('body, html').animate({ scrollTop: bl_top }, 700);
		return false;
	});

	$(document).scroll(function () {
		if ($(document).scrollTop() > $('.header').height() - 5)
			$('.top-line').addClass('fixed-menu');
		else
			$('.top-line').removeClass('fixed-menu');
	});

	$(document).ready(function () {
		var scrollLink = $('.scroll');

		$(window).scroll(function () {
			var scrollbarLocation = $(this).scrollTop();

			scrollLink.each(function () {

				var sectionOffset = $(this.hash).offset().top - 20;

				if (sectionOffset <= scrollbarLocation) {
					$(this).parent().addClass('nav_active');
					$(this).parent().siblings().removeClass('nav_active');
				}
			});
		});
	});

	// Поиск открыть и закрыть
	$(".search").click(function () {
		$('.search-modal').addClass("search-modal--show");
	});
	$(".search-modal__close").click(function () {
		$('.search-modal').removeClass("search-modal--show");
	});

	// Корзина открыть и закрыть
	$(".cart").click(function (e) {
		$('.cart-modal').addClass("cart-modal--show");
		e.preventDefault();
	});
	$(".cart-modal__close").click(function (e) {
		$('.cart-modal').removeClass("cart-modal--show");
		e.preventDefault();
	});

});