/**
 * Farah Family Solutions - Main Application JavaScript
 * Extracted from inline scripts for better organization
 */

// Loading Screen Animation
$(window).on("load", function () {
    $('#loading-center').fadeOut();
    $('#loading').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

// Search Form Toggle
$('.search-toggler').on("click", function(event) {
    event.preventDefault();
    $('.search-form').fadeIn(250);
});

$('.search-form .close').on("click", function(event) {
    event.preventDefault();
    $('.search-form').fadeOut(250);
});

// Bootstrap Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// MasterSlider Configuration
var slider = new MasterSlider();
slider.control('arrows', {autohide:true});
slider.setup('masterslider', {
    width: 870,
    height: 600,
    fullwidth: true,
    layout: "autofill",
    autoplay: true,
    space: 0,
});

// Custom Scrollbar Initialization
$(".scrollable").mCustomScrollbar({
    theme: "minimal-dark",
    scrollInertia: 0
});

// Back to Top Button
$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});

$('#backToTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
});
