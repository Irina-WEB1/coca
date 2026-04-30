import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useEverythingSlider, useMeetSlider } from './components/about/slider-about.js';

useTheme();
useBurger();
useEverythingSlider();
useMeetSlider();
