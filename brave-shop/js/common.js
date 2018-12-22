$(function () {

	// Main-slider главный слайдер
	$('.main-slider').owlCarousel({
		loop: true,
		nav: true,
		navText: [$('.main-slider__prev'), $('.main-slider__next')],
		items: 1,
	});

	// Поиск открыть и закрыть
	$(".search").click(function () {
		$('.search-modal').addClass("search-modal--show");
	});
	$(".search-modal__close").click(function () {
		$('.search-modal').removeClass("search-modal--show");
	});

	// featured-products слайдер
	$('.featured-products').owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		dots: false,
		navText: [$('.featured-products__prev'), $('.featured-products__next')],
		items: 5,
	});

	// best-deals слайдер
	$('.best-deals').owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		dots: false,
		navText: [$('.best-deals__prev'), $('.best-deals__next')],
		items: 2,
	});

	// New products слайдер
	$('.new-products').owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		dots: false,
		navText: [$('.new-products__prev'), $('.new-products__next')],
		items: 2,
	});

	// Popular products слайдер
	$('.popular-products').owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		dots: false,
		navText: [$('.popular-products__prev'), $('.popular-products__next')],
		items: 2,
	});

	// Popular products слайдер
	$('.brand-slider').owlCarousel({
		loop: true,
		margin: 18,
		nav: true,
		navText: [$('.brand-slider__prev'), $('.brand-slider__next')],
		dots: false,
		items: 6,
	});

	// Quantity выбор кол-ва предметов в корзину
	$(".quantity-adder .add-action").click(function () {
		if ($(this).hasClass('add-up')) {
			var text = $(this).parent().parent().parent().find("[name=quantity]", '.quantity-adder')
			text.val(parseInt(text.val()) + 1);
		} else {
			var text = $(this).parent().parent().parent().find("[name=quantity]", '.quantity-adder')
			if (parseInt(text.val()) > 1) {
				text.val(parseInt(text.val()) - 1);
			}
		}
	});

	// Таймер обратного отсчета дней
	// Вино
	$(".sale-timer__vine")
  .countdown("2018/12/01", function(event) {
    $('.sale-timer__vine--days').text(
      event.strftime('%D Дней')
    );
    $('.sale-timer__vine--hours').text(
      event.strftime('%H Часов')
    );
    $('.sale-timer__vine--minutes').text(
      event.strftime('%M Минут')
    );
    $('.sale-timer__vine--second').text(
      event.strftime('%S Секунд')
    );
	});
	// Шоколад
	$(".sale-timer__choco")
  .countdown("2018/11/01", function(event) {
    $('.sale-timer__choco--days').text(
      event.strftime('%D Дней')
    );
    $('.sale-timer__choco--hours').text(
      event.strftime('%H Часов')
    );
    $('.sale-timer__choco--minutes').text(
      event.strftime('%M Минут')
    );
    $('.sale-timer__choco--second').text(
      event.strftime('%S Секунд')
    );
  });
	// Кофе
	$(".sale-timer__coffe")
  .countdown("2018/10/01", function(event) {
    $('.sale-timer__coffe--days').text(
      event.strftime('%D Дней')
    );
    $('.sale-timer__coffe--hours').text(
      event.strftime('%H Часов')
    );
    $('.sale-timer__coffe--minutes').text(
      event.strftime('%M Минут')
    );
    $('.sale-timer__coffe--second').text(
      event.strftime('%S Секунд')
    );
	});

})


