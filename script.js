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

$("#myCarousel").swipe( {
  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

      if(direction=='left'){
          $(this).carousel('next');
      }else if(direction=='right'){
          $(this).carousel('prev');
      }

  }
});

