import * as types from '../mutations-type';

const state = {
    searchConditions: []
}

// getters
const getters = {
    searchConditions: state => {
        if (state.searchConditions.length) {
            return state.searchConditions;
        }
        return JSON.parse(localStorage.searchConditions);
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}