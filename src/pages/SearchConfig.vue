<template>
  <div id="searchConfig">
    <m-header title="条件配置"></m-header>
    <m-cell title="搜索条件配置" :label="seachConditionsLabel" is-link></m-cell>
    <m-cell title="选择公示或售卖" :label="stateAreaLabel" to="stateArea" is-link></m-cell>
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
      return {
        stateAreaLabel: '必须配置',
        seachConditionsLabel: ''
      }
    },
    created() {
      let stateArea = this.$store.getters.stateArea;
      // console.log(stateArea);
      
      if (stateArea && stateArea.label) {
        this.stateAreaLabel = `已配置: ${stateArea.label}`
      }
    }
  };

</script>
<style>


</style>
