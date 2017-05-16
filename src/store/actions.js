import * as types from './mutations-type';

export const chooseSearchConditions = ({commit}, product) => {
    commit(types.CHOOSE_SEARCH_CONDITIONS, {
        choosed: product.choosed
    })
};