/**
 * Allows header nav to be fixed when user scrolls
 * REO Speedwagon slides in from left 
 */

$(window).scroll(function(){

  var sticky = $('.site-header'),
      scroll = $(window).scrollTop();
      bandLogo = $('.site-header__nav__logo');

  //  
  if (scroll >= 760){
    sticky.addClass('site-header--fixed');
  } else {
    sticky.removeClass('site-header--fixed');
  }

  // Show band logo on scroll
  if(sticky.hasClass('site-header--fixed')){
    bandLogo.fadeIn(200);
  } else {
    bandLogo.hide();
  }

});