<template>
  <div id="stateArea">
    <m-header title="公示区或售卖区"></m-header>
    <div v-for="stateItem in stateAreaArr" @click="chooseState(stateItem)">
      <m-cell :title="stateItem.label"></m-cell>
    </div>
  </div>
</template>
<script>
  import {
    Header,
    Cell
  } from 'mint-ui';

  export default {
    name: 'stateArea',
    components: {
      mHeader: Header,
      mCell: Cell
    },
    data() {
      return {
        stateAreaArr: [{
          label: '公示区',
          value: 'public'
        }, {
          label: '售卖区',
          value: 'sell'
        }]
      }
    },
    methods: {
      chooseState(stateItem) {
        this.$store.dispatch('chooseStateArea', {
          stateArea: {
            label: stateItem.label,
            value: stateItem.value
          }
        });
        console.log(this.$store.getters.stateArea);
        this.$router.push('searchConfig');
      }
    }
  }

</script>
<style scoped>


</style>
