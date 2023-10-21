document.querySelector('html,body').scrollIntoView({
  behavior: 'smooth'
});

// midright popup part of middle start===============================================================
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollY = $(window).scrollTop();
    if (scrollY > 1220) {
      $(".midright").css("top", "0px");
      $(".midright").css("position", "fixed");
    } else {
      $(".midright").css("top", "-300%");
    }
    if (scrollY >= 3250) {
      $(".midright").css("display", "none");
    }
  else{
    $(".midright").css("display", "flow");
        }
  });
});
// midright part of middle end===============================================================
//nav2 slider Under_line--------------------------------------------------------------------------------------
$(document).ready(function () {
  $(".menu--item__one").click(function () {
    $(".bottom__line").removeClass("bottom__active1 bottom__active2 bottom__active3 bottom__active4 bottom__active5 ");
  });
  //  Second active item
  $(".menu--item__two").click(function () {
    $(".bottom__line").addClass("bottom__active1");
    $(".bottom__line").removeClass("bottom__active bottom__active2 bottom__active3 bottom__active4 bottom__active5 ");
  });
  // Third active item
  $(".menu--item__three").click(function () {
    $(".bottom__line").addClass("bottom__active2");
    $(".bottom__line").removeClass("bottom__active bottom__active1 bottom__active3 bottom__active4 bottom__active5");
  });
  // Fourth active item
  $(".menu--item__four").click(function () {
    $(".bottom__line").addClass("bottom__active3")
    $(".bottom__line").removeClass("bottom__active bottom__active1 bottom__active2 bottom__active4 bottom__active5");
  });
  // Five active item
  $(".menu--item__five").click(function () {
    $(".bottom__line").addClass("bottom__active4")
    $(".bottom__line").removeClass("bottom__active bottom__active1 bottom__active2 bottom__active3 bottom__active5");
  });
  // Six active item
  $(".menu--item__six").click(function () {
    $(".bottom__line").addClass("bottom__active5")
    $(".bottom__line").removeClass("bottom__active bottom__active1 bottom__active2 bottom__active3 bottom__active4 ");
  });
});
//nav2 slider line end--------------------------------------------
function openNav1() {
  document.getElementById("mysidenav1").style.width = "100%";
}
function closeNav1() {
  document.getElementById("mysidenav1").style.width = "0%";
}
// this script function is use for all sliders
function initializeSwiper(selector, slidesPerView, spaceBetween, autoplayDelay) {
  return new Swiper(selector, {
    slidesPerView: slidesPerView, // preview slider
    spaceBetween: spaceBetween,
    loop: true,
    lazy: true,
  freemode:true,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Responsive breakpoints
      768: {
        slidesPerView: 3.2, // Number of slides to show on screens with width >= 768px (laptop view)
      },
      540:{
        slidesPerView:2,
      },
      320: {
        slidesPerView: 1.2, // Number of slides to show on screens with width < 768px (mobile view)
      },
    },
  });
}
// Initialize your sliders
var swiper1 = initializeSwiper(".mySwiper", 3.2, 30, 2000);
var swiper2 = initializeSwiper(".mySwiper1", 2, 20, 2500);
var swiper3 = initializeSwiper(".mySwiper2", 4, 30, 3000);

//this script function is use for upcomingProject Slider
function initializeSwiper1(selector, slidesPerView, spaceBetween) {
  return new Swiper(selector, {
    slidesPerView: slidesPerView, // preview slider
    spaceBetween: spaceBetween,
    lazy: true,
    loop: true,
  freemode:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
// Initialize your sliders
var swiper4 = initializeSwiper1(".mySwiper3", 1, 30);

//this script function is use for SmartSearch button Slider
function initializeSwiper2(selector, slidesPerView, spaceBetween, autoplayDelay) {
  return new Swiper(selector, {
    slidesPerView: slidesPerView, // preview slider
    spaceBetween: spaceBetween,
    loop: false,
    lazy: true,
    freemode:true,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Responsive breakpoints
      1650:{
        slidesPerView:4.4,
      },
      1100:{
        slidesPerView:3,
      },
      910:{
        slidesPerView:3.4,
      },
      620: {
        slidesPerView: 3, 
      },
      420: {
        slidesPerView: 2, 
      },
      310:{
        slidesPerView:1.5,
      },
      200:{
        slidesPerView:1,
      },
    },
  });
}
var swiper5 = initializeSwiper2(".mySwiper4", 4, 20, 3000);
//this script function is use for tools Slider
//this script function is use for SmartSearch button Slider
function initializeSwiper7(selector, slidesPerView, spaceBetween, autoplayDelay) {
  return new Swiper(selector, {
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    // loop: true,
    loopedSlides: 5,
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1450: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 6.3,
      },
      540: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1.8,
      },
    },
  });
}

var swiper5 = initializeSwiper7(".mySwiper5", 6, 20, 3000);

// grid Swiper start ==========================================
function initializeSwiper4(selector, slidesPerView, spaceBetween) {
  return new Swiper(selector, {
    slidesPerView: slidesPerView, // preview slider
    spaceBetween: spaceBetween,
    lazy: true,
    // loop: true,
  freemode:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
      768:{
        slidesPerView:3,
      },
      500:{
        slidesPerView:2.3,
      },
      250:{
        slidesPerView:1.2,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
var swiper6 = initializeSwiper4(".mySwiper6", 3, 20);
var swiper7 = initializeSwiper4(".mySwiper7", 3, 30);
var swiper8 = initializeSwiper4(".mySwiper8", 3, 20);
var swiper9 = initializeSwiper4(".mySwiper9", 3, 20);
// grid Swiper End ==========================================