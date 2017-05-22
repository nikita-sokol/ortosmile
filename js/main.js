$(document).ready(function () {

	// Find all YouTube videos
var $allVideos = $("iframe[src^='https://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".video");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();

    
// Slider_02 - Swiper
    var swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true
    });

    var swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 100,
        autoplay: 2500,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: '1',
        centeredSlides: true,
        loop: true
    });

    var swiper3 = new Swiper('.swiper3', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: false,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        centeredSlides: true,
        effect: 'slide',
        loop: true
    });

    var swiper4 = new Swiper('.swiper4', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: false,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        centeredSlides: true,
        effect: 'slide',
        loop: true
    });


//fancybox
  $(".fancybox").fancybox({
   'infobar':true,
   'buttons':false
  });

  // anchors
   $('.anchor').click(function () {
  		var hrefName = $(this).attr('href');
		$('html, body').animate({
	        scrollTop: $(hrefName).offset().top - 40
	    }, 600);
	});

   $(".collapsed-anchor").click(function () {
   		$('.collapsed-menu').fadeOut(300);
   })

   $('.menu-button').click(function(){
		$('.collapsed-menu').fadeIn(300);
	});

	$('.close-button').click(function () {
		$('.collapsed-menu').fadeOut(300);
	});

})