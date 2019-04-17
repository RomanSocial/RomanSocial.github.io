$(document).ready(function () {
    $('#slideshow').desoSlide({
        thumbs: $('ul.slide_show_thumbs li > a'),
        effect: {
            provider: 'animate',
            name: 'bounce'
        }
    });
});
$(function () {
$("div.sel-head-color>ul>li.color-block span:not(:first-child)").hide();
$(".sel-head-color ul li a.head-link-color").click(function(e) {
    e.preventDefault();
    // $(".sel-head-color ul.colors-group li.color-block span.active").removeClass('active');
    // $(this).toggleClass('active');
    $("ul>li.color-block span.head-col-name").hide();
    $(this).siblings('span.head-col-name').show();

});
$("ul>li.color-block span:not(:first-child)").hide();
$("div>.sel-addition-color>ul>li a.additional-link-color").click(function(e) {
    e.preventDefault();
    // $(".sel-head-color ul.colors-group li.color-block span.active").removeClass('active');
    // $(this).toggleClass('active');
    $("ul>li.color-block span.additional-col-name").hide();
    $(this).siblings('span.additional-col-name').show();

});
    $("div>.sel-head-color>ul>li a.all-color").click(function(e) {
        e.preventDefault();
        // $(".sel-head-color ul.colors-group li.color-block span.active").removeClass('active');
        // $(this).toggleClass('active');
        $("ul>li.color-block span.head-col-name").hide();

    });
    $("div>.sel-addition-color>ul>li a.all-color").click(function(e) {
        e.preventDefault();
        // $(".sel-head-color ul.colors-group li.color-block span.active").removeClass('active');
        // $(this).toggleClass('active');
        $("ul>li.color-block span.additional-col-name").hide();

    });
});

$(function () {
    $(".sel-head-color ul li a").click(function(e) {
        e.preventDefault();
        var color = $(this).data('color');
        $("div.article div.prod-color").css("background", color);
    });

});
