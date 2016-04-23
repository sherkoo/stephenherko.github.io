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
  function fadeIn(obj) {
    $(obj).fadeIn(1000);
  }


  // // Show header nav on scroll down
  // var lastScrollTop = 0;
  //
  // $(window).scroll(function(){
  //   console.log($(this).scrollTop());
  //
  //   if($(this).scrollTop() >= 500){
  //     $('.header').addClass('header-fixed');
  //     // Account for missing space after .header-fixed
  //     $('body').css({
  //       'paddingTop': '113px'
  //     });
  //   } else {
  //     $('.header').show();
  //     $('.header').removeClass('header-fixed');
  //     $('body').css({
  //       'paddingTop': '0'
  //     });
  //   }
  // });

  // Show header on scroll up - remove on scroll down
  // var lastScrollTop = 0;
  //
  // $(window).scroll(function(event){
  //   var scrollT = $(this).scrollTop();
  //
  //   if (scrollT > lastScrollTop){
  //     // downscroll
  //     // $('.header').fadeOut(300);
  //     $('.header').removeClass('header-fixed');
  //   } else {
  //     // upscroll
  //     // $('.header').fadeIn(300);
  //     $('.header').addClass('header-fixed');
  //   }
  //
  //   lastScrollTop = scrollT;
  //
  //
  // });

});
