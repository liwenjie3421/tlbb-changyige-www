<template>
  <div id="searchGroup">
    <m-header title="搜索区服">
      <!--<div></div>-->
      <m-button slot="right" @click="clear">清空</m-button>
    </m-header>
    <m-search style="position:relative;" v-model="searchServerCondition" :autofocus="true">
      <div v-for="item in searchServerResult" @click="chooseServer(item)">
        <m-cell :title="item.world_name" :key="item.world_id" :value="item.area_name">
        </m-cell>
      </div>
    </m-search>
  </div>
</template>
<script>
  import {
    Search,
    Cell,
    Header,
    Button
  } from 'mint-ui';

  export default {
    name: 'searchGroup',
    components: {
      mSearch: Search,
      mCell: Cell,
      mHeader: Header,
      mButton: Button
    },
    data() {
      return {
        searchServerCondition: '',
        searchServerResult: [],
        serversGroup: {},
      }
    },
    created() {
      this.$http.post('/api/getServers').then((r) => {
        let serversObject = {};
        let serversName = [];
        r.data.result.map(area => {
          area.server.map(server => {
            serversObject[server.name] = {
              area_name: area.name,
              world_name: server.name,
              world_id: server.id
            };
            serversName.push(server.name);
          });
        });
        this.serversGroup.servers = serversObject;
        this.serversGroup.serversName = serversName;
      });
    },
    methods: {
      chooseServer(serverInfo) {
        this.$store.dispatch('choosesServer', {
          serverInfo
        });
        this.$router.push('searchConfig');
      },
      clear() {
        this.$store.dispatch('choosesServer', {
          serverInfo: {}
        });
        this.$router.push('searchConfig');
      }
    },
    watch: {
      searchServerCondition(value) {
        clearTimeout(this.ssTimeOut);
        this.searchServerResult = [];
        this.ssTimeOut = setTimeout(() => {
          let r = [];
          this.serversGroup.serversName.map((v, k) => {
            if (v.indexOf(value) > -1) {
              let servers = this.serversGroup.servers;
              r.push({
                area_name: servers[v].area_name,
                world_name: servers[v].world_name,
                world_id: servers[v].world_id
              });
            }
          });
          this.searchServerResult = r;
        }, 200);
      }
    }
  };

</script>
<style>


</style>
