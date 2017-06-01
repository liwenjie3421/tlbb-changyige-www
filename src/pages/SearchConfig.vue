<template>
  <div id="searchConfig">
    <m-header title="条件配置"></m-header>
    <m-cell title="搜索条件配置" is-link></m-cell>
    <m-cell title="选择公示或售卖" is-link></m-cell>
    <m-cell title="选择区服" is-link></m-cell>
    <m-tabs></m-tabs>
  </div>
</template>
<script>
  import {
    Cell,
    Header
  } from 'mint-ui';
  import mTabs from '../components/Tabs.vue';

  export default {
    name: 'searchConfig',
    components: {
      mTabs,
      mHeader: Header,
      mCell: Cell
    },
    data() {
      return {}
    }
  };

</script>
<style>


</style>
