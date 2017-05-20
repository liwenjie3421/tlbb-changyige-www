<template>
    <div id="home">
        <hea-title title="选择内测或公测" class="title"></hea-title>
        <div v-for="item in serverGroupsArr" @click="checkServerGroup(item.value)">
            <m-Cell :title="item.label" :key="item.value" is-link>
            </m-Cell>
        </div>
    
        <m-popup class="maxSize" v-model="popupVisible" position="right">
            <div class="maxSize">
                <hea-title title="选择区服" fixed class="title">
                    <m-button icon="back" slot="left" @click="closePopup">返回</m-button>
                    <router-link to="/index" slot="right">
                        <m-button>跳过</m-button>
                    </router-link>
                </hea-title>
                <search v-model="searchServerCondition" :autofocus="true" style="margin-top: 40px;">
                    <div v-for="item in searchServerResult" @click="chooseServer(item)">
                        <m-cell :title="item.label" :key="item.world_id" :value="item.area_name" is-link>
                        </m-cell>
                    </div>
                </search>
            </div>
        </m-popup>
    </div>
</template>

<script>
import { Button, Header, Cell, Popup, Search } from 'mint-ui';

export default {
    name: 'home',
    data() {
        return {
            serverGroup: '',
            serverGroupsArr: [{
                label: '公测服',
                value: 'tl'
            }, {
                label: '内测服',
                value: 'tllm'
            }],
            searchServerResult: [],
            searchServerCondition: '',
            popupVisible: false,
        }
    },
    watch: {
        searchServerCondition(value) {
            clearTimeout(this.sscSetTime);
            this.sscSetTime = setTimeout(() => {
                this.$http.get('/api/getServers', {
                    params: {
                        serverGroup: this.serverGroup,
                        searchServerKey: this.searchServerCondition
                    }
                }).then((res) => {
                    if (res.data && res.data.result && !res.data.error) {
                        this.searchServerResult = res.data.result;
                    }
                });
            }, 300);
        }
    },
    methods: {
        checkServerGroup(item) {
            this.popupVisible = true;
            this.serverGroup = item;
        },
        closePopup() {
            this.popupVisible = false;
        },
        chooseServer(item) {
            // this.$router.push('Index');
            this.$store.dispatch('chooseServerGroup', {
                choosed: this.serverGroup
            });
            console.log(this.$store.getters.serverGroup);

        }

    },
    components: {
        mButton: Button,
        heaTitle: Header,
        mCell: Cell,
        mPopup: Popup,
        Search
    }
}
</script>

<style>
#home {
    height: 100%;
}

.maxSize {
    height: 100%;
    width: 100%;
}
</style>
