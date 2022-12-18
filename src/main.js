import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import "./assets/tailwind.css";

import { pt } from './locales/pt';
import { en } from './locales/en';

const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages: {
        pt, 
        en
    }
});

const pinia = createPinia()

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app');
