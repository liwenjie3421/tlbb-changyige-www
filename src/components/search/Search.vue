<template>
    <div id="serach">
        <head-title title="自定义搜索条件"
                    class="title"></head-title>
        <checklist id="checklist"
                   title="选中的条件将会用于搜索，请点击配置"
                   v-model="searchItems"
                   :options="options">
        </checklist>
        <div style="text-align: center; padding-top: 10px;">
            <m-button size="small"
                      type="primary"
                      @click="toConfig">去配置</m-button>
        </div>
    </div>
</template>
<script>
import { Header, Checklist, Button } from 'mint-ui';

import Congfig from '../../config';
const { conditions } = Congfig;
export default {
    name: 'serach',
    components: {
        HeadTitle: Header,
        Checklist,
        mButton: Button,
    },
    data() {
        return {
            searchItems: ['profession'],
            options: []
        }
    },
    created() {
        for(let item in conditions) {
            this.options.push({
                label: conditions[item].label,
                value: item,
                checked: true
            });
        }
    },
    methods: {
        toConfig() {
        }
    }
};

</script>
<style scoped>
#serach {
    height: calc(100% - 50px);
    overflow: hidden;
}

.title {
    background-color: #fff;
    color: #000;
    font-size: 20px;
}

#checklist {
    height: calc(100% - 100px);
    overflow: auto;
}
</style>
