//jQuery code
jQuery(function($) { 

  'use strict';

  // Preloader
  var $preloader = $('#page-preloader'),
      $spinner   = $preloader.find('.spinner');
  $spinner.delay(700).fadeOut();
  $preloader.delay(700).fadeOut('slow');

  // Functions
  initSlider();
  InitScroll();
  initFixedNav();
  initTeam();
  initParallax();
  initGallery();
  initPartners();
  initClasses();
  initMail();

  // Nav Collapse
  $('#menu-navbar').on('click', function () {
    $('.navbar-collapse').removeClass("in");
  });

  // Twitter
  var twitterConfig = {
    'id': '677061054749384704', // API KEY
    'domId': 'twitter-w',
    'maxTweets': 1,
    'enableLinks': true
  };
  twitterFetcher.fetch(twitterConfig);
  
});

// Slider
function initSlider() {
  $('.flexslider').flexslider({
    slideshow: true,
    animation: "fade",
    directionNav: false,
    slideshowSpeed: 7000,   //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 2000,   //Integer: Set the speed of animations, in milliseconds
  });
}

// Scroll
function InitScroll() {
  $('body').smoothScroll({
    delegateSelector: 'nav a',
    speed: 2000
  });
}

// Fixed Navigation
function initFixedNav() {  
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 0) {
      $("#navigation").removeClass("top-nav").addClass("fix-nav");
    } 
    else if($(this).scrollTop() <= 0) {
      $("#navigation").removeClass("fix-nav").addClass("top-nav");
    }
  });
}

// Team Carousel
function initTeam() {
  $('.team-carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
  });
}

// Parallax
function initParallax() {
  $('.quote-block').parallax("50%", 0.4);
}

// Gallery
function initGallery() {
  $('#gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade-gallery',
    gallery: {
      enabled:true
    }
  });
}

// Partners Carousel
function initPartners() {
  $('.partner-carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
  });
}

// Classes Carousel
function initClasses() {
  $('.classes-carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
  });
}

// Email Validate
function validateEmail(email) { 
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

// Notify Form Validation
function initMail() {
  $('#form-notify').submit(function() { return false; });
  $('#submit').on('click', function(){

    var emailval   = $('#email').val();
    var emailvalid = validateEmail(emailval);

    var nameval = $('#name').val();
    var namelen = nameval.length;

    var messageval = $('#message').val();
    var messagelen = messageval.length;
    
    if(emailvalid == false) {
      $('.field-email').addClass('field-error');
    }
    else if(emailvalid == true){
      $('.field-email').removeClass('field-error');
    }

    if(namelen < 1) {
      $('.field-name').addClass('field-error');
    }
    else if(namelen >= 1){
      $('.field-name').removeClass('field-error');
    }

    if(messagelen < 1) {
      $('.field-message').addClass('field-error');
    }
    else if(messagelen >= 1){
      $('.field-message').removeClass('field-error');
    }

    if(emailvalid == true && namelen >= 1 && messagelen >= 1) {
      $('#submit').replaceWith('<em>send...</em>');
      $.ajax({
        type: 'POST',
        url: 'send.php',
        data: $('#form-notify').serialize(),
        success: function(data) {
          if(data == 'true') {
            $('#form-notify').fadeOut('fast', function(){
              $(this).before("<span class='success'>Message sent</span>");
            });
          }
        }
      });
    }
  });
}