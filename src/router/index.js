import Vue from 'vue';
import Router from 'vue-router';

import Index from '../pages/Index.vue';
import SearchConfig from '../pages/SearchConfig.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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
