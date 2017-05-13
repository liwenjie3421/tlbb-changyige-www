import Vue from 'vue';
import 'mint-ui/lib/style.css'

import App from './App';
import router from './router';
import Config from './config';
// import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$Config = Config;

/* eslint-disable no-new */

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
