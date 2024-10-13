import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css';
import './style.css';
import Glide from '@glidejs/glide';

function create_element(html) {
    let div = document.createElement('div');
    
    div.innerHTML = html.trim();  
    return div.firstChild;
}

function glide_slider(el, options) {
    let default_options = {
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
        bullets: false
    }

    let settings = Object.assign(default_options, options);
    let glide = new Glide(el, settings);
    let sb;

    if (settings.arrows) {
        sb = new Array();
        sb.push('<div class="glide__arrows" data-glide-el="controls">');
        sb.push('<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg></button>');
        sb.push('<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg></button>');
        sb.push('</div>');
    
        let div = create_element(sb.join(''));
        el.append(div);
    }

    if (settings.bullets) {
        sb = new Array();
        sb.push('<div class="glide__bullets" data-glide-el="controls[nav]">');
        sb.push('<button class="glide__bullet" data-glide-dir="=0"></button>');
        sb.push('<button class="glide__bullet" data-glide-dir="=1"></button>');
        sb.push('<button class="glide__bullet" data-glide-dir="=2"></button>');
        sb.push('</div>');        

        let div = create_element(sb.join(''));
        el.append(div);
    }
    
    glide.mount();

    return glide;
}

export default glide_slider;