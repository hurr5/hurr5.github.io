
// Swiper

const partnersSwiper = new Swiper(".swiper-partners", {
  slidesPerView: 3,
  spaceBetween: 100,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 90,
      slidesPerGroup: 6,
      autoplay: true,
    },
  },
});

const newsSwiper = new Swiper(".swiper-news", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 250,
      slidesPerGroup: 3,
    },
  },
})

// Hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
  menuBtn.classList.toggle('open');
  disableScroll()
});

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
  menuBtn.classList.toggle('open');
  enableScroll()
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    menu.classList.remove('open');
    hamburger.classList.remove('open');
    menuBtn.classList.remove('open');
    enableScroll()
  }
});

