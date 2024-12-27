

$(document).ready(function () {
  var stickyNavTop = $('#header').offset().top;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('#header').addClass('sticky');
    } else {
      $('#header').removeClass('sticky');
    }
  };

  stickyNav(); // Initial check
  $(window).scroll(function () {
    stickyNav(); // Check on scroll
  });
});

