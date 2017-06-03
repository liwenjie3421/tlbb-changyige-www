import Mock from 'mockjs';

import serversInfo from './serversInfo';
const mockConfig = {
    'getServers': {
        result: (() => {
            let serversObject = {};
            serversInfo.map(serversGroup => {
                serversGroup.server.map(server => {
                    serversObject[server.name] = {
                        area_name: serversGroup.name,
                        world_name: server.name,
                        world_id: server.id
                    }
                });
            });
            return serversObject;
        })()
    }
};

for (let mockName in mockConfig) {
    let re = new RegExp(mockName);
    Mock.mock(re, mockConfig[mockName]);
}