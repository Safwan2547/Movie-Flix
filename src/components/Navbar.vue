<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name:'Navbar'
});
</script>

<template>
    <nav class="navbar">
        <h1>MovieFlix</h1>
    </nav>
</template>

<style lang="less" scoped>

.navbar{
    background-color: #0f0f0f;
    padding:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: fixed;
}
h1{
    font-size: 3rem;
    font-weight: bolder;
    color:red;
}

</style>