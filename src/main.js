import Vue from 'vue';
import Vuex from 'vuex';
import 'mint-ui/lib/style.css'

import store from './store';
import App from './App';
import router from './router';
import Config from './config';

Vue.config.productionTip = false;
Vue.prototype.$Config = Config;
/* eslint-disable no-new */

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
