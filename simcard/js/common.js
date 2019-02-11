$(function() {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function () {
		$(this).toggleClass('open');
		$('.hamburger-menu').toggleClass('menu-open');
	});
	//  Кнопка формы
	$('.form-side__sticker').click(function () {
		$(this).toggleClass('open');
		$('.form-side').toggleClass('form-side--open');
	});

});
