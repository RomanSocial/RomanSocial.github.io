jQuery(document).ready(function($) {


    const player = new Plyr('video', {
        captions: { active: true },
        controls: [
            'play-large', // The large play button in the center
            'play', // Play/pause playback
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
        ]
    });
    window.player = player;

    $(".owl_carousel").owlCarousel({
        nav: true,
        margin: 5,
        items: 1,
        autoWidth: true,
    });

    $(".owl_carousel2").owlCarousel({
        nav: true,
        margin: 5,
        items: 1,
        autoWidth: true,
    });

    $(".owl_carousel3").owlCarousel({
        margin: 0,
        loop:true,
        items: 3,
        nav: true,
         smartSpeed: 900,
         autoWidth: true,
          responsive:{ //Адаптация в зависимости от разрешения экрана
                        0:{
                            items:1
                        },
                        770:{
                            items:2
                        },
                        1000:{
                            items:3
                        }
                    }
    });

     $(".owl_carousel4").owlCarousel({
        nav: true,
        margin: 0,
        items: 1,
    });

    $('.fine_cup .header_wrap .header .mobile_menu').on('click', function() {
        $('.fine_cup .header_wrap .header .mobile_menu .mobile_memu_btn ').toggleClass('active');
        $('.fine_cup .header_wrap .header nav ').slideToggle();
        $('.fine_cup .main_wrapper .main').fadeToggle();
    });

    $(".faq_one").on('click', function(){
        $(this).toggleClass( "active" );
    });

    $("#open_modal").on('click', function(){
        $("#modal_form").fadeIn();
    });
     $(".callback_modal_close").on('click', function(){
        $(".popup_wrapper").fadeOut();
    });



    // $(document).on('click', '.fine_cup .header_wrap .header nav .menu .menu-item a', function(e) {
    //     $('.fine_cup .header_wrap .header nav').fadeOut();
    //     $('.fine_cup .header_wrap .header .mobile_menu .mobile_memu_btn ').removeClass('active');
    //     $('.fine_cup .main_wrapper .main').fadeIn();

    // });

    $(document).on('click', '.fine_cup .header_wrap .header .header-mob .menu .menu-item a', function(e) {
        $('.fine_cup .header_wrap .header .header-mob').fadeOut();
        $('.fine_cup .header_wrap .header .mobile_menu .mobile_memu_btn ').removeClass('active');
        $('.fine_cup .main_wrapper .main').fadeIn();

    });

    $('.video').on('click', function() {
        $('.video_popup').fadeIn();
        $('.popup_wrapper').fadeIn();
        $('.fine_cup').toggleClass("hidescroll");
    });

    $('#back_basket').on('click', function() {
        $('.card_popup').fadeOut();
        $('.video_popup').fadeOut();
        $('.checkout_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.accepted_popup').fadeOut();
        $('.basket_popup').fadeToggle();
    });



    $('#back_checkout').on('click', function() {
        $('.card_popup').fadeOut();
        $('.basket_popup').fadeOut();
        $('.video_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.accepted_popup').fadeOut();
        $('.checkout_popup').fadeToggle();
    });

    $('#accepted').on('click', function() {
        $('.payment_popup').fadeOut();
        $('.video_popup').fadeOut();
        $('.card_popup').fadeOut();
        $('.basket_popup').fadeOut();
        $('.checkout_popup').fadeOut();
        $('.fine_cup').addClass("hidescroll");
        $('.accepted_popup').fadeToggle();
    });

    $('#checkout').on('click', function(e) {
        e.preventDefault();
    });

    $(document).on('click', '.close', function(e) {
        e.preventDefault();
        $('.popup_wrapper').fadeOut();
        $('.video_popup').fadeOut();
        $('.card_popup').fadeOut();
        $('.basket_popup').fadeOut();
        $('.checkout_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.fine_cup').removeClass("hidescroll");
    });

    $('#close').on('click', function(e) {
        e.preventDefault();
        $('.popup_wrapper').fadeOut();
        $('.video_popup').fadeOut();
        $('.card_popup').fadeOut();
        $('.basket_popup').fadeOut();
        $('.checkout_popup').fadeOut();
        $('.payment_popup').fadeOut();
        $('.fine_cup').removeClass("hidescroll");
    });

    $(document).on('click', '.basket_wrapper .basket .basket_main .basket_main_content .basket_main_content_item .basket_main_content_item_summ .mobile_basket_menu', function() {
        $(this).parent().parent().toggleClass("mb");
        $(this).toggleClass('active');
        $(this).parent().parent().find('.basket_main_content_item_weight_wrapper').slideToggle();
    });

    $(document).on('click', '.grinding_wrapper .grinding_text p', function(e) {
        e.preventDefault();
        $('.grinding_wrapper .grinding').slideToggle();
        var text = $(this).text();
        $(this).text(
            text == "Сховати" ? "Розгорнути" : "Сховати");
    });



    $('#phone').mask("+380(99)-999-99-99");
    $('#phone2').mask("+380(99)-999-99-99");

    //////////////////////////////////VALIDATION////////////////////////////////////////////////////
    var form1 = $('.create_new_order');
    var validateBtn1 = $('.create_new_order .btn');
    var name1 = $('.create_new_order .name');
    var email1 = $('.create_new_order .email');
    var phone1 = $('.create_new_order .phone');
    // var form2 = $('.callback_form');
    // var validateBtn2 = $('.callback_form .btn');
    // var name2 = $('.callback_form .name');
    // var email2 = $('.callback_form .email');
    // var phone2 = $('.callback_form .phone');
    // var generateError = function() {
    //     var error = document.createElement('div');
    //     error.className = 'error';
    //     error.style.color = 'red';
    //     error.innerHTML = "Дані введені не правильно";
    //     return error;
    // }

    form1.on('submit', function(event) {
        event.preventDefault();
        var email1 = $('.create_new_order .email');
        var errors = $('.create_new_order .error');

        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
        if (!$(name1).val().match(/\D{3,40}/)) {
            var error = generateError();
            console.log('field is blank');
            $(name1).addClass('invalid');
            $(error).insertAfter(name1);
        } else {
            $(name1).removeClass('invalid');
            $(name1).addClass('valid');

        }
        
        if (!$(phone1).val().match(/^\+380?\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)) {
            console.log('email');
            var error = generateError();
            $(phone1).addClass('invalid');
            $(error).insertAfter(phone1);
        } else {
            $(phone1).removeClass('invalid');
            $(email).addClass('valid');

        }
        if (!$(email1).val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            console.log('email');
            var error = generateError();
            $(email1).addClass('invalid');
            $(error).insertAfter(email1);
        } else {
            $(email1).removeClass('invalid');
            $(email).addClass('valid');

        }
    });
    // form2.on('submit', function(event) {
    //     event.preventDefault();
    //     var email2 = $('.callback_form .email');
    //     var errors = $('.callback_form .error');

    //     for (var i = 0; i < errors.length; i++) {
    //         errors[i].remove();
    //     }
    //     if (!$(name2).val().match(/\D{3,10}/)) {
    //         var error = generateError();
    //         console.log('field is blank');
    //         $(name2).addClass('invalid');
    //         $(error).insertAfter(name2);
    //     } else {
    //         $(name2).removeClass('invalid');
    //         $(name2).addClass('valid');

    //     }
    //      if (!$(phone2).val().match(/^\+380?\(\d{2}\)-\d{3}-\d{2}-\d{2}$/)) {
    //         console.log('email');
    //         var error = generateError();
    //         $(phone2).addClass('invalid');
    //         $(error).insertAfter(phone2);
    //     } else {
    //         $(phone2).removeClass('invalid');
    //         $(phone2).addClass('valid');

    //     }
    //     if (!$(email2).val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    //         console.log('email');
    //         var error = generateError();
    //         $(email2).addClass('invalid');
    //         $(error).insertAfter(email2);
    //     } else {
    //         $(email2).removeClass('invalid');
    //         $(email2).addClass('valid');

    //     }
    // })

    $(document).scroll(function() {
        if ($(document).scrollTop() >= 50) {
            $('.fine_cup .header_wrap .header').addClass('greybg');
        } else {
            $('.fine_cup .header_wrap .header').removeClass('greybg');
        }
    });

    // Костыли
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.fine_cup .header_wrap .header nav').addClass('header-mob');
            $('.fine_cup .header_wrap .header nav').css("display","");
        }
       else {
            $('.fine_cup .header_wrap .header .mobile_menu .mobile_memu_btn ').removeClass('active');
            $('.fine_cup .main_wrapper .main').fadeIn();
            $('.fine_cup .header_wrap .header nav').removeClass('header-mob');
            $('.fine_cup .header_wrap .header nav').css("display","block");
       }
      });

      $(window).resize(function() {
        $('.fine_cup .header_wrap .header .mobile_menu .mobile_memu_btn ').removeClass('active');
        $('.fine_cup .main_wrapper .main').fadeIn();
    });

    // Для ФБ пикселя
    $('.buy_btn').click(function(){fbq('track', 'AddToCart', {
        content_type: 'product',
        content_ids: [''],
        value: 0.50,
        currency: 'USD' 
      });
    });

    $('#payment').click(function(){fbq('track', 'Purchase', {
        content_type: 'product',
        value: 5,
        currency: 'USD'
      });
    });

      
});