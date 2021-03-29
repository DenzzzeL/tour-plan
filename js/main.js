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
                zoom: 16
            });
        
myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'DoubleTree by Hilton Phuket Banthai Resort',
            balloonContent: 'DoubleTree by Hilton Phuket Banthai Resort'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.svg',
            // Размеры метки.
            iconImageSize: [17, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-8, -30]
        });
        myMap.geoObjects
        .add(myPlacemark)
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