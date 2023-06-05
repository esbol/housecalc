<template>
    <div v-if="store.showPopup.show">
        <div class="popup-container">
        
            <component :is="components[store.showPopup.componentIndx]" @close="store.showPopup.show = false"></component>
        </div>
        <div class="back" @click="store.showPopup.show = false"></div>
    </div>
</template>

<script setup lang="ts">

import TotalSquarePopup from './TotalSquarePopup.vue'
import FloorsCountPopup from './FloorsCountPopup.vue';
import FirstFloorHeightPopup from './FirstFloorHeightPopup.vue';
import SecondFloorheight from './SecondFloorHeghtPopup.vue'
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import { IState } from '@/store';

const components = [
    TotalSquarePopup,
    FloorsCountPopup,
    FirstFloorHeightPopup,
    SecondFloorheight
]
const store = useStore().state as IState


</script>

<style scoped>
.back {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(12, 12, 12, 0.5);
    z-index: 4000;
}

.popup-container {
    position: fixed;
    width: calc(100vw - 50px);
    left: 25px;
    top: 50px;
    box-shadow: 2px 2px 2px gray;
    border: 1px solid rgb(201, 201, 201);
    background-color: white;
    border-radius: 5px;
    z-index: 5000;
}
</style>