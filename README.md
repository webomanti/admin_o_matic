
#### To run this project make sure you ran these commands
<code>git clone https://github.com/webomanti/admin_o_matic.git && cd admin_o_matic && composer update && php artisan key:generate && npm install</code><br><br>
Edit .env before database migration<br><br>
<code>php artisan migrate && php artisan db:seed --class=DatabaseSeeder</code><br><br>
<code>npm run watch</code><br><br>

## integrate langue support in vue (<a href="https://github.com/xiCO2k/laravel-vue-i18n" target="_blank">laravel-vue-i18n</a>)<br><br>
<code>npm i laravel-vue-i18n</code><br><br>
/resources/js/app.js:
```js
    import { createApp } from 'vue'
    import { i18nVue } from 'laravel-vue-i18n'
    createApp()
        .use(i18nVue, {
            resolve: lang => import(`../../lang/${lang}.json`),
        })
        .mount('#app');
```
<br>

Usage:
```html
<template>
    <div>
        <h1>{{ $t('Welcome :name!', { name: 'Francisco' }) }}. </h1>
        <div>Logged in {{ $tChoice('{1} :count minute ago|[2,*] :count minutes ago', 10) }}</div>
    </div>
</template>
```

## Admin-O-Matic Series on Youtube

Admin panel built with Laravel 8, Jetstream, Inertia, AdminLTE, Spatie's Laravel-permissions, Jetstrap, and Bootstrap 4

[Introduction Episode]

<a href="http://www.youtube.com/watch?feature=player_embedded&v=1L8B7pGOBdc
" target="_blank"><img src="http://img.youtube.com/vi/1L8B7pGOBdc/0.jpg" 
alt="Admin-O-Matic Intro" width="240" height="180" border="10" /></a>
