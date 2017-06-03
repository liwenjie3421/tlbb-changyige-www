<template>
  <div id="searchGroup">
    <m-search v-model="searchServerCondition" :autofocus="true">
      <div v-for="item in searchServerResult" @click="test(item)">
        <m-cell :title="item.label" :key="item.world_id" :value="item.area_name">
        </m-cell>
      </div>
    </m-search>
  </div>
</template>
<script>
  import {
    Search,
    Cell
  } from 'mint-ui';

  export default {
    name: 'searchGroup',
    components: {
      mSearch: Search,
      mCell: Cell
    },
    data() {
      return {
        searchServerCondition: '',
        searchServerResult: [{
            label: 'a',
            world_id: 'world_id_a',
            area_name: 'area_name_a'
          },
          {
            label: 'b',
            world_id: 'world_id_b',
            area_name: 'area_name_b'
          }
        ]
      }
    },
    methods: {
        test(value) {
            console.log(value);
        }
    },
    watch: {
      searchServerCondition(v) {
        this.$http.post('/api/getServers').then((r)=>{
          console.log(r);
        });
      }
    }
  };

</script>
<style>


</style>
