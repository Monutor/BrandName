$(function () {

  $(".js-rate").rateYo({
    rating: 4,
    starWidth: "18px",
    spacing: "7px",
  });

  $('.testimonials__inner').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  //Mobile Menu
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.menu');
  let bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active');
    if (mobileMenu.classList.contains('menu--active')) {
      burger.classList.add('burger--active');
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });

  //Mobile Search
  let buttonSearch = document.querySelector('.header__icon--search');
  let headerForm = document.querySelector('.header__form');

  buttonSearch.addEventListener('click', () => {
    headerForm.classList.toggle('header__form--active');
  });
});