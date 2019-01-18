$(function () {

	// Открывается видео на главном экране
	$('.main-screen__feedback-video').magnificPopup({
		type: 'iframe',
		iframe: {
		}
	});
	// Открывается форма
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		focus: '#name',
		removalDelay: 300,
		mainClass: 'mfp-zoom-in',
	});

	// $('#pop-up').magnificPopup({
	// 	delegate: 'a',
	// 	removalDelay: 500, //delay removal by X to allow out-animation
	// 	
	// 	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	// });



	// $('.popup-with-form').magnificPopup({
	// 	items: {
	// 		src: $('<div class="form-pop-up" id="form-pop-up"></div>'),
	// 		type: 'inline',
	// 		removalDelay: 500, //delay removal by X to allow out-animation
	// 		callbacks: {
	// 			beforeOpen: function () {
	// 				this.st.mainClass = this.st.el.attr('data-effect');
	// 			}
	// 		},
	// 		midClick: true
	// 	}
	// });

	$(document).scroll(function () {
		if ($(document).scrollTop() > $('.header').height() - 5)
			$('.top-line').addClass('top-line--fixed'),
				$('.header_placeholder').addClass('d-block');
		else
			$('.top-line').removeClass('top-line--fixed'),
				$('.header_placeholder').removeClass('d-block');
	});



});