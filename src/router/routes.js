import SearchConfig from '../pages/search/SearchConfig.vue';
import List from '../pages/list/List.vue';
import User from '../pages/user/User.vue';
import StateArea from '../pages/search/StateArea.vue';
import ServersGroup from '../pages/search/ServersGroup.vue';
import SearchList from '../pages/search/SearchList.vue';

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
        path: '/serversGroup',
        name: 'serversGroup',
        component: ServersGroup
    },
    {
        path: '/searchList',
        name: 'searchList',
        component: SearchList
    }
];