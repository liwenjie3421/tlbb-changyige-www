import Vue from 'vue';
import Router from 'vue-router';

import Index from '../pages/Index.vue';
import Home from '../pages/Home.vue';
import SearchConfig from '../pages/SearchConfig.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/SearchConfig',
      name: 'SearchConfig',
      component: SearchConfig
    }
  ]
});
