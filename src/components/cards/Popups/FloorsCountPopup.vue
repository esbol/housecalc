<template>
    <div class="container">
        <div class="title">
            Выберите этажность
        </div>
        <div class="input-div">
            <label for="one">
                <input type="radio" id="one" value="1" v-model="val" />
                Один этаж</label>


            <label for="two">
                <input type="radio" id="two" value="2" v-model="val" />
                Два этажа</label>

        </div>

        <div class="div-btn">
            <Button @click="setFloorsCount">OK</Button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { IState } from '@/store';
import Button from '../UI/Button.vue';

import { useStore } from 'vuex';
import { ref } from 'vue';

const state = useStore().state as IState
const val = ref(state.floorsCount)

function setFloorsCount() {
    state.floorsCount = val.value
    state.showPopup.show = false
    console.log(val.value);

}

</script>

<style scoped>
label {
    display: block;
    margin-top: 15px;
    border-bottom: 1px solid var(--main-border-color);
    padding-bottom: 10px;
}

.input-div {
    display: flex;
    flex-direction: column;
    text-align: left;
  
    margin: 15px 15px 25px 15px;
    border: 0px solid red;
}

.div-btn {
    width: 100px;
    height: 30px;
    margin: 20px auto 25px auto;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

input {
    font-size: 18px;
    padding: 0;
    text-align: center;
}

.title {

    margin: 15px auto;

}

.container {
    text-align: center;

}
</style>