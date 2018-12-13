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
    const menuClass = 'nav--mobile';
    const navToggleClass = 'nav-mobile-toggle';

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
}

// Modify Bootstrap accordion so ID tags aren't needed.
function initAccordion() {
    const accordionClass = 'accordion';

    $(`.${accordionClass}`).each((i, accordionEl) => {
        const accordionObj = $(accordionEl);

        accordionObj.find(`.${accordionClass}__card`).each((j, accordionCardEl) => {
            const accordionCard = $(accordionCardEl);

            accordionCard.find(`.${accordionClass}__collapse__link`).click((accordionLinkEl) => {
                const accordionCollapse = $(accordionLinkEl.currentTarget);

                accordionCollapse.toggleClass(`${accordionClass}__collapse__link--active`);
                accordionCollapse.closest(`.${accordionClass}__card`).find('.collapse').collapse('toggle');
            });
        });
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
        initAccordion();
    });
}
