const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 90,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
});

