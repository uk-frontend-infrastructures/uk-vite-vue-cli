import { createApp } from 'vue';
import './style.css';
import '@/styles/common.less';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';

const app = createApp(App);
app.use(router).use(store);
app.mount('#app');
