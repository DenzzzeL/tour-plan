const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [7.890703, 98.294772],
                zoom: 17
            });
        }
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
$('.newsletter').parallax({imageSrc: 'img/newsletter-bg-2.jpg'});