<template>
  <div id="orderBy">
    <m-header title="选择排序方式"></m-header>
    <div v-for="(orderItem, orderType) in orderByObjs" @click="checkOrderTpye(orderType)">
      <m-cell :title="orderItem"></m-cell>
    </div>
  </div>
</template>
<script>
  import {
    Cell,
    Header,
    Button
  } from 'mint-ui';

  export default {
    name: 'orderBy',
    components: {
      mHeader: Header,
      mCell: Cell,
      mButton: Button
    },
    data() {
      return {
        orderByObjs: this.$Config.orderBy2label
      }
    },
    created() {
    },
    methods: {
      checkOrderTpye(orderType) {
        this.$store.dispatch('setOrderBy', {
          orderBy: orderType
        });
        this.$router.push('searchConfig');
      }
    }
  };

</script>
<style>


</style>
