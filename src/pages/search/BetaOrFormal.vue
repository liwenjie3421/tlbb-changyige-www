<template>
  <div id="BetaOrFormal">
    <m-header title="选择测试服或官服"></m-header>
    <div v-for="item in BetaOrFormalArr" @click="chooseServerGroup(item)">
      <m-cell :title="item.label"></m-cell>
    </div>
  </div>
</template>
<script>
  import {
    Header,
    Cell
  } from 'mint-ui';

  export default {
    name: 'BetaOrFormal',
    components: {
      mHeader: Header,
      mCell: Cell
    },
    data() {
      return {
        BetaOrFormalArr: [{
          label: '公测服',
          value: 'tl'
        }, {
          label: '内测服',
          value: 'tllm'
        }]
      }
    },
    methods: {
      chooseServerGroup(stateItem) {
        this.$store.dispatch('chooseBetaOrFormal', {
          betaOrFormal: stateItem.value
        });
        console.log(this.$store.getters.betaOrFormal);
        this.$router.push('serversGroup');
      }
    }
  }

</script>
<style scoped>


</style>
