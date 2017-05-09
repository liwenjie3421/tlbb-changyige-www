<template>
    <div id="tips">
       <Badge type="error" size="small"> tips: 点击配置，勾选才生效</Badge>
    </div>
</template>
<script>
import { Badge } from 'mint-ui';
export default {
    name: 'tips',
    components: {
        Badge
    }
};

</script>
<style scoped>
    #tips{
        margin-top: 20px;
    }
</style>
