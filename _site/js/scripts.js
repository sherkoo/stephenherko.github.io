$(document).ready(function(){

  // Mobile Btn
  $('.mobile-btn').click(function(){
    $('.header-nav').toggle();
    return false;
  });

  // Show header nav on scroll down
  var lastScrollTop = 0;

  $(window).scroll(function(){
    console.log($(this).scrollTop());

    if($(this).scrollTop() >= 300){
      $('.header').addClass('header-shrink');
      $('.header-nav').addClass('header-nav-shrink');
    } else {
      $('.header').removeClass('header-shrink');
      $('.header-nav').removeClass('header-nav-shrink');
    }
  });

  // grab list of all image thumbs
  $('.work-grid-item img').load(function(){
    $(this).animate({
      'opacity': 1
    });
  });
  // var workThumbs = $('.work').each('img ');
  // var workThumb = workThumbs.each('img');
  // // console.log(workThumb);
  // for (var i = 0; i < workThumbs.length; i++) {
  //   console.log(workThumbs[i]);
  // }

  // Fade in images on load
  // var image = new Image();
  // image.onload = function () {
  //    console.info("Image loaded !");
  //    //do something...
  //    alert('its loaded');
  //    image.animate({
  //      'opacity': 0
  //    });
  // }
  // image.onerror = function () {
  //    console.error("Cannot load image");
  //    //do something else...
  //    alert('NOT WAY');
  // }
  // image.src = "../img/shoe-1.jpg";


});
