<template>
    <div id="index">
        <search v-if="index === 0"></search>
        <list v-if="index === 1"></list>
        <User v-if="index === 2"></User>
        <tabs position="bottom"
              :index="0"
              @chooseItem="chooseItem"></tabs>
    
    </div>
</template>

<script>
import Search from '../components/search/Search.vue';
import List from '../components/List.vue';
import User from '../components/User.vue';
import Tabs from '../components/Tabs.vue';
export default {
    name: 'index',
    data() {
        return {
            index: 0
        }
    },
    methods: {
        chooseItem({ index }) {
            this.index = index;
        }
    },
    components: {
        Tabs,
        Search,
        List,
        User
    }
}
</script>

<style>
    #index {
        height: 100%;
    }
</style>
