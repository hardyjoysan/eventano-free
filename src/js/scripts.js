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

  //Particles
  particlesJS("particles", {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 800 } },
      color: { value: "#ccc" },
      shape: {
        type: "edge",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
    });
  });

})(jQuery); // End of use strict
