import Index from '../pages/Index.vue';
import Home from '../pages/Home.vue';
import SearchConfig from '../pages/SearchConfig.vue';

export default [
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
];