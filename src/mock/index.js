import Mock from 'mockjs';

import serversInfo from './serversInfo';
import roleList from './roleList';


const mockConfig = {
    'getServers': {
        result: serversInfo
    },
    'getRoleList': {
        'result|1-10': roleList
    }
};

for (let mockName in mockConfig) {
    let re = new RegExp(mockName);
    Mock.mock(re, mockConfig[mockName]);
}