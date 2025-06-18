
"use strict";

import {Collapse, Tab} from "bootstrap";
import AOS from 'aos';
import LazyLoad from "vanilla-lazyload";
import {drawNav} from "./modules/nav";
import {preventDefault, setCurrentYear, hideCover} from "./modules/helpers";
import drawTabs from "./modules/tabs";
import {initSwiperSlider} from "./modules/slider";
import {initCounterAnimation, initParallax} from "./modules/effects";
import setYTFrame from "./modules/video";
import {applyDatePicker, applyTimePicker} from "./modules/forms";
import {validate} from "./modules/forms";


document.addEventListener('DOMContentLoaded', () => {
    preventDefault();
    const lazyload = new LazyLoad();
    AOS.init({
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // animation repeat
    });
    initParallax();
    initCounterAnimation();
    if (document.querySelector('.header')) {
        drawNav();
    }
    drawTabs();
    initSwiperSlider('.gallery_slider', false, {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        speed: 1200,
        breakpoints: {
            566.98: {
                slidesPerView: 2,
            },
            1023.98: {
                slidesPerView: 3,
            },
            1199.98: {
                slidesPerView: 5,
            }
        }
    })
    applyDatePicker();
    applyTimePicker();
    setCurrentYear();
    setYTFrame();
    hideCover();
    validate();
    window.addEventListener('resize', initParallax);
    initSwiperSlider('.brands_list', false, {
        slidesPerView: 3,
        autoplay: true,
        speed: 1400,
        breakpoints: {
            567.98: {
                slidesPerView: 4,
            },
            1023.98: {
                slidesPerView: 5,
            }
        }
    })
})