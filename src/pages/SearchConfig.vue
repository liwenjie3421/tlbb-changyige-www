<template>
    <div id="SearchConfig">
        <hea-title fixed
                   title="固定在顶部">
            <router-link to="/"
                         slot="left">
                <m-button icon="back">返回</m-button>
            </router-link>
        </hea-title>
    </div>
</template>

<script>
import { Header, Button } from 'mint-ui';

export default {
    name: 'SearchConfig',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        HeaTitle: Header,
        mButton:Button
    }
}
</script>

<style>
#SearchConfig {
    height: 100%;
}
</style>
