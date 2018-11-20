// Load in jQuery.
import $ from 'jquery';

// Load in Popper.js dependency for Bootstrap bundle.
import 'popper.js';

// Load in Bootstrap JS.
import 'bootstrap';

// Export jQuery for other scripts to use.
window.$ = $;

export default function initAppJquery() {
    $(document).ready(() => {
        console.log('jQuery bundle ready.');
    });
}
