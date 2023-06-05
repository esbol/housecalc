<template>
    <div class="container-card">
        <div class="title">Итоговая стоимость дома</div>
        <div class="totalCost">235 594 625</div>
        <div class="units">тенге</div>
        <Chart :data="data" />


        <div class="row" v-for="d in data" :key="d.id">
            <div class="prop-name">
                <div class="circle" :style="'background:' + d.color"></div>{{ d.name }}
            </div>
            <div class="prop-value">
                <div>{{ d.value }}%</div>
                <div class="arrow"></div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Chart from './UI/Chart.vue';

const data = ref([
    { id: '1', name: 'Фундамент', color: '#339966', value: 22 },
    { id: '2', name: 'Стены', color: '#FFCC00', value: 12 },
    { id: '3', name: 'Перекрытие', color: '#FF9933', value: 32 },
    { id: '4', name: 'Кровля', color: '#6666CC', value: 34 }
])

</script>

<style scoped>
.arrow {
    border-top: 2px solid gainsboro;
    border-right: 2px solid gainsboro;
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    margin-left: 10px;
    margin-right: 5px;
}

.circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 8px;
}

.units {
    margin-bottom: 20px;
}

.totalCost {
    font-weight: bold;
    font-size: 20px;
    margin-top: 25px;
}

.input {
    height: 100%;
    margin: 0;
    width: 50px;
    padding-left: 5px;
}

.prop-name {
    display: flex;
    align-items: center;
    border: 0px solid brown;
}

.prop-value {
    display: flex;
    align-items: center;
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
    text-align: center;
}

.title {
    font-weight: bold;
    margin-bottom: 15px;

}</style>