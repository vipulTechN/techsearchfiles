document.querySelector('html,body').scrollIntoView({
    behavior: 'smooth'
  });
  
  // midright part of middle start===============================================================
  $(document).ready(function () {
    $(window).scroll(function () {
      var scrollY = $(window).scrollTop();
      if (scrollY > 680) {
        $(".midright").css("top", "0px");
        $(".midright").css("position", "fixed");
      } else {
        $(".midright").css("top", "-100%");
      }
      if (scrollY >= 3250) {
        $(".midright").css("top", "-100%");
      }
    else{
      $(".midright").css("display", "flow");
          }
    });
  });
  // midright part of middle end===============================================================
  //nav2 slider line--------------------------------------------------------------------------------------
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

  var swiper = new Swiper(".mySwiper4", {
    slidesPerView:3,
    spaceBetween:30,
    lazy: true,
    freemode:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".mySwiper5", {
    slidesPerView:5.2,
    spaceBetween:30,
    freemode:true,
    speed:500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 

  // grid start ==========================================
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
  var swiper7 = initializeSwiper4(".mySwiper6", 3, 20);
  
// grid end==========================================