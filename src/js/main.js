$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-togle=modal]'),
      closeBtn = $('.modal__close');
  // вызов модального окна
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  // закрытие модального по нажатию на кнопку close
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  // закрытие модального по клику вне окна
  $(document).click(function (e) {
    if (e.target.classList.contains('modal')) {
      modal.removeClass('modal--visible');
    }
  });
  // закрытие модального по esc
  $(document).keydown(function (e) {
    if (e.key === 'Escape') {
      modal.removeClass('modal--visible');
    }
  });
  // скрытие to top на главном экране
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
});
  // скрытие to top на маленьких экранах
  $(window).resize(function(){
    if ($(this).width() < 576) {
        $('.goTop').fadeOut();
    } else {
        $('.goTop').fadeIn();
    }
  });

  // to top по клику
  $('.goTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
  // инициализация слайдера
  var mySwiper = new Swiper ('.projects__swiper-container', {

    loop:true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var projectNext = $('.projects__swiper-button-next');
  var projectPrev = $('.projects__swiper-button-prev');
  var projectBullets = $('.swiper-pagination');

  projectNext.css('left', projectPrev.width() + 23 + projectBullets.width() + 23);
  projectBullets.css('left', projectPrev.width() + 23);

  //слайдеры блока 6 шагов
  var stepsSwiperImg = new Swiper ('.steps__swiperImg-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.steps__swiperImg-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
            '/' +
            '<span class="' + totalClass + '"></span>'
      },
    },

    navigation: {
      nextEl: '.steps__swiperText-button-next',
      prevEl: '.steps__swiperText-button-prev',
    },
  });


  var stepsSwiperText = new Swiper ('.steps__swiperText-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.steps__swiperText-pagination',
      type: 'bullets',
    },
  });

  var stepsNext = $('.steps__swiperText-button-next');
  var stepsPrev = $('.steps__swiperText-button-prev');
  var stepsBullets = $('.steps__swiperText-pagination');

  stepsNext.css('left', stepsPrev.width() + 23 + stepsBullets.width() + 23);
  stepsBullets.css('left', stepsPrev.width() + 23);

  stepsSwiperImg.controller.control = stepsSwiperText;
  stepsSwiperText.controller.control = stepsSwiperImg;


  $(".steps-button-0").click(function () {
    stepsSwiperImg.slideTo(0);
  });
  $(".steps-button-1").click(function () {
    stepsSwiperImg.slideTo(1);
  });
  $(".steps-button-2").click(function () {
    stepsSwiperImg.slideTo(2);
  });
  $(".steps-button-3").click(function () {
    stepsSwiperImg.slideTo(3);
  });
  $(".steps-button-4").click(function () {
    stepsSwiperImg.slideTo(4);
  });
  $(".steps-button-5").click(function () {
    stepsSwiperImg.slideTo(5);
  });
  

  stepsSwiperImg.on('slideChange', function () {
    
    var activeSlide = ('.steps-button-' + stepsSwiperImg.realIndex);
    var prevSlide = ('.steps-button-' + stepsSwiperImg.previousIndex);

    $(activeSlide).removeClass('shadow');
    $(prevSlide).addClass('shadow');

  });

  var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
  );
  wow.init();

  $(window).width(function(){
    if ($(this).width() < 576) {
      $('.policy__label--mobile').text('Я соглашаюсь на обработку данных');
    } else {
      $('.policy__label--mobile').text('Я соглашаюсь c обработкой данных');
    }
  });

  $(window).resize(function(){
    if ($(this).width() < 576) {
      $('.policy__label--mobile').text('Я соглашаюсь на обработку данных');
    } else {
      $('.policy__label--mobile').text('Я соглашаюсь c обработкой данных');
    }
  });

//  валидация форм

  //валидность телефонного номера в соответствии с маской
  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{2}-\d{2}-\d{3}/g.test(value);
  });
  //форма модального окна
  $(".modal__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        checkMask: true,
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть не длинее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        checkMask: "Введите полный номер телефона"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный Email в формате name@domain.com"
      }
    },

  });
  //Форма секции Control
  $(".control__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        checkMask: true,
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть не длинее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        checkMask: "Введите полный номер телефона"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный Email в формате name@domain.com"
      }
    },

  });

//  форма секции footer
  $(".footer__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        checkMask: true,
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть не длинее 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        checkMask: "Введите полный номер телефона"
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный Email в формате name@domain.com"
      }
    },

  });

//  маска для телефона

  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});


  
});
  

    
    






  

