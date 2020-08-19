jQuery(document).ready(function($){

	function reload_cart() {
		$.ajax({
	        url: MyAjax.ajaxurl, 
	        type: 'POST',
	        dataType: 'json',
	        data: {
	            'action': 'reload_cart',
	        },
	        success: data => {
	            $('.basket_wrapper .basket .basket_main .basket_main_content').empty();
	            $('.basket_wrapper .basket .basket_main .basket_main_buy .basket_main_buy_cost .green').empty();
	            $('.basket_wrapper .basket .basket_main .basket_main_content').append(data['html']);
	            $('.basket_wrapper .basket .basket_main .basket_main_buy .basket_main_buy_cost .green').append(data['total']);
	            if (data['cart_empty'] == 1) {
	            	$('.basket_wrapper .basket .basket_main .basket_main_buy #checkout').css('display', 'none');
	            } else {
	            	$('.basket_wrapper .basket .basket_main .basket_main_buy #checkout').css('display', 'block');
	            }
	        },
	        error: function(jqXHR, exception) {
				if (jqXHR.status === 0) {
					console.log('Not connect.n Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (exception === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					console.log('Time out error.');
				} else if (exception === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error.n' + jqXHR.responseText);
				}
			}
	    });
	} 

	reload_cart();

	function EditProductQuantity(quantity, product_id, variation_id, key) {
    	$.ajax({
			url: MyAjax.ajaxurl,
			type: 'post',
			data: {
	            'action': 'EditProductQuantity',
	            'quantity' : quantity,
	            'product_id' : product_id,
	            'variation_id' : variation_id,
	            'key' : key,
	        },
			dataType: 'json',
			success: data => {
				reload_cart();
				$('.cart_wrapper .cart_svg p.cart_count').text(data['count']);
	        	$('.cart_wrapper .cart p.green').html(data['total']);
			},
			error: function(jqXHR, exception) {
				if (jqXHR.status === 0) {
					console.log('Not connect.n Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (exception === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					console.log('Time out error.');
				} else if (exception === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error.n' + jqXHR.responseText);
				}
			}
		});
    }

	$(document).on('click', '.basket_wrapper .number-input button.minus', function(e){
		e.preventDefault();
        var input = $(this).parent().find('input[type=number]');
        if ((parseInt(input.val()) - 1) >= 1) {
	        var quantity = parseInt(input.val()) - 1,
	        	product_id = $(this).parent().find('input[type=number]').data('prod_id'),
	        	variation_id = $(this).parent().find('input[type=number]').data('var_id'),
	        	key = $(this).parent().find('input[type=number]').data('key');
        	EditProductQuantity(quantity, product_id, variation_id, key);
		}
    });

    $(document).on('click', '.basket_wrapper .number-input button.plus', function(e){
    	e.preventDefault();
        var input = $(this).parent().find('input[type=number]');
        var quantity = parseInt(input.val()) + 1,
        	product_id = $(this).parent().find('input[type=number]').data('prod_id'),
        	variation_id = $(this).parent().find('input[type=number]').data('var_id'),
        	key = $(this).parent().find('input[type=number]').data('key');
    	EditProductQuantity(quantity, product_id, variation_id, key);
    });

    $(document).on('change', '.basket_wrapper .number-input input[type=number]', function(e){
    	e.preventDefault();
    	if ($(this).val()) {
	        var quantity = parseInt($(this).val()),
	        	product_id = $(this).parent().find('input[type=number]').data('prod_id'),
	        	variation_id = $(this).parent().find('input[type=number]').data('var_id'),
	        	key = $(this).parent().find('input[type=number]').data('key');
	        EditProductQuantity(quantity, product_id, variation_id, key);
    	}
    });

    $(document).on('click', '.basket_wrapper .basket .basket_main .basket_main_content .basket_main_content_item .delete', function(e){
    	e.preventDefault();
    	if (confirm('Вы впевнені?')) {
	        var quantity = 0,
	        	product_id = $(this).parents('.basket_main_content_item').find('.number-input input[type=number]').data('prod_id'),
	        	variation_id = $(this).parents('.basket_main_content_item').find('.number-input input[type=number]').data('var_id'),
	        	key = $(this).parents('.basket_main_content_item').find('.number-input input[type=number]').data('key');
	        EditProductQuantity(quantity, product_id, variation_id, key);
	    }
    });

	$('form#user_send_mess').on('submit', function(e){
		e.preventDefault();

		var validation = true,
			name = $(this).find('input[name=name]'),
			phone = $(this).find('input[name=phone]'),
			email = $(this).find('input[name=email]'),
			errors = $(this).find('.error'),
			generateError = function() {
		        var error = document.createElement('div');
		        error.className = 'error';
		        error.style.color = 'red';
		        error.innerHTML = "Дані введені не правильно";
		        return error;
		    }

        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
        if (!$(name).val().match(/\D{3,10}/)) {
            var error = generateError();
            $(name).addClass('invalid');
            $(error).insertAfter(name);
            validation = false;
        } else {
            $(name).removeClass('invalid');
            $(name).addClass('valid');
        }

        if (!$(phone).val().match(/^\+380?\(\d{2}\)-\d{3}-\d{2}-\d{2}$/)) {
            var error = generateError();
            $(phone).addClass('invalid');
            $(error).insertAfter(phone);
            validation = false;
        } else {
            $(phone).removeClass('invalid');
            $(phone).addClass('valid');
        }

        if (!$(email).val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            console.log('email');
            var error = generateError();
            $(email).addClass('invalid');
            $(error).insertAfter(email);
            validation = false;
        } else {
            $(email).removeClass('invalid');
            $(email).addClass('valid');
        }
        if (validation == true) {
			var data = new FormData($(this).get(0)),
				butt = $(this).find('button[type=submit]').text(),
				obj = $(this);
			data.append('action', 'contact_form');

			$.ajax({
		        url: MyAjax.ajaxurl,
				type: "POST",
				data: data,
				processData: false,
				contentType: false,
		        success: data => {
		        	obj.find('button[type=submit]').css('background', '#13ae37');
		        	obj.find('button[type=submit]').text(obj.find('button[type=submit]').data('butt'));
		        	setTimeout(function(){
		        		obj.find('button[type=submit]').css('background', '#13AEAB');
		        		obj.find('button[type=submit]').text(butt);
		        		obj.trigger('reset');
					}, 3000);
		        },
		        error: function(jqXHR, exception) {
					if (jqXHR.status === 0) {
						console.log('Not connect.n Verify Network.');
					} else if (jqXHR.status == 404) {
						console.log('Requested page not found. [404]');
					} else if (jqXHR.status == 500) {
						console.log('Internal Server Error [500].');
					} else if (exception === 'parsererror') {
						console.log('Requested JSON parse failed.');
					} else if (exception === 'timeout') {
						console.log('Time out error.');
					} else if (exception === 'abort') {
						console.log('Ajax request aborted.');
					} else {
						console.log('Uncaught Error.n' + jqXHR.responseText);
					}
				}
		    }); 
		}
	});

	$(document).on('submit', 'form.add_to_cart', function(e){
    	e.preventDefault();
		var data = new FormData($(this).get(0)),
			obj = $(this);
		data.append('action', 'add_to_cart');

		$.ajax({
	        url: MyAjax.ajaxurl,
			type: "POST",
			data: data,
			processData: false,
			contentType: false,
			dataType: 'json',
	        success: data => {
	        	console.log(data);
	        	if (data['error'] == 0) {
		        	obj.trigger('reset');
		        	$('.cart_wrapper .cart_svg p.cart_count').text(data['count']);
		        	$('.cart_wrapper .cart p.green').html(data['total']);
		        	obj.find('button[type=submit]').css('background', '#13ae37').find('svg path:nth-child(2)').css('fill', '#13ae37');
		        	obj.css('pointer-events', 'none');
		        	setTimeout(function(){
		        		obj.find('button[type=submit]').css('background', '#13AEAB').find('svg path:nth-child(2)').css('fill', '#13AEAB');
		        		obj.find('span.cost').empty();
		        		obj.css('pointer-events', 'unset');	
					}, 3000);
					reload_cart();
			        $('.card_popup').fadeOut();
			        $('.checkout_popup').fadeOut();
			        $('.payment_popup').fadeOut();
			        $('.accepted_popup').fadeOut();
			        $('.fine_cup').addClass("hidescroll");
			        $('.basket_popup').fadeIn();
			        $('.popup_wrapper').fadeIn();
		        } else {
		        	obj.find('.radio .label').css('border-color', '#ff5b5b');
		        }
	        },
	        error: function(jqXHR, exception) {
				if (jqXHR.status === 0) {
					console.log('Not connect.n Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (exception === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					console.log('Time out error.');
				} else if (exception === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error.n' + jqXHR.responseText);
				}
			}
	    }); 
    });

    $(document).on('change', 'form.add_to_cart input[type=checkbox]', function(e){
    	e.preventDefault();
		var data = new FormData($(this).parents('form').get(0)),
			obj = $(this);
		data.append('action', 'set_variation_for_button');

		$.ajax({
	        url: MyAjax.ajaxurl,
			type: "POST",
			data: data,
			processData: false,
			contentType: false,
			dataType: 'json',
	        success: data => {
	        	if (data != 0) {
		        	obj.parents('form').find('.radio .label').css('border-color', '#BDC6CF');
		        	obj.parents('form').find('span.cost').empty();
		        	obj.parents('form').find('span.cost').append(data);
	        	} else {
		        	obj.parents('form').find('span.cost').empty();
	        	}
	        },
	        error: function(jqXHR, exception) {
				if (jqXHR.status === 0) {
					console.log('Not connect.n Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (exception === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					console.log('Time out error.');
				} else if (exception === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error.n' + jqXHR.responseText);
				}
			}
	    }); 
    });

    $(document).on('change', '.checkout_main_right_payment input[type=radio]', function(e){
    	e.preventDefault();
		$(this).parents('.checkout_main_right').find('button#payment').text($(this).data('butt'));
    });

    $(document).on('change', '.checkout_main_left_delivery input[type=radio]', function(e){
    	e.preventDefault();
		if ($(this).val() == ' Самовивіз') {
			$(this).parents('form#create_new_order').find('input[name=address]').val('');
			$(this).parents('form#create_new_order').find('input[name=address]').css('display', 'none');
		} else {
			$(this).parents('form#create_new_order').find('input[name=address]').css('display', 'block');
		}
    });

    $('.fine_cup .cart_wrapper .cart_svg, .fine_cup .cart_wrapper .green').on('click', function(e) {
        e.preventDefault();
        reload_cart();
        $('.checkout_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.accepted_popup').fadeOut();
        $('.fine_cup').toggleClass("hidescroll");
        $('.basket_popup').fadeIn();
        $('.popup_wrapper').fadeIn();
    });

    $('.fine_cup .store_wrapper .store_card .store_card_img, .fine_cup .store_wrapper .store_card .store_card_description').on('click', function(e) {
        e.preventDefault();

        $.ajax({
	        url: MyAjax.ajaxurl, 
	        type: 'POST',
	        dataType: 'json',
	        data: {
	            'action': 'reload_product_popup',
	            'product_id': $(this).parents('.store_card').data('product_id'),
	        },
	        success: data => {
	            $('.owl-tanants').owlCarousel('destroy');
	            $('.fine_cup').toggleClass("hidescroll");
		        $('.basket_popup').fadeOut();
		        $('.video_popup').fadeOut();
		        $('.checkout_popup').fadeOut();
		        $('.payment_popup').fadeOut();
		        $('.accepted_popup').fadeOut();
		        $('.card_popup').empty();
		        $('.card_popup').append(data);
		        $(".owl_carousel2").owlCarousel({
			        nav: true,
			        items: 1,
			        autoWidth: true,
			    });
		        $('.card_popup').fadeIn();
		        $('.popup_wrapper').fadeIn();
	        },
	        error: function(jqXHR, exception) {
				if (jqXHR.status === 0) {
					console.log('Not connect.n Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found. [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (exception === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (exception === 'timeout') {
					console.log('Time out error.');
				} else if (exception === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error.n' + jqXHR.responseText);
				}
			}
	    });
    });

    $('#checkout').on('click', function() {
    	$('.checkout_popup .basket_main_buy .green').html($(this).parents('.basket_main_buy').find('.green').html());
        $('.card_popup').fadeOut();
        $('.video_popup').fadeOut();
        $('.basket_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.accepted_popup').fadeOut();
        $('.fine_cup').addClass("hidescroll");
        $('.checkout_popup').fadeToggle();
    });

    $(document).on('submit', 'form#create_new_order', function(e){
    	e.preventDefault();

    	var validation = true,
			name = $(this).find('input[name=name]'),
			phone = $(this).find('input[name=phone]'),
			email = $(this).find('input[name=email]'),
			address = $(this).find('input[name=address]'),
			errors = $(this).find('.error'),
			generateError = function() {
		        var error = document.createElement('div');
		        error.className = 'error';
		        error.style.color = 'red';
		        error.innerHTML = "Дані введені не правильно";
		        return error;
		    }

        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
        if (!$(name).val().match(/\D{3,10}/)) {
            var error = generateError();
            $(name).addClass('invalid');
            $(error).insertAfter(name);
            validation = false;
        } else {
            $(name).removeClass('invalid');
            $(name).addClass('valid');
        }

        if (!$(phone).val().match(/^\+380?\(\d{2}\)-\d{3}-\d{2}-\d{2}$/)) {
            var error = generateError();
            $(phone).addClass('invalid');
            $(error).insertAfter(phone);
            validation = false;
        } else {
            $(phone).removeClass('invalid');
            $(phone).addClass('valid');
        }

        if (!$(email).val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            var error = generateError();
            $(email).addClass('invalid');
            $(error).insertAfter(email);
            validation = false;
        } else {
            $(email).removeClass('invalid');
            $(email).addClass('valid');
        }
        if ($(this).find('input[name=delivery]').is(':checked') && $(this).find('input[name=delivery]:checked').val() != ' Самовивіз') {
        	console.log($(this).find('input[name=delivery]:checked').val());
        	if (address.val() == '') {
        		var error = generateError();
	            $(address).addClass('invalid');
	            $(error).insertAfter(address);
	            validation = false;
        	} else {
        		$(address).removeClass('invalid');
            	$(address).addClass('valid');
        	}
        } else {
        	$(address).removeClass('invalid');
        	$(address).addClass('valid');
        }

        if (validation == true) {
			var data = new FormData($(this).get(0)),
				pay = $(this).find('input[name=payment_method]:checked').data('title');
				obj = $(this);
			data.append('action', 'create_new_order');
			data.append('pay_title', pay);

			$.ajax({
		        url: MyAjax.ajaxurl,
				type: "POST",
				data: data,
				processData: false,
				contentType: false,
				dataType: 'json',
		        success: data => {
		        	console.log(data);
		        	if (data['error'] != '' && data['error'] != undefined && data['error'] != null) {
		        		if (data['error'] != 'delivery') {
		        			obj.find('.checkout_main_left_delivery .label').css('border-color', '#BDC6CF');
		        		}
		        		obj.find('input[name='+data['error']+']').parent().find('.label').css('border-color', '#ff5b5b');
		        	} else {
		        		obj.find('input[type=radio]').parent().find('.label').css('border-color', '#BDC6CF');
		        		obj.trigger('reset');
		        		if (data['payment_method'] != 'cod') {
		        			$('.payment_popup #accepted').attr('href', data['payment_url']);
		        			$('.payment_popup .payment_main_check').html(data['html']);
		        			$('.payment_popup .basket_main_buy_cost .green').html(data['total_old']);
		        			$('.card_popup').fadeOut();
					        $('.video_popup').fadeOut();
					        $('.basket_popup').fadeOut();
					        $('.checkout_popup').fadeOut();
					        $('.accepted_popup').fadeOut();
					        $('.fine_cup').addClass("hidescroll");
					        $('.payment_popup').fadeToggle();
		        		} else {
		        			$('.card_popup').fadeOut();
					        $('.video_popup').fadeOut();
					        $('.basket_popup').fadeOut();
					        $('.checkout_popup').fadeOut();
					        $('.payment_popup').fadeOut();
					        $('.fine_cup').addClass("hidescroll");
					        $('.accepted_popup').fadeToggle();
		        		}

		        		$('.cart_wrapper .cart_svg p.cart_count').text(data['count']);
		        		$('.cart_wrapper .cart p.green').html(data['total']);
		        	}

		        },
		        error: function(jqXHR, exception) {
					if (jqXHR.status === 0) {
						console.log('Not connect.n Verify Network.');
					} else if (jqXHR.status == 404) {
						console.log('Requested page not found. [404]');
					} else if (jqXHR.status == 500) {
						console.log('Internal Server Error [500].');
					} else if (exception === 'parsererror') {
						console.log('Requested JSON parse failed.');
					} else if (exception === 'timeout') {
						console.log('Time out error.');
					} else if (exception === 'abort') {
						console.log('Ajax request aborted.');
					} else {
						console.log('Uncaught Error.n' + jqXHR.responseText);
					}
				}
		    });
		} 
    });
});