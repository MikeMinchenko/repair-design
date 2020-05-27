$(document).ready(function () {
  // МОДАЛЬНОЕ ОКНО
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
  // ОКНО БЛАГОДАРНОСТИ
  var thanks = $('.thanks'),
      thanksClose = $('.thanks__button');  
  // закрытие модального по нажатию на кнопку close
  thanksClose.on('click', function () {
    thanks.removeClass('thanks--visible');
  });
  // закрытие окна благодарности по клику вне окна
  $(document).click(function (e) {
    if (e.target.classList.contains('thanks')) {
      thanks.removeClass('thanks--visible');
    }
  });
  // закрытие окна благодарности по esc
  $(document).keydown(function (e) {
    if (e.key === 'Escape') {
      thanks.removeClass('thanks--visible');
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

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 30},1400);
    return false;
  });
  
  
  // // скрытие to top на маленьких экранах
  // $(window).width(function(){
  //   if ($(this).width() > 576) {
  //       $('.goTop').fadeIn();
  //   } else {
  //       $('.goTop').fadeOut();
  //   }
  // });

  // to top по клику
  $('.goTop').click(function(){
      $('html, body').animate({scrollTop : 0},1400);
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
  $( "form" ).each( function() {
    $(this).validate({
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
          minlength: 18
        },
        userEmail: {
          required: true,
          email: true
        },
        userQuestion: {
        required: true,
        minlength: 10
        },
        policyCheckbox: "required"
      },
      //сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя должно быть не короче 2 букв",
          maxlength: "Имя должно быть не длинее 15 букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Введите полный номер телефона"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный Email в формате name@domain.com"
        },
        userQuestion: {
        required: "Задайте Ваш вопрос",
        minlength: "Вопрос должен быть не короче 10 символов"
        },
        policyCheckbox: "Установите галочку на соглашении"
      },
        
      submitHandler: function(form) {
        
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),        
          success: function (response) {            
            $(form)[0].reset();            
            modal.removeClass('modal--visible');
            thanks.addClass('thanks--visible');            
          },
          
        });
      }
    });
  });

//  маска для телефона

  $('[type=tel]').mask('+7 (000) 000-00-00',);

//  инициализация карты

//Ymap start
  var spinner = $('.map-container').children('.loader');
  var check_if_load = 0;
  var myMapTemp, myPlacemarkTemp;


  function init () {
    var myMapTemp = new ymaps.Map("map", {
      center: [47.208901, 39.631539],
      zoom: 16,
      }, {
      searchControlProvider: 'yandex#search'
    });

    var myPlacemarkTemp = new ymaps.Placemark([47.208901, 39.631539], {
        hintContent: 'Наш офис',
        balloonContent: "Офис на 3 этаже",
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/location.png',
        // Размеры метки.
        iconImageSize: [35, 35],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
    });

    myMapTemp.geoObjects.add(myPlacemarkTemp);
    myMapTemp.behaviors.disable('scrollZoom');

    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
    waitForTilesLoad(layer).then(function() {
      //Скрываем
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback){

    var script = document.createElement("script");

    if (script.readyState){  //IE
      script.onreadystatechange = function(){
        if (script.readyState === "loaded" ||
                script.readyState === "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  
  var ymap = function() {
    $('.map-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
   
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true;
   
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
   
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=91aa17f6-4a8b-4b5b-bb3d-57cf3bd3c669&lang=ru_RU", function(){
             // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
             ymaps.load(init);
          });                
        }
      }
    );  
  }
   
  $(function() {
   
    //Запускаем основную функцию
    ymap();
   
  });

  // ВИДЕО С ЮТУБА
  var player;
  $('.video__play').on('click', 
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'RHzzLqJWqHs',
        events: {
          'onReady': videoPlay        
        }
      });
    })   
  // убираем шапку при прокрутке вниз и показываем при прокрутке вверх
  function videoPlay(event) {
    event.target.playVideo();
  }

  var header = $('.header'),
	scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
  
    if ( scrolled > 100 && scrolled > scrollPrev ) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });
  
});

















































//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//           center: [47.208901, 39.631539],
//           zoom: 16
//         }, {
//           searchControlProvider: 'yandex#search'
//         }),

//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//         ),

//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'Наш офис',
//           balloonContent: '3 этаж'
//         }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: 'img/location.png',
//           // Размеры метки.
//           iconImageSize: [35, 35],
//           // Смещение левого верхнего угла иконки относительно
//           // её "ножки" (точки привязки).
//           iconImageOffset: [-5, -38]
//         });

//         myMap.geoObjects
//         .add(myPlacemark),
//         myMap.behaviors.disable('scrollZoom')
//     })




    
    






  

