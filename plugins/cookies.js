import UniversalCookie from 'universal-cookie';

export default defineNuxtPlugin(nuxtApp => {
    const cookies = new UniversalCookie();
    nuxtApp.provide('cookies', cookies);
});
