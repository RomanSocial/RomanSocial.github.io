$(function () {


	$('.hamburger-toggle').click(function(){
    var hamburgerWidth = parseInt($('.hamburger-menu__list').css('width'));

    $(this).toggleClass('open');

    if (hamburgerWidth === 0) {
        $('.hamburger-menu__list').css('width', 250);
    }  else {
        $('.hamburger-menu__list').css('width', 0);
    };
});


	$('.hamburger-menu__closebtn').on('click', function () {
		$('.hamburger-menu__list').css('width', 0);
	});


});
