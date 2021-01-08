$(function () {
  $("#sale-1st-timer").countdown("2021/05/05", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>' +
          '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>' +
          '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'
      )
    );
  });
  $("#sale-2nd-timer").countdown("2021/05/05", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="c-timer__item"><span  class="c-timer__time">%H</span><span  class="c-timer__text"> Час</span></div>' +
          '<div  class="c-timer__item"><span class="c-timer__time">%M</span><span class="c-timer__text"> Мин</span></div>' +
          '<div  class="c-timer__item"><span class="c-timer__time">%S</span><span class="c-timer__text"> Сек</span></div>'
      )
    );
  });

  $(".s-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".s-nav",
  });
  $(".s-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".s-for",
    dots: false,
    centerMode: true,
    prevArrow: $(".navigation__prev"),
    nextArrow: $(".navigation__next"),
    focusOnSelect: true,
  });

  $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 10000);
    });
  });
});
