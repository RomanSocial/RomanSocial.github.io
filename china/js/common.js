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

	$('#sale-1st-timer').countdown('2019/05/05', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});
	$('#sale-2st-timer').countdown('2019/05/05', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});
	$('#gift-1st-timer').countdown('2019/05/05', function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>' 
		+ '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'));
	});

});
