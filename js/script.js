"use strict"
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            autoHeight: true,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    }
  });
  

  
  $('#myform').validate({
    rules: {
        email: {required: true, email: true },
    }, 
    messages: {    
        email: {required: "You must provide an email", email: "A valid email address, please!"},
    },
  });  