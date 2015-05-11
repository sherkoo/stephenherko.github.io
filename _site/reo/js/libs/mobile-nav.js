/**
 * Mobile Navigation 
 */

$(document).ready(function(){

  $('.site-header__nav--mobile-btn').on('click', function(){
    $('.site-header__nav__links').slideToggle(200);
  });

});