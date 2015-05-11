/**
 * Search bar appears when user clicks icon-search
 */

$(document).ready(function(){

  // Open search input
  $('.icon-search').on('click', function(){
    $('.site-header__search').slideToggle(200);
  });

  // Close search input
  $('.icon-close').on('click', function(){
    $('.site-header__search').slideToggle(200);
  });

});