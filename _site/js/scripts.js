function fadeIn() {
  $(this).fadeIn(1000);
}

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

  // Fade in images individually
  // function fadeIn(obj) {
  //   $(obj).fadeIn(1000);
  // }


});
