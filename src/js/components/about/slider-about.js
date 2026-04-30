import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useEverythingSlider = () => {
  new Swiper('.everything__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.everything__slider-btns',
    },
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      600: {
        centeredSlides: false,
      },
      993: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  });
};

export const useMeetSlider = () => {
  new Swiper('.meet__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.meet__slider-btns',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};