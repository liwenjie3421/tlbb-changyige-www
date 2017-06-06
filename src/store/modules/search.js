import * as types from '../mutations-type';

const state = {
    searchConditions: [],
    conditionsDetails: {},
    serverGroup: '',
    serverInfo: {
        area_name: '',
        world_name: '',
        world_id: ''
    },
    stateArea: {
        label: '',
        value: ''
    }
}

// getters
const getters = {
    searchConditions: state => {
        if (state.searchConditions.length) {
            return state.searchConditions;
        }
        if (localStorage.searchConditions) {
            return JSON.parse(localStorage.searchConditions);
        }
        return state.searchConditions;
    },
    serverGroup: state => {
        if (state.serverGroup) {
            return state.serverGroup;
        }
        return localStorage.serverGroup;
    },
    serverInfo: state => {
        if (state.serverInfo.world_name) {
            return state.serverInfo;
        } else {
            if (localStorage.serverInfo) {
                return JSON.parse(localStorage.serverInfo);
            } else {
                return {};
            }
        }
    },
    stateArea: state => {
        if (state.stateArea.label && state.stateArea.value) {
            return state.stateArea;
        } else {
            if (localStorage.stateArea) {
                return JSON.parse(localStorage.stateArea);
            } else {
                return {};
            }
        }
    },
    conditionsDetails: state => {
        if (localStorage.conditionsDetails) {
            return JSON.parse(localStorage.conditionsDetails);
        } else {
            return {};
        }
    }
}

// actions
const actions = {

}

// mutations
const mutations = {
    [types.CHOOSE_SEARCH_CONDITIONS](state, {choosed}) {
        state.searchConditions = choosed;
        try {
            localStorage.setItem('searchConditions', JSON.stringify(choosed));
        } catch (e) {
            console.log(e);
        }
    },
    [types.CHOOSE_SERVER_GROUP](state, {choosed}) {
        state.serverGroup = choosed;
        try {
            localStorage.setItem('serverGroup', choosed);
        } catch (e) {
            console.log(e);
        }
    },
    [types.CHOOSE_SERVER](state, {serverInfo}) {
        state.serverInfo = serverInfo;
        try {
            localStorage.setItem('serverInfo', JSON.stringify(serverInfo));
        } catch (e) {
            console.log(e);
        }
    },
    [types.CHOOSE_STATE_AREA](state, {stateArea}) {
        state.stateArea = stateArea;
        try {
            localStorage.setItem('stateArea', JSON.stringify(stateArea));
        } catch (e) {
            console.log(e);
        }
    },
    [types.CONDITIONS_DETAILS](state, {conditionsDetails}) {
        state.conditionsDetails = conditionsDetails;
        try {
            localStorage.setItem('conditionsDetails', JSON.stringify(conditionsDetails));
        } catch (e) {
            console.log(e);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}