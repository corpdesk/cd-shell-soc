import $ from 'jquery';
import { registerSW } from 'virtual:pwa-register';
// Register Service Worker for PWA support
registerSW({ immediate: true });
// Expose jQuery globally if legacy scripts expect window.$
window.$ = $;
window.jQuery = $;
document.addEventListener('DOMContentLoaded', () => {
    const app = $('#app');
    app.html('<h1>Corpdesk SPA Initialized</h1>');
});
