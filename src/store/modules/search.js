import * as types from '../mutations-type';

const state = {
    searchConditions: [],
    serverGroup: '',
    serverInfo: {}
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
        if (state.serverInfo) {
            return state.serverInfo;
        }
        if (localStorage.serverInfo) {
            return JSON.parse(localStorage.serverInfo);
        }
        return state.serverInfo;
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}