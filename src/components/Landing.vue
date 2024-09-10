<script lang="ts">
import {defineComponent,ref} from 'vue'
import {useRouter} from 'vue-router'
import Information from './Information.vue'
export default defineComponent({
    name:"Landing",
    setup(_,{emit}){
        const router=useRouter();
        const inputValue = ref('');
        const handleSubmit=() => {
            router.push({
                name:'Information',
                params:{movieName:inputValue.value}
            });
        };
        return {
            inputValue,
            handleSubmit
        };
    },

});

</script>

<template>
    <div class="landing">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="inputField">Movie Name:</label>
                <input v-model="inputValue" type="text" id="inputField" required/>
                <button type="submit">Submit</button>

            </div>
        </form>



    </div>

</template>

<style lang="less" scoped>
.landing{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.form-group{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
label{
    font-size: 3rem;
    color: #efece3;
}
input{
    width: 24rem;
    height: 4rem;
    font-size: 3rem;
    border: none;
}
button{
    background-color:#141414;
    border: none;
    outline: none;
    box-shadow: none;
    width:12rem;
    height:3rem;
    margin-top: 2rem;
    font-size:2rem;
    color:red;    
}

</style>
