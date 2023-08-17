import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Modal } from 'usemodal-vue3';

const app = createApp(App);

app.component('Modal', Modal); // <-- here you can register.

app.mount('#app');
