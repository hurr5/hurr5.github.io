const partnersSwiper = new Swiper(".swiper-partners", {
  slidesPerView: 6,
  spaceBetween: 90,
  slidesPerGroup: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: true,
});

const newsSwiper = new Swiper(".swiper-news", {
  slidesPerView: 3,
  spaceBetween: 250,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})