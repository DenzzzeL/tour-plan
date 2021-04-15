$(document).ready(function () {
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

var menuButton = $('.menu-button');
menuButton.on('click', function () {
$('.navbar-bottom').toggleClass('navbar-bottom--visible') ;  
});
var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible'); 
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
  }
// esc
$(document).keyup(function(e) {
if (e.keyCode === 27) $('.modal__close').click();   
});

// Forms processing 
$(".form").each(function() {
  $(this).validate({
  errorClass: "invalid",
  messages: { 
    name: {
      required: "Please specify your name",
      minlength: "Please enter at least 2 simbols",
    },
    phone: {
      required: "Phone number required",
      minlength: "Please enter at least 11 digits",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
  }
  });
  
  });
  
// Forms processing 
$(".subscribe").validate({
  errorClass: "invalid",
  messages: { 
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
  }
  });
  
// Phone mask
$('[data-phone=digit]').mask('+7 (999) 999-99-99');

// Animation
AOS.init();

});