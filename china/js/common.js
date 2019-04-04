$(function () {

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

});
