require('./bootstrap');

window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

// Import modules...
import { createApp, h } from 'vue';
import { i18nVue } from 'laravel-vue-i18n'
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress';

// Import components...
import Multiselect from '@suadelabs/vue3-multiselect'

// font awesome vue
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far)
dom.watch();

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .use(i18nVue, {
        resolve: lang => import(`../lang/${lang}.json`),
    })
    .component('multiselect', Multiselect)
    .component('InertiaHead', Head)
    .component('InertiaLink', Link)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
