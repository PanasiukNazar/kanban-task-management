import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/style.css';
import 'vue-final-modal/style.css';
import { createVfm } from 'vue-final-modal';

const vfm = createVfm();

createApp(App).use(store).use(router).use(vfm).mount('#app');
