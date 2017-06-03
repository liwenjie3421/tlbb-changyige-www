import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import 'mint-ui/lib/style.css'

import store from './store';
import App from './App';
import router from './router';
import Config from './config';
import Mock from './mock';

Vue.config.productionTip = false;
Vue.prototype.$Config = Config;
Vue.prototype.$http = Axios;
/* eslint-disable no-new */

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
