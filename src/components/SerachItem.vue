<template>
    <div id="serachItem">
        <div id="serachItemMain" class="clearfix">
            <div class="item"
                 v-for="n in 10">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'serachItem'
};

</script>
<style scoped>
.item {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    float: left;
    margin: 5px calc((100% - 50px * 4) / 4) 5px 0;
}
#serachItemMain{
    width: 100%;
    margin: 0 auto;
    position: relative;
    left: calc((100% - 50px * 4) / 8);
}
</style>
