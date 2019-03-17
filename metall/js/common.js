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
		dots: true,
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
		asNavFor: '.shop-navigation'
	});
	$('.shop-navigation').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.shop-slider',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: $('.shop-navigation__prev'),
		nextArrow: $('.shop-navigation__next'),
	});
});
