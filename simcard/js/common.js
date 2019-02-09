$(function() {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function () {
		$(this).toggleClass('open');
		$('.hamburger-menu').toggleClass('menu-open');
	});
	//  Кнопка формы
	$('.form-side__button').click(function () {
		$(this).toggleClass('open');
		$('.hamburger-menu').toggleClass('menu-open');
	});

});
