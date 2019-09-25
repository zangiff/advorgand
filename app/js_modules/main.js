$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    nav: false,
    navText: [],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        center: true,
        nav: false,
        navText: [],
        dots: false
      },
      385: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
  $(".header__nav__adaptive").on("click", function() {
    $(".header__nav__adaptive__menu").toggleClass("hidden");
  });
});

// JQuery-код для триггера навигации карусели (пролистывания изображений с помощью кнопок навигации)
// $(".next").on("click", function(){
//   owl.trigger("next.owl.carousel", [300]);
// });
// $(".prev").on("click", function(){
//   owl.trigger("prev.owl.carousel", [300]);
// });
