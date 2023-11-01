const swiperPrice = new Swiper('.swiper', {
  sliderPerView: 'auto',
  spaceBetween: 16,
  mousewheel: true,
  loop: true,           
  pagination: {                       
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`
    },
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})