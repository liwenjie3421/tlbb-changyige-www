import * as types from '../mutations-type';

const state = {
    searchConditions: [],
    serverGroup: '',
    serverInfo: {},
    stateArea: {
        label: '公示区',
        value: 'public'
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
        if (localStorage.serverInfo) {
            return JSON.parse(localStorage.serverInfo);
        }
        return state.serverInfo;
    },
    stateArea: state => {
        if (localStorage.stateArea) {
            return JSON.parse(localStorage.stateArea);
        }
        return state.stateArea;
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}