<template>
    <div id="searchPopup">
        {{field}}
    </div>
</template>
<script>

import Congfig from '../../config';
const { conditions } = Congfig;
export default {
    name: 'searchPopup',
    data(){
        return {
            
        }
    },
    props: {
        field: {
            type: String
        }
    },
    created() {
        
    }
}
</script>
<style scoped>
#searchPopup {
    height: 100%;
    width: 100%;
}

</style>