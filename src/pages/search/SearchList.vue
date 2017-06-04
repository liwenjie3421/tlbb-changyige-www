<template>
    <div id="serach">
        <hea-title title="自定义搜索条件"
                   class="title"></hea-title>
        <checklist id="checklist"
                   title="选中的条件将会用于搜索，请点击配置"
                   v-model="searchItems"
                   :options="options">
        </checklist>
        <div style="text-align: center; padding-top: 10px;">
            <m-button size="small"
                      type="primary"
                      @click="toSearchConfig">
                去配置
            </m-button>
        </div>
    </div>
</template>
<script>
import { Header, Checklist, Button } from 'mint-ui';

export default {
    name: 'serach',
    components: {
        HeaTitle: Header,
        Checklist,
        mButton: Button,
    },
    data() {
        return {
            searchItems: [],
            options: []
        }
    },
    created() {
        const { conditions } = this.$Config;
        for (let item in conditions) {
            this.options.push({
                label: conditions[item].label,
                value: item
            });
        }
        // 读取是否选择过
        this.searchItems = this.$store.getters.searchConditions;
    },
    methods: {
        toSearchConfig() {
            this.$router.push('SearchConfig');
            this.$store.dispatch('chooseSearchConditions', {
                choosed: this.searchItems
            });
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
