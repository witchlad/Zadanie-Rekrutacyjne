jQuery(document).ready(function ($) {
    $("#nav-burger").on("click", function () {
      $("#nav-menu").toggleClass("navigation__nav-show", 500);
    });
});

var swiper = new Swiper(".mySwiper-projekty", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  spaceBetween: 90,
  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
      },
      650: {
          slidesPerView: 1.3,
      }
  }
});

