$(document).ready(function () {
    $(window).scroll(function () {
      var scrollY = $(window).scrollTop();
      var viewPort = window.innerWidth >= 768 ? 375 : 183;
      if (scrollY > viewPort) {
        $("#header").css("top", "-65px")
        $("#header1").css("top", "0");
      } else {
        $("#header").css("top", "0px");
        $("#header1").css("top", "-65px");
      }
    });
  }); 
  function openNav() {
    document.getElementById("mysidenav").style.width = "300px";
  }
  function closeNav() {
    document.getElementById("mysidenav").style.width = "0";
  }
  // sidenav end =============================================
  // sidenav popup start =============================================
  function openNav1() {
    document.getElementById("mysidenav1").style.width = "100%";
  }
  function closeNav1() {
    document.getElementById("mysidenav1").style.width = "0%";
  }