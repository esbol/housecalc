<template>
    <div class="container-card">
        <div class="title">Основные параметры</div>
        <div class="row">
            <div class="prop-name">Площадь</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupSquare">{{ state.totalSquare.toString().replace('.', ',') }} м2</div>
            </div>
        </div>
        <div class="row">
            <div class="prop-name">Количество этажей</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupFloorsCount">{{ state.floorsCount }} </div>
            </div>
        </div>
        <div class="row" v-if="state.floorsCount == 1">
            <div class="prop-name" >Высота этажа</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupFirstFloorHeight">{{ state.firsFloorHeight.toString().replace('.', ',') }} м</div>
            </div>
        </div>
        <div class="row" v-if="state.floorsCount == 2">
            <div class="prop-name">Высота 1-этажа</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupFirstFloorHeight">{{ state.firsFloorHeight.toString().replace('.', ',') }} м</div>
            </div>
        </div>
        <div class="row"  v-if="state.floorsCount == 2">
            <div class="prop-name">Высота 2-этажа</div>
            <div class="prop-value">
                <div class="prop-input" @click="showPopupSecondFloorHeight">{{ state.secondFloorHeight.toString().replace('.', ',') }} м</div>
            </div>
        </div>
      
    </div>

   
</template>

<script setup lang="ts">
import { IState } from '@/store';
import { ref } from 'vue';
import { useStore } from 'vuex';

const state = useStore().state as IState

const d = ref([
    {id:'1', name:'Item 1', color: '#339966', value: 22},
    {id:'2', name:'Item 2', color: '#FFCC00', value: 12},
    {id:'3', name:'Item 3', color: '#FF9933', value: 32},
    {id:'4', name:'Item 4', color: '#6666CC', value: 34}
])


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