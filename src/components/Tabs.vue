<template>
  <div id="tabs">
    <m-tabbar v-model="selected">
      <m-tab-item v-for="tab in tabsArr" :key="tab" :id="tab">
        <img slot="icon" :src="`static/${tab}.png`">条件配置
      </m-tab-item>
    </m-tabbar>
  </div>
</template>
<script>
  import {
    Tabbar,
    TabItem
  } from 'mint-ui';

  export default {
    name: 'tabs',
    components: {
      mTabbar: Tabbar,
      mTabItem: TabItem
    },
    data() {
      return {
        selected: this.$router.getMatchedComponents()[0].name,
        tabsArr: ['searchConfig', 'list', 'user']
      }
    },
    watch: {
      selected(v) {
        this.$router.push(v);
      }
    }
  };

</script>
<style scoped></style>
