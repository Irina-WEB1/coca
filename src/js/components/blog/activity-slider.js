import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useActivitySlider = () => {
  new Swiper('.activity__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.activity__slider-btns',
    },
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      600: {
        centeredSlides: true,
      },
      993: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     centeredSlides: true,
    //   },
    //   580: {
    //     slidesPerView: 'auto',
    //   }
    // }
  });
};

