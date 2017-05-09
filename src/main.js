import Vue from 'vue';
import 'mint-ui/lib/style.css'

import App from './App';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});
