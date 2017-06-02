import SearchConfig from '../pages/SearchConfig.vue';
import List from '../pages/List.vue';
import User from '../pages/User.vue';
import StateArea from '../pages/StateArea.vue';
import ServerGroup from '../pages/ServerGroup.vue';

export default [
    {
        path: '/searchConfig',
        name: 'searchConfig',
        component: SearchConfig
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/stateArea',
        name: 'stateArea',
        component: StateArea
    },
    {
        path: '/serverGroup',
        name: 'serverGroup',
        component: ServerGroup
    }
];