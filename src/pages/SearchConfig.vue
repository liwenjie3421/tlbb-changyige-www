<template>
    <div id="SearchConfig">
        <hea-title title="详细配置">
            <router-link to="/index" slot="left">
                <m-button icon="back">返回</m-button>
            </router-link>
        </hea-title>
        <m-cell v-for="(scItem, scName) in searchConditions" :title="scItem.label" :key="scName">
            <div v-if="scItem.rangeInput">
                <m-field placeholder="下限（空为不设置）" type="number" v-model="scItem.range[0]"></m-field>
                <m-field placeholder="上限（空为不设置）" type="number" v-model="scItem.range[1]"></m-field>
            </div>
            <div v-else @click="detailConfig(scName)">
                {{scItem.value}}
            </div>
        </m-cell>
        <div style="text-align: center; padding-top: 10px;">
            <m-button size="small" type="primary" @click="toSearch">
                去配置
            </m-button>
        </div>
        <m-popup v-model="popupVisible" position="bottom" style="width: 100%;">
            <div v-if="popupItem === 'profession'">
                <m-picker :slots="profession" @change="onProfessionChange"></m-picker>
            </div>
    
            <div v-if="popupItem === 'level'">
                <m-picker :slots="level" @change="onLevelChange"></m-picker>
            </div>
    
            <div v-if="popupItem === 'sex'">
                <m-picker :slots="sex" @change="onSexChange"></m-picker>
            </div>
    
            <div v-if="popupItem === 'xiulian'">
                <m-picker :slots="xiulian" @change="onXiulianChange"></m-picker>
            </div>
    
            <div v-if="popupItem === 'xinfa'">
                <m-picker :slots="xinfa" @change="onXinfaChange"></m-picker>
            </div>
        </m-popup>
    </div>
</template>

<script>
    import {
        Header,
        Button,
        Cell,
        Popup,
        Picker,
        Field
    } from 'mint-ui';
    
    export default {
        name: 'SearchConfig',
        data() {
            return {
                searchConditions: {},
                popupVisible: false,
                popupItem: '',
                profession: [{
                    values: this.$Config.professionList
                }],
                level: [{
                    values: this.$Config.levelList
                }, {
                    divider: true,
                    content: '-',
                }, {
                    values: this.$Config.levelList
                }],
                sex: [{
                    values: this.$Config.sexList
                }],
                xiulian: [{
                    values: this.$Config.xiulianList
                }],
                xinfa: [{
                    values: this.$Config.xinfaList
                }]
            }
        },
        methods: {
            detailConfig(id) {
                this.popupItem = id;
                this.popupVisible = true;
            },
            onProfessionChange(picker, values) {
                this.searchConditions.profession.value = values[0];
            },
            onLevelChange(picker, values) {
                this.searchConditions.level.value = `${values[0]}-${(values[1] >= values[0]) ? values[1] : values[0]}`;
            },
            onSexChange(picker, values) {
                this.searchConditions.sex.value = values[0];
            },
            onXiulianChange(picker, values) {
                this.searchConditions.xiulian.value = values[0];
            },
            onXinfaChange(picker, values) {
                this.searchConditions.xinfa.value = values[0];
            },
            toSearch() {
                const {
                    domain
                } = this.$Config;
                let searchObj = {};
                for (let name in this.searchConditions) {
                    let item = this.searchConditions[name];
                    console.log(item.rangeInput)
                    if (!item.rangeInput) {
                        if (this.DEFAULT_VALUE !== item.value) {
                            searchObj[name] = item.value;
                        }
                    } else {
                        if (item.range[0] && item.range[0]) {
                            searchObj[name] = `${item.range[0]}-${item.range[1]}`;
                        }
                    }
                }
                this.$http.get('/getRoleList', {
                    params: searchObj
                });
                console.log(searchObj);
            }
        },
        components: {
            HeaTitle: Header,
            mButton: Button,
            mCell: Cell,
            mPopup: Popup,
            mPicker: Picker,
            mField: Field
        },
        created() {
            const {
                conditions
            } = this.$Config;
            this.DEFAULT_VALUE = '点我配置：）';
            this.$store.getters.searchConditions.map((v, k) => {
                this.searchConditions[v] = {
                    label: conditions[v].label,
                    value: this.DEFAULT_VALUE,
                    rangeInput: conditions[v].rangeInput,
                    range: []
                }
            });
    
        }
    }
</script>

<style>
    #SearchConfig {
        height: 100%;
    }
    
    
    /*.number-range-main {
            height: 100%;
        }*/
</style>
