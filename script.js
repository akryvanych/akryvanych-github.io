// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);
$('.parallax-window').parallax({imageSrc: 'img/fog-3622519_1920.jpg'});

var myNav = document.getElementById("nav");
var myNav = $("#nav");

$(window).on('scroll', function() {
  "use strict";
  if ($(window).scrollTop() >= 880) {
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
  }
});

// $(".carousel").on("touchstart", function(event){
//   var xClick = event.originalEvent.touches[0].pageX;
// $(this).one("touchmove", function(event){
//   var xMove = event.originalEvent.touches[0].pageX;
//   if( Math.floor(xClick - xMove) > 5 ){
//       $(this).carousel('next');
//   }
//   else if( Math.floor(xClick - xMove) < -5 ){
//       $(this).carousel('prev');
//   }
// });
// $(".carousel").on("touchend", function(){
//       $(this).off("touchmove");
// });
// });

$("#myCarousel").swipe( {
  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

      if(direction=='left'){
          $(this).carousel('next');
      }else if(direction=='right'){
          $(this).carousel('prev');
      }

  }
});

