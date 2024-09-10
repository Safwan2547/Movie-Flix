<template>
    <div class="homePage">
        <Landing></Landing>        
        <Footer></Footer>

    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Landing from './Landing.vue'

export default defineComponent({
    name:"HomePage",
    components:{
        Landing
        
        
    }
});

</script>

<style scoped>
.homePage{
    background-color:#141414;
    color:black;
    width: 100vw;
}
</style>