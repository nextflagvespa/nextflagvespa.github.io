




$(document).ready(function(){


$('.hero__area__slider').owlCarousel({
  dots: false,
  loop: true,
  nav: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 3500,
  items: 1,
  margin: 0,
  slideToScroll: 1,
  center: false,
  autoHeight: true,
  autoplayHoverPause: true, 
  responsive: {
      0: {
          stagePadding: -70,
      },
      320: {
          items: 1,
          stagePadding: -40,
      },
      575: {
          items: 1,
          stagePadding: -30,
      },
      768: {
          items: 1,
          stagePadding: -50,
      },
      992: {
          items: 1,
          stagePadding: -10,
      },
      1200: {
          stagePadding: -20,
      },
      1500: {
          stagePadding: -35,
      },
      1600: {
          stagePadding: -70,
      },
      1700: {
          stagePadding: -70,
      }
  }
});


$(".click__search").click(function(){
	$(".open__search__bar").hide(4);
})

$(".click__search").click(function(){
	$(".open__search__bar").show();
})





$(".click__bars").click(function(){
	$(".header__collapse").hide(4);
})

$(".click__bars").click(function(){
	$(".header__collapse").show();
})


    $('.brand__active').owlCarousel({
      dots: false,
      loop: true,
      nav: false,
      autoplay: true,
      smartSpeed: 1000,
      autoplayTimeout: 3500,
      items: 4,
      margin: 5,
      slideToScroll: 1,
      center: false,
      autoHeight: true,
      autoplayHoverPause: true, 

      responsive: {
          0: {
              stagePadding: -70,
          },
          320: {
              items: 3,
              stagePadding: -290,
          },
          575: {
              stagePadding: -320,
          },
          768: {
              stagePadding: -220,
          },
          992: {
              items: 2,
              stagePadding: -220,
          },
          992: {
              items: 3,
              stagePadding: -0,
          },
          1100: {
              items: 2,
              stagePadding: -130,
          },
          1200: {
              stagePadding: -190,
          },
          1360: {
              stagePadding: -190,
          },
          1449: {
              stagePadding: -205,
          },
          1500: {
              items: 4,
              stagePadding: 0,
          },
          1600: {
              stagePadding: -220,
          },
          1700: {
              stagePadding: -220,
          }
      }

  });

  
              
$('.main-manu-open, .overlay').click(function(){

    $('body').addClass('active');

})

$('.menu-close, .overlay').click(function(){

    $('body').removeClass('active');

})  






// $(".click__search").click(function(){

//     $(".open__search__bar").toggle("");
  
//   });




$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed:300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


 /*STICKY MENU */
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 1) {
    $(".header__area").removeClass("scroll-header");
   }else{
    $(".header__area").addClass("scroll-header");
   }

  });



$('#zoom_07').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
    scrollZoom: true,
    easing: true
});









// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



$('#zoom_10').ezPlus({
    easing: true
});


$(document).ready(function() {
  $('.nice').niceSelect();
});








//for menu active class
$('.single-pricing-button button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});







});