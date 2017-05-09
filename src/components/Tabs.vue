<template>
    <div id="tabs"
         class=""
         :class="[position]">
        <div class="tabs-item"
             v-for="(tabsItem, k) in tabsItems"
             @click="chooseItem(k)">
            <div :id="tabsItem"></div>
            <div :class="{active: k === selfIndex, noActive: k !== selfIndex}"
                 :id="`${tabsItem}-text`">{{tabsItem}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tabs',
    data() {
        return {
            tabsItems: ['search', 'list', 'user'],
            selfIndex: 0
        }
    },
    props: {
        position: {
            type: String,
            default: 'bottom',
            validator(value) {
                return ['top', 'bottom'].indexOf(value) > -1;
            }
        },
        index: {
            type: Number,
            validator(value) {
                return value <= 2;
            }
        }
    },
    created() {
        this.selfIndex = this.index || 0;
    },
    methods: {
        chooseItem(k) {
            this.selfIndex = k;
            this.$emit('chooseItem', { index: k });
        }
    }
};

</script>
<style scoped>
#tabs {
    width: 100%;
    height: 50px;
    position: absolute;
    border-top: 1px solid #ccc;
}

.bottom {
    bottom: 0;
}

.top {
    top: 0;
}

.tabs-item {
    float: left;
    width: calc(100% / 3);
    height: 100%;
}

#search,
#list,
#user {
    width: 20px;
    height: 20px;
    background-size: contain;
    margin: 2px auto;
}

#search-text,
#list-text,
#user-text {
    width: 100%;
    height: 20px;
    margin: 2px auto;
    text-align: center;
}

.active {
    color: red;
}

.noActive {
    color: #000;
}

#search {
    background-image: url('../assets/search.png');
}

#list {
    background-image: url('../assets/list.png');
}

#user {
    background-image: url('../assets/user.png');
}
</style>
