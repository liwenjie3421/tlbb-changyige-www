import * as types from './mutations-type';

export const chooseServerGroup = ({commit}, product) => {
    commit(types.CHOOSE_SERVER_GROUP, {
        choosed: product.choosed
    })
};

export const chooseSearchConditions = ({commit}, product) => {
    commit(types.CHOOSE_SEARCH_CONDITIONS, {
        choosed: product.choosed
    })
};

export const choosesServer = ({commit}, product) => {
    commit(types.CHOOSE_SERVER, {
        serverInfo: product.serverInfo
    })
};

export const chooseStateArea = ({commit}, product) => {
    commit(types.CHOOSE_STATE_AREA, {
        stateArea: product.stateArea
    })
};

export const setCondtionsDetails = ({commit}, product) => {
    commit(types.CONDITIONS_DETAILS, {
        conditionsDetails: product.conditionsDetails
    })
};
