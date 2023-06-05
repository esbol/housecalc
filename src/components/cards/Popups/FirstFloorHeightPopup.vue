<template>
    <div class="container">
        <div class="title">
            Введите высоту <span v-if="state.floorsCount > 1"> 1-го</span> этажа
        </div>
        <div class="input-div">
            <input type="number" v-model="val" @focus="($event.target as HTMLInputElement).select()" />
        </div>
        <div class="div-btn">
            <Button @click="setFloorHeight">OK</Button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { IState } from '@/store';
import Button from '../UI/Button.vue';

import { useStore } from 'vuex';
import { ref } from 'vue';

const state = useStore().state as IState
const val = ref(state.firsFloorHeight)

function setFloorHeight() {

    state.firsFloorHeight = val.value
    state.showPopup.show = false
    console.log(val.value);

}

</script>

<style scoped>
.input-div {
    display: flex;
    justify-content: center;
    height: 30px;
    margin-top: 25px;
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