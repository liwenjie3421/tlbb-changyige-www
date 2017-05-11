<template>
    <div id="searchPopup">
        <config-header title="配置条件"
                       class="title"></config-header>
        <config-cell :key="item" v-for="item in searchItems" :title="conditions[item].label">
            <search-field :field="item"></search-field>
        </config-cell>
    </div>
</template>
<script>
import { Header, Cell, Button } from 'mint-ui';

import SearchField from './SearchField';

export default {
    name: 'searchPopup',
    data(){
        return {
            conditions: this.$Config.conditions,
            username: ''
        }
    },
    props: {
        searchItems: {
            type: Array
        }
    },
    components: {
        ConfigHeader: Header,
        ConfigCell: Cell,
        SearchField
    },
    created() {
        
    }
}
</script>
<style scoped>
#searchPopup {
    height: 100%;
    width: 100%;
}
.title {
    background-color: #fff;
    color: #000;
    font-size: 20px;
}
</style>