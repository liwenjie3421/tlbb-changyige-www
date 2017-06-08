<template>
  <div id="list">
    <div v-for="role in roleList">
      <m-cell :title="`${role.roleName} [${role.roleProfession}] ${role.roleLevel}级`"></m-cell>
    </div>
    <m-tabs></m-tabs>
  </div>
</template>
<script>
  import {
    Cell
  } from 'mint-ui';
  import mTabs from '../../components/Tabs.vue';

  export default {
    name: 'list',
    components: {
      mCell: Cell,
      mTabs
    },
    data() {
      return {
        roleList: []
      }
    },
    created() {
      this.$http.post('api/getRoleList', {}).then((d) => {
        console.log(d.data.result);
        this.roleList = d.data.result;
      });
    }
  }

</script>
<style scoped>


</style>
