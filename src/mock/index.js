import Mock from 'mockjs';

import serversInfo from './serversInfo';
const mockConfig = {
    'getServers': {
        result: serversInfo
    }
};

for (let mockName in mockConfig) {
    let re = new RegExp(mockName);
    Mock.mock(re, mockConfig[mockName]);
}