const partnersSwiper = new Swiper(".swiper-partners", {
  slidesPerView: 6,
  spaceBetween: 90,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: true,
});

const newsSwiper = new Swiper(".swiper-news", {
  slidesPerView: 3,
  spaceBetween: 250,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})