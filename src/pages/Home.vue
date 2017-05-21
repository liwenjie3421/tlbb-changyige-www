<template>
    <div id="home">
        <hea-title title="选择内测或公测" class="title">
            <m-button slot="right" @click="changeStateArea(stateArea.value)">{{stateArea.label}}</m-button>
        </hea-title>
        <div v-for="item in serverGroupsArr" @click="checkServerGroup(item.value)">
            <m-Cell :title="item.label" :key="item.value" is-link>
            </m-Cell>
        </div>
    
        <m-popup class="maxSize" v-model="popupVisible" position="right">
            <div class="maxSize">
                <hea-title title="选择区服" fixed class="title">
                    <m-button icon="back" slot="left" @click="closePopup">返回</m-button>
                    <!--<router-link to="/index" slot="right">
                                                        <m-button>跳过</m-button>
                                                    </router-link>-->
                </hea-title>
                <div style="margin-top:40px; position:relative;">
                    <search v-model="searchServerCondition" :autofocus="true">
                        <div v-for="item in searchServerResult" @click="chooseServer(item)">
                            <m-cell :title="item.label" :key="item.world_id" :value="item.area_name" :is-link="!!(item.label && item.world_id && item.area_name)">
                            </m-cell>
                        </div>
                    </search>
                </div>
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
            stateArea: {
                label: '公示区',
                value: 'public'
            },
            searchServerResult: [],
            searchServerCondition: '',
            popupVisible: false,
        }
    },
    watch: {
        searchServerCondition(value) {
            clearTimeout(this.sscSetTime);
            this.sscSetTime = setTimeout(() => {
                this.searchServerResult = [{ label: '搜索中..' }]
                this.$http.get('/api/getServers', {
                    params: {
                        serverGroup: this.serverGroup,
                        searchServerKey: encodeURIComponent(this.searchServerCondition)
                    }
                }).then((res) => {
                    if (res.data && res.data.result && res.data.result.length && !res.data.error) {
                        this.searchServerResult = res.data.result;
                    } else {
                        this.searchServerResult = [{
                            label: '未查询到相关服务器'
                        }];
                    }
                });
            }, 300);
        }
    },
    methods: {
        changeStateArea(value) {
            let stateAreaConfig = {
                'public': '公示区',
                'sell': '售卖区'
            };
            if (this.stateArea.value === 'public') {
                this.stateArea.value = 'sell';
                this.stateArea.label = stateAreaConfig['sell'];
            } else {
                this.stateArea.value = 'public';
                this.stateArea.label = stateAreaConfig['public'];
            }
            this.chooseStateArea();
        },
        checkServerGroup(item) {
            this.popupVisible = true;
            this.serverGroup = item;
            this.$store.dispatch('chooseServerGroup', {
                choosed: this.serverGroup
            });
            // console.log(this.$store.getters.serverGroup);
        },
        closePopup() {
            this.popupVisible = false;
        },
        chooseServer(item) {
            if (!(item.label && item.world_id && item.area_name)) {
                return;
            }
            this.$router.push('Index');
            this.$store.dispatch('choosesServer', {
                serverInfo: {
                    area_name: item.area_name,
                    world_name: item.label,
                    world_id: item.world_id
                }
            });
            // console.log(this.$store.getters.serverInfo);
        },
        chooseStateArea() {
            this.$store.dispatch('chooseStateArea', {
                stateArea: this.stateArea
            });
            // console.log(this.$store.getters.stateArea);
        }

    },
    mounted() {
        this.$nextTick(() => {
            this.chooseStateArea();
        });
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
