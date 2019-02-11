$(function() {

	//  Гамбургер открывашка
	$('.hamburger-toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.hamburger-menu').toggleClass('menu-open');
	});
	//  Кнопка формы
	$('.form-side__sticker').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $('.form-side').toggleClass('form-side--open');
  });

});
