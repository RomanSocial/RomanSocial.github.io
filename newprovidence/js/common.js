$(function () {

	var wow = new WOW;
	new WOW().init();

	$(window).on('load', function () {
		$preloader = $('.loaderArea'),
			$loader = $preloader.find('.loader');
		$loader.fadeOut();
		$preloader.delay(350).fadeOut('slow');
	});


	$(".top_mnu ul a").click(function () {
		$(".top_mnu").fadeOut(600);
	}).append($("<span class='top_mnu__hover'>"));


	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
			$(".sandwich").removeClass("active");
			$('body').removeClass('overflow-h');
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
			$(".sandwich").addClass("active");
			$('body').addClass('overflow-h');
		};
	});

	$('.slider').slick({
		arrows: false,
		slidesToScroll: 1,
		autoplay: true,
		draggable: false,
		autoplaySpeed: 1300,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1054,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplaySpeed: 1200,
					infinite: true,
					dots: false
				}
			},
		]
	});

	$('.custom__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.custom__albm'
	});
	$('.custom__albm').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.custom__slider',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button class="slick-arrow slick-next "><i class="fa fa-angle-right"></i></button>',
	});

	$('.starter').on('click', function () {
		$('.starter').toggleClass('card_active');
		$('.Pro').removeClass('card_active');
	});
	$('.Pro').on('click', function () {
		$('.Pro').toggleClass('card_active');
		$('.starter').removeClass('card_active');
	});

	$('input[name=check-slide]').change(function () {
		$('.plan__text_comp').toggleClass('plan__text_active');
		$('.plan__text_indiv').toggleClass('plan__text_active');
	});

	$('.card-xs__starter').on('click', function () {
			$('.card-xs__starter').addClass('card-xs--active');
			$('.card-xs__Pro').removeClass('card-xs--active');
			$('.starter').css({ 'display': 'block', 'opacity': '1' });
			$('.Pro').css({ 'display': 'none', 'opacity': '0' });
	});

	$('.card-xs__Pro').on('click', function () {
			$('.card-xs__Pro').addClass('card-xs--active');
			$('.card-xs__starter').removeClass('card-xs--active');
			$('.Pro').css({ 'display': 'block', 'opacity': '1' });
			$('.starter').css({ 'display': 'none', 'opacity': '0' });
	});

	$(window).resize(function() {
		if ($(window).width() > 576) {
			$('.Pro').css({ 'display': 'block', 'opacity': '1' });
			$('.starter').css({ 'display': 'block', 'opacity': '1' });
		}
	 else {
			
	 }
	});


	$('.social__links_item')
		.mouseover(function () {
			$(this).children().addClass('animated flipInY');
		})
		.mouseout(function () {
			$(this).children().removeClass('animated flipInY');
		});

});


