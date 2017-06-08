<template>
  <div id="searchConfig">
    <m-header title="条件配置"></m-header>
    <m-cell title="搜索条件配置" :label="seachConditionsLabel" to="searchList" is-link></m-cell>
    <m-cell title="选择公示或售卖" :label="stateAreaLabel" to="stateArea" is-link></m-cell>
    <m-cell title="选择区服" :label="serverLabel" to="betaOrFormal" is-link></m-cell>
    <m-cell title="排序方式" :label="orderByLabel" to="orderBy" is-link></m-cell>
    <div style="text-align: center; padding-top: 10px;">
      <m-button size="small" type="primary" @click="search">
        GO
      </m-button>
    </div>
    <m-tabs></m-tabs>
  </div>
</template>
<script>
  import {
    Cell,
    Header,
    Button
  } from 'mint-ui';
  import mTabs from '../../components/Tabs.vue';

  export default {
    name: 'searchConfig',
    components: {
      mTabs,
      mHeader: Header,
      mCell: Cell,
      mButton: Button
    },
    data() {
      return {
        stateAreaLabel: '必须配置',
        seachConditionsLabel: '',
        serverLabel: '任意区服',
        orderByLabel: ''
      }
    },
    created() {
      this.$store.dispatch('setOrderBy', {
        orderBy: 'equip_point-desc'
      });
      this.orderByLabel = this.$Config.orderBy2label[this.$store.getters.orderBy];

      let stateArea = this.$store.getters.stateArea;
      let serverInfo = this.$store.getters.serverInfo;

      if (stateArea && stateArea.label) {
        this.stateAreaLabel = `已配置: ${stateArea.label}`
      }
      if (serverInfo && serverInfo.world_name) {
        this.serverLabel = `已配置: ${serverInfo.world_name}`
      }
    },
    methods: {
      search() {
        this.$router.push('list');
      }
    }
  };

</script>
<style>


</style>
