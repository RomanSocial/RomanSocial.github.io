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
		focusOnSelect: true,
		prevArrow: $('.news-navigation__prev'),
		nextArrow: $('.news-navigation__next'),
		responsive: [
			{
				breakpoint: 1198,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 990,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 759,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
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
		responsive: [
			{
				breakpoint: 1198,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 990,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 770,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
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
