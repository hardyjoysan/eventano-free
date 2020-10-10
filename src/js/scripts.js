(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Countdown
  var newYear = new Date(); 
  newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
  $("#thecountdown").countdown(newYear, function(event) {
    $(this).html(
      '<div class="block"><h4>'+event.strftime('%D')+'</h4><span>Days</span></div>' + 
      '<div class="block"><h4>'+event.strftime('%H')+'</h4><span>Hours</span></div>' + 
      '<div class="block"><h4>'+event.strftime('%M')+'</h4><span>Minutes</span></div>' + 
      '<div class="block"><h4>'+event.strftime('%S')+'</h4><span>Seconds</span></div>'
    );
  });

})(jQuery); // End of use strict
