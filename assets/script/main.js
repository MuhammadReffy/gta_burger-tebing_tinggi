// ====================AOS====================
AOS.init();

// ====================ISOTOPE====================
$(document).ready(function () {
  var $grid = $("#product-grid").isotope({
    itemSelector: ".col-md-4",
    layoutMode: "fitRows",
  });

  $("#filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $("#filters button").removeClass("active");
    $(this).addClass("active");
  });
});

// ====================SWIPER====================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   speed: 600,
//   parallax: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const hamburgerMenu = document.getElementById("hamburger-menu");
const menuNavbar = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-active");
  menuNavbar.classList.toggle("nav-active");
});

// document.addEventListener("DOMContentLoaded", () => {
//   var navLinks = document.querySelectorAll(".nav-link");
//   navLinks.forEach((navLink) => {
//     navLink.classList.remove("active");
//   });
// });

// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   const windowPosition = window.scrollY > 100;

//   if (windowPosition) {
//     header.classList.add("header-active");
//   } else {
//     header.classList.remove("header-active");
//   }
// });
