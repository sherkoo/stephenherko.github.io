$(document).ready(function(){

  // Fade page out on link click
  $('body').css({
    'display': 'none'
  });

  $('body').fadeIn(500);

  // window.history.back().click(function(e){
  //   e.preventDefault();
  //
  //   newLocation = this.href;
  //
  //   $('body').fadeOut(500, newpage);
  // });

  $('.link').click(function() {

    event.preventDefault();

    newLocation = this.href;

    $('body').fadeOut(500, newpage);
  });

  function newpage() {
    $('.col-thumb').css({
      'transform:': 'scale(1.1)'
    });
    window.location = newLocation;
  }

});
