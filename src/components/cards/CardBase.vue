<template>
    <div class="container-card">
        <div class="title">Basement</div>
        <div class="row">
            <div class="prop-name">Площадь</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupSquare">{{ state.totalSquare.toString().replace('.', ',') }} м2</div>
            </div>
        </div>
      
    </div>

   
</template>

<script setup lang="ts">
import { IState } from '@/store';
import { ref } from 'vue';
import { useStore } from 'vuex';

const state = useStore().state as IState



function showPopupSquare(){
    state.showPopup.componentIndx = 0
    state.showPopup.show = true
}
function showPopupFloorsCount(){
    state.showPopup.componentIndx = 1
    state.showPopup.show = true
}
function showPopupFirstFloorHeight(){
    state.showPopup.componentIndx = 2
    state.showPopup.show = true
}
function showPopupSecondFloorHeight(){
    state.showPopup.componentIndx = 3
    state.showPopup.show = true
}

</script>

<style scoped>


.prop-input{
    width: 80px;
    border: 1px solid gainsboro;
    display: flex;
    justify-content: end;
    padding: 5px;
}

.prop-name {

    border: 0px solid brown;
}

.prop-value {
    display: flex;
    border: 0px solid red;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gainsboro;
    height: 50px;
}

.container-card {
    width: 100%;
    border: 0px solid red;
    padding: 15px;
}

.title {
    font-weight: bold;
    margin-bottom: 15px;
}
</style>