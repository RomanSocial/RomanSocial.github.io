$(function () {

	$('.product-show').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.hash-nav'
	});
	$('.hash-nav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product-show',
		dots: false,
		// centerMode: true,
		// centerPadding: '20px',
		focusOnSelect: true,
		prevArrow: $('.news-navigation__prev'),
		nextArrow: $('.news-navigation__next'),
	});

	$('.shop-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.shop-hash'
	});
	$('.shop-hash').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.shop-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: $('.shop-navigation__prev'),
		nextArrow: $('.shop-navigation__next'),
	});

	$(".js-range-form__weight").ionRangeSlider({
		postfix: " т",
		skin: "flat",
		type: "single",
		step: 5,
		min: 0,
		max: 20,
		from: 5,
		to: 20,
		grid: true,
	});

	$(".js-range-form__sale").ionRangeSlider({
		postfix: " %",
		skin: "flat",
		type: "single",
		step: 5,
		min: 0,
		max: 100,
		from: 5,
		to: 5,
		grid: true,
	});

});
