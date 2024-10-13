import glide_slider from './modules/glide/index.js';
import './app.scss';

document.addEventListener('DOMContentLoaded', () => {
    let options = {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        gap: 20,
        autoplay: 2000,
        hoverpause: true,
        keyboard: true,
        animationDuration: 400,
        arrows: true,
        bullets: true
    }
    
    let el = document.querySelector('.glide');
    let glide = glide_slider(el, options);

    globalThis.glide = glide;
})
