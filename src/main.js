import Vue from 'vue';

import 'font-awesome/css/font-awesome.css';

import App from './App.vue';

import router from './routes';

Vue.config.productionTip = false;

new Vue({ render: h => h(App), router }).$mount('#app');