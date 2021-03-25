const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
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