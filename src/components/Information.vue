<template>
    <div class="informationPage">
        <h3>Routed to information page</h3>
        <h3>User asked for:</h3>
        <h1> {{movieName}}</h1>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';

export default defineComponent({
    name: 'Information',
    setup(){
        const route=useRoute();
        return {
        movieName:route.params.movieName
    }
    },
    
})

</script>

<style lang="less" scoped>

.informationPage{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height:100vh;
    flex-direction: column;
}
h1{
    font-size: 3rem;
    color:#efece3;

}

</style>