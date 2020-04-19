// When the user scrolls the page, execute myFunction 
function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(e) {
  /* Arrow pull*/ 

  $("#arrow span").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top
    }, 500);
  });
  /*Project */

$("#myCarousel").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo($(this).find(".carousel-inner"));
      }
    }
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
  } else {
      $('#back-to-top').fadeOut();
  }
});

// scroll body to 0px on click

$('#back-to-top').click(function () {
  $('#back-to-top').tooltip('hide');
  $('body,html').animate({
      scrollTop: 0
  }, 800);
  return false;
});

$('#back-to-top').tooltip(
  {container:'#back-to-top', trigger: 'hover', placement:"left"}
  );   
});
