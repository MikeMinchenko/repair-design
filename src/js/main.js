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
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var stepsSwiperTop = new Swiper ('.steps__swiperTop-container', {
    loop: true,
    pagination: {
      el: '.steps__swiperTop-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
        ' / ' +
        '<span class="' + totalClass + '"></span>'
      }
    },
    
    navigation: {
      nextEl: '.steps__swiper1-button-next',
      prevEl: '.steps__swiper1-button-prev',
    },
  });
  
  var stepsSwiper1 = new Swiper ('.steps__swiper1-container', {
    loop: true,
    pagination: {
      el: '.steps__swiper1-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps__swiper1-button-next',
      prevEl: '.steps__swiper1-button-prev',
    },
    
  });

  var stepsSwiper2 = new Swiper ('.steps__swiper2-container', {
    loop: true,
    navigation: {
      nextEl: '.steps__swiper1-button-next',
      prevEl: '.steps__swiper1-button-prev',
    },
   
    
    
  });

  

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  
  next.each((index, element) => {
    var bottonNext = $(element)
    var bottonPrev = $(prev[index])
    var swiperBullets = $(bullets[index])
    var indent = 23

    bottonNext.css('left', bottonPrev.width() + indent + swiperBullets.width() + indent)
    swiperBullets.css('left', bottonPrev.width() + indent)
  });
  
  $("#steps-button-0").click(function () {
    stepsSwiper2.slideTo(1) + stepsSwiper1.slideTo(1) + stepsSwiperTop.slideTo(1); 
  });
  $("#steps-button-1").click(function () {
    stepsSwiper2.slideTo(2) + stepsSwiper1.slideTo(2) + stepsSwiperTop.slideTo(2);
  });
  $("#steps-button-2").click(function () {
    stepsSwiper2.slideTo(3) + stepsSwiper1.slideTo(3) + stepsSwiperTop.slideTo(3);
  });
  $("#steps-button-3").click(function () {
    stepsSwiper2.slideTo(4) + stepsSwiper1.slideTo(4) + stepsSwiperTop.slideTo(4);
  });
  $("#steps-button-4").click(function () {
    stepsSwiper2.slideTo(5) + stepsSwiper1.slideTo(5) + stepsSwiperTop.slideTo(5);
  });
  $("#steps-button-5").click(function () {
    stepsSwiper2.slideTo(6) + stepsSwiper1.slideTo(6) + stepsSwiperTop.slideTo(6);
  });
  
  // $(document).on('click', function (event) {
    // console.log(event);
    
  // });

  stepsSwiper2.on('slideChange', function (event) {
    
    var activeSlide = ('#steps-button-' + stepsSwiper2.realIndex);
    var prevSlide = ('#steps-button-' + stepsSwiper2.previousIndex);
    
    // $(activeSlide).removeClass('inactive');
    // $(prevSlide).addClass('inactive');
    console.log(activeSlide);
    console.log(prevSlide);
  });
  
});
  

    
    





  // stepsSwiper3.on('slideChange', function () {
  //   stepsSwiper1.slideTo(stepsSwiper3.activeIndex)
  // });
  

