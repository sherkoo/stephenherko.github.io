$(document).ready(function(){

  // Header fixed
  $('.header-fixed').hide();

  $(window).scroll(function(){
    var top = $(this).scrollTop();

    if(top >= 300){
      $('.header-fixed').fadeIn(200);
    } else {
      $('.header-fixed').fadeOut(200);
    }
  });

  // Mobile Btn

  $('.mobile-btn').click(function(){
    $('.header-nav').toggle();
    return false;
  });

});
