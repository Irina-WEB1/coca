import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useActivitySlider } from './components/blog/activity-slider.js';
import { useArticlesSlider } from './components/blog/activity-slider.js';


useTheme();
useBurger();
useActivitySlider();
useArticlesSlider();