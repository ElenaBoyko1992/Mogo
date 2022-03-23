//настройки gulp======================================
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


//подключение слайдера Swiper
new Swiper('.slider-header__container', {
        observer: true,
        observeParents: true,
        spaceBetween: 100,
        speed: 800,
        loop: true, 
        slidesPerView: 1,

        breakpoints: {
            600: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
             },

         },

});
new Swiper('.reviews-page__slider', {
    observer: true,
    observeParents: true,
    spaceBetween: 0,
    speed: 800,
    loop: true, 
    slidesPerView: 1,
    navigation: {
        nextEl: '.reviews-page__arrow_next',
        prevEl: '.reviews-page__arrow_prev',
    },

});
new Swiper('.reviews-2-page__slider', {
    observer: true,
    observeParents: true,
    spaceBetween: 0,
    speed: 800,
    loop: true, 
    slidesPerView: 1,
    navigation: {
        nextEl: '.reviews-2-page__arrow_next',
        prevEl: '.reviews-2-page__arrow_prev',
    },
});
new Swiper('.blog-page__slider', {
    observer: true,
    observeParents: true,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1,
         
        },
        670: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
     },

});
//функция определения мобильного устройства===================
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};


//Бургер=============================================
let rightItemsBurger = document.querySelector('.right-items__burger');
let headerBurger = document.querySelector('.header__burger');
let headerTop = document.querySelector('.header__top');
rightItemsBurger.addEventListener("click", function (e) {
  rightItemsBurger.classList.toggle('_active');
  headerBurger.classList.toggle('_active');
  headerTop.classList.toggle('_active');
});

//Задаем класс _show-icon-link (в блоках page__about, page__our-team, page__our-work)
let aboutIconLink = document.querySelectorAll('.items-about__icon-link');
let teamIconLink = document.querySelectorAll('.items-team__icon-link'); 
let hoverLink = document.querySelectorAll('.hover-link');
if (isMobile.any()) {
  for (let index = 0; index < aboutIconLink.length; index++) {
    aboutIconLink[index].classList.add('_show-icon-link');
  } 
  for (let index = 0; index < teamIconLink.length; index++) {
    teamIconLink[index].classList.add('_show-icon-link');
  } 
  for (let index = 0; index < hoverLink.length; index++) {
    hoverLink[index].classList.add('_show-icon-link');
  } 
} 

//Выпадающий текст (блок what-we-do)
let listTitle = document.querySelectorAll('.list-directions__title');
let listText = document.querySelectorAll('.list-directions__text-wrapper');

for (let index = 0; index < listTitle.length; index++) {
  listTitle[index].addEventListener("click", function () {
    listTitle[index].classList.toggle('_active');
    listText[index].classList.toggle('_active');
  });
};

//hover на ПК
let hoverPC = document.querySelectorAll('.hover-PC');
if (!isMobile.any()) {
  for (let index = 0; index < hoverPC.length; index++) {
    hoverPC[index].classList.add('_active');
  } 
} 

