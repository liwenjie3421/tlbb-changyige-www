<template>
  <div id="tabs">
    <m-tabbar v-model="selected">
      <m-tab-item v-for="tab in tabsArr" :key="tab" :id="tab">
        <img slot="icon" :src="`static/${tab}.png`">{{tabs2label[tab]}}
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
        tabsArr: ['searchConfig', 'list', 'user'],
        tabs2label: {
          'searchConfig': '条件配置',
          'list': '角色列表',
          'user': '我的'
        }
      }
    },
    watch: {
      selected(v) {
        this.$router.push(v);
        // 判断跳转是否成功
        if(this.selected !== this.$router.getMatchedComponents()[0].name) {
          this.selected = this.$router.getMatchedComponents()[0].name;
        }
      }
    }
  };

</script>
<style scoped></style>
