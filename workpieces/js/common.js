$(function() {

	//  Гамбургер открывашка
	$('#hamburger-toggle').click(function (e) {
		e.preventDefault();
		$('.hamburger-toggle').toggleClass('open');
		$('.sub-menu').toggleClass('sub-menu--open');
	});

	// Открывашка информации и валюты
	$('#info').click(function (e) {
		e.preventDefault();
		$('.info__list').toggleClass('info--open');
	});
	$('#currency').click(function (e) {
		e.preventDefault();
		$('.currency__list').toggleClass('currency--open');
	});

});
