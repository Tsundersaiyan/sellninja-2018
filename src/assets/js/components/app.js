// Load in jQuery.
import $ from 'jquery';

// Load in Popper.js dependency for Bootstrap bundle.
import 'popper.js';

// Load in Bootstrap JS.
import 'bootstrap';

// Load in AOS
import AOS from 'aos';

// Load in Font Awesome
import './component.fontawesome';

// Export jQuery for other scripts to use.
window.$ = $;

// Enabling enhanced navigation.
function initHeaderNav() {
    const headerNavHeight = $('.nav[data-nav="header"]').outerHeight();
    const menuClass = 'fs-nav';
    const navToggleClass = 'nav-toggle';
    let toTop = $(document).scrollTop();

    function showToggle(t) {
        if (t > (headerNavHeight)) {
            $(`.${navToggleClass}`).not(`.${navToggleClass}--close`).addClass(`${navToggleClass}--show`);
        } else {
            $(`.${navToggleClass}`).not(`.${navToggleClass}--close`).removeClass(`${navToggleClass}--show`);
        }
    }

    showToggle(toTop);

    $(`.${navToggleClass}`).on('click', () => {
        if ($(`.${menuClass}`).hasClass(`${menuClass}--open`)) {
            $(`.${menuClass}`).removeClass(`${menuClass}--open`);
        } else {
            $(`.${menuClass}`).addClass(`${menuClass}--open`);
        }
    });

    $(document).on('keydown', (e) => {
        if (e.keyCode === 27) {
            if ($(`.${menuClass}`).hasClass(`${menuClass}--open`)) {
                $(`.${menuClass}`).removeClass(`${menuClass}--open`);
            }
        }
    });

    $(document).scroll(() => {
        toTop = $(document).scrollTop();
        showToggle(toTop);
    });
}

function initAOS() {
    AOS.init({
        once: true,
    });
}

export default function initAppJs() {
    window.$ = $;
    window.jQuery = $;

    $(document).ready(() => {
        initAOS();
        initHeaderNav();
    });
}
