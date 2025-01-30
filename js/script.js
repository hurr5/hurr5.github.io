
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

// const disableScroll = () => {
//   document.body.style.overflow = 'hidden';
// }

// const enableScroll = () => {
//   document.body.style.overflow = '';
// }

hamburger.addEventListener('click', function () {
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
  menuBtn.classList.toggle('open');
  // disableScroll()
});

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
  menuBtn.classList.toggle('open');
  // enableScroll()
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    menu.classList.remove('open');
    hamburger.classList.remove('open');
    menuBtn.classList.remove('open');
    // enableScroll()
  }
});

// Модальное окно

const request = document.querySelector('.request')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close');

const closeModal = () => {
  modal.classList.remove('active');
  overlay.classList.remove('active')
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 200);
}


request.addEventListener('click', () => {
  overlay.style.display = 'block';
  setTimeout(() => {
    overlay.classList.add('active')
    modal.classList.add('active');
  }, 300);
});

closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

// Cookies

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".cookie__modal");
  const acceptBtn = document.querySelector(".cookie__btn");

  if (!localStorage.getItem("cookieAccepted")) {
    setTimeout(() => {
      modal.classList.add("show");
    }, 3000);
  }

  acceptBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    localStorage.setItem("cookieAccepted", "true");
  });
});