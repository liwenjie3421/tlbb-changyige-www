<template>
    <div id="serach">
        <head-title title="自定义搜索条件" class="title"></head-title>
        <serach-item></serach-item>
        <Tips></Tips>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
import Tips from './Tips';
import SerachItem from './SerachItem';

export default {
    name: 'serach',
    components: {
        HeadTitle: Header,
        Tips,
        SerachItem
    }
};

</script>
<style scoped>
    .title {
        background-color: #fff;
        color: #000;
        font-size: 20px;
    }
</style>
