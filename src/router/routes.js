import SearchConfig from '../pages/SearchConfig.vue';
import List from '../pages/List.vue';
import User from '../pages/User.vue';

export default [
    {
        path: '/SearchConfig',
        name: 'searchConfig',
        component: SearchConfig
    },
    {
        path: '/index',
        name: 'list',
        component: List
    },
    {
        path: '/user',
        name: 'user',
        component: User
    }
];