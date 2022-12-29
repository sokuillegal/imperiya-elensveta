let header__burger = document.querySelectorAll('.header__burger,.header__link');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');

header__burger.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      header_menu.classList.toggle('active');
      back.classList.toggle('lock');
   }
});


let swiper = new Swiper(".mySwiper", {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: true,
   slidesPerView: 1,
   spaceBeetwen: 0,
   loop: true,
   breakpoints:{
      790:{
         slidesPerView: 1,
      },
      1000:{
         slidesPerView: 2,
      },
      1324:{
         slidesPerView: 2,

      },
      1500:{
      slidesPerView: 3,
      }
   }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}