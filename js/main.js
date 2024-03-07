$(document).ready(function () {
  $(function () {
    $('.number-mask').mask('+7 (999) 999-99-99')
  })

  $('.burger').click(function () {
    $(this).children().toggleClass('active')
    $('.burger').toggleClass('white')
    $('.header__messengers-mob').toggleClass('active')
    $('body').toggleClass('fixed')
    $('.header__logo').toggleClass('white')
    $('.header__call-met').toggleClass('white')

    return false
  })

  $('.footer__list ul li a').click(function () {
    $('.header__messengers-mob').removeClass('active')
    $('.burger a').removeClass('active')
    $('body').removeClass('fixed')
    $('.header__logo').removeClass('white')
    $('.header__call-met').removeClass('white')
    $('.burger').removeClass('white')
  })

  $('.footer__list li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 85,
      },
      500
    )
    return false
  })

  $('.header__list li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 85,
      },
      500
    )
    return false
  })






  $('.quiz__inputs').on('click', 'label', function () {
    $(this.parentNode).find('label.active').removeClass('active')
    $(this).addClass('active')
  })

  $('.quiz__finish-socials').on('click', 'label', function () {
    $(this.parentNode).find('label.active').removeClass('active')
    $(this).addClass('active')
  })

  $('.projects__images').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    dots: true,
  })

  $('.projects__blocks').slick({
    slidesToShow: 2.5,
    infinite: false,
    arrows: true,
    swipe: false,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.5,
          swipe: true,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          swipe: true,
        },
      },
    ],
  })

  $('.button-prev').click(function () {
    $('.projects__block-first').toggleClass('white')
    $('.projects__block-last').removeClass('white')
      
  })
  $('.button-prev-two').click(function () {
    $('.projects__block-first').removeClass('white')
    $('.projects__block-last').toggleClass('white')
  })

  
  $('.slick-next').click(function () {
    $('.projects__block-first').toggleClass('white')
    $('.projects__block-last').removeClass('white')
      
  })

  $('.slick-prev').click(function () {
    $('.projects__block-first').removeClass('white')
    $('.projects__block-last').toggleClass('white')
  })

  $('.quiz__btn-next').click(function () {
    $(this).parent().parent().parent().parent().parent().parent().fadeOut(200)
    setTimeout(() => {
      $(this).parent().parent().parent().parent().parent().parent().next().fadeIn(200)
    }, 200)
    return false
  })

  $('.quiz__btn-prev').click(function () {
    $(this).parent().parent().parent().parent().parent().parent().fadeOut(200)
    setTimeout(() => {
      $(this).parent().parent().parent().parent().parent().parent().prev().fadeIn(200)
    }, 200)
    return false
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 450) {
      $('.header').addClass('show')
    } else {
      $('.header').removeClass('show')
    }
    if (sc > 300) {
      $('.header').addClass('dop')
    } else {
      $('.header').removeClass('dop')
    }
  })

  $('.projects__blocks').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setTimeout(() => {
      if ($('.projects__blocks .slick-next.slick-arrow').hasClass('slick-disabled')) {
        $('.button-prev').addClass('slick-disabled')
      } else {
        $('.button-prev').removeClass('slick-disabled')
      }
    }, 5)
  })

  $('.projects__blocks').on('beforeChange', function (event, slick, currentSlide, prevSlide) {
    setTimeout(() => {
      if ($('.projects__blocks .slick-prev.slick-arrow').hasClass('slick-disabled')) {
        $('.button-prev-two').addClass('slick-disabled')
      } else {
        $('.button-prev-two').removeClass('slick-disabled')
      }
    }, 5)
  })

  /*   $('.projects__blocks').on('afterChange', function (event, slick, currentSlide) {
      
      if(currentSlide === 2) {
          $('.button-prev').addClass('hidden');
      }
      else {
          $('.button-prev-two').removeClass('hidden');
      }
  
      if(currentSlide === 0) {
          $('.button-prev-two').addClass('hidden');
      }
      else {
          $('.button-prev-two').removeClass('hidden');
      }  
  }) */

  $('[data-tabs-type]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent]').hide().eq(index).fadeIn()
    }
    return false
  })

  $('.button-prev').on('click', function () {
    $('.projects__blocks').slick('slickNext')
  })

  $('.button-prev-two').on('click', function () {
    $('.projects__blocks').slick('slickPrev')
  })



  function responsive_slider2(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options)
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy')
      }
    }
  }


  responsive_slider2('.guarantee__blocks', 767, {
    slidesToShow: 1,
    arrows: true,
    infinite: false,

  })

  $(window).resize(function () {
    responsive_slider2('.guarantee__blocks', 767, {
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    })
  })











  function responsive_slider(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options)
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy')
      }
    }
  }

  responsive_slider('.advantages__items', 767, {
    slidesToShow: 1,
    arrows: true,
    infinite: false,

  })

  $(window).resize(function () {
    responsive_slider('.advantages__items', 767, {
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    })
  })

  responsive_slider('.advantages__head', 767, {
    slidesToShow: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
  })

  $(window).resize(function () {
    responsive_slider('.advantages__head', 767, {
      slidesToShow: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
    })
  })

  responsive_slider('.advantages__bottom', 767, {
    slidesToShow: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
  })

  $(window).resize(function () {
    responsive_slider('.advantages__bottom', 767, {
      slidesToShow: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800,
    })
  })


  $('.select-box__input').each(function () {
    let input = $(this).is(':checked')
    if (input == true) {
      let numberItem = $(this).attr('id')
      $('.select-box__list').find(`[for='${numberItem}']`).hide()
    }
  })

  $('.select-box__option').click(function () {
    let item = $(this).attr('for')
    $('.select-box__option').show()
    $('.select-box__list').find(`[for='${item}']`).hide()
  })

  $('.faq__header').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active')
      $(this).removeClass('active')
      $(this).next().slideUp(300)
    } else {
      $('.faq__header').removeClass('active')
      $('.faq__body').slideUp(300)
      $(this).toggleClass('active')
      $(this).next().slideToggle(300)
    }
  })

  $('.swiper__dots-decor').click(function () {
    $('.swiper__dots li').removeClass('active')
    $('.house__list').removeClass('active')
    $(this).parent().addClass('active')
    const $listLi = $(this).closest('.house__items')
    const li = $listLi.find('.house__lists')

    let number = $(this).attr('data-slide-numer')

    li.find(`[data-slide-content="${number}"]`).addClass('active')

  })







  var swiper2 = new Swiper('.gallery-thumbs-second', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        spaceBetween: 5,
      },

      991: {
        spaceBetween: 10,
      },
    },
  })

  var swiperGallery2 = new Swiper('.gallery-second', {
    thumbs: {
      swiper: swiper2,
    },
  })

  var swiper4 = new Swiper('.gallery-thumbs-third', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var swiperGallery2 = new Swiper('.gallery-third', {
    thumbs: {
      swiper: swiper4,
    },
  })

  var swiper5 = new Swiper('.gallery-thumbs-four', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var swiperGallery2 = new Swiper('.gallery-four', {
    thumbs: {
      swiper: swiper5,
    },
  })

  var swiper6 = new Swiper('.gallery-thumbs-five', {
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var swiperGallery2 = new Swiper('.gallery-five', {
    thumbs: {
      swiper: swiper6,
    },
  })

  var swiper3 = new Swiper('.steps__pagination', {
    spaceBetween: 10,
    slidesPerView: 6,

    breakpoints: {
      320: {
        spaceBetween: 5,
        slidesPerView: 1,
      },

      991: {
        spaceBetween: 10,
      },
    },
  })

  var swiperGallery3 = new Swiper('.steps__slider', {
    thumbs: {
      swiper: swiper3,
    },
    centeredSlides: false,
    navigation: {
      nextEl: '.steps__btn-next',
      prevEl: '.steps__btn-prev',
    },
    autoHeight: true,
  })

  var swiper7 = new Swiper('.gallery-thumbs-modal', {
    slidesPerView: 10,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var swiperGallery7 = new Swiper('.gallery-modal', {
    thumbs: {
      swiper: swiper7,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    }
  })

  var swiper8 = new Swiper('.gallery-thumbs-modal-second', {
    slidesPerView: 10,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })

  var swiperGallery8 = new Swiper('.gallery-modal-second', {
    thumbs: {
      swiper: swiper8,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    }
  })

  var swiper9 = new Swiper('.gallery-thumbs-modal-third', {
    slidesPerView: 10,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
   
  })

  var swiperGallery9 = new Swiper('.gallery-modal-third', {
    thumbs: {
      swiper: swiper9,
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    }
  })



})

