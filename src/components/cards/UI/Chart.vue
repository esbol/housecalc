<template>
    <div class="canvas">
        <svg class="chart" width="180" height="180" viewBox="0 0 50 50">
            <circle v-for="d in data" :key="d.id" :id="d.id" class="unit" r="15.9" cx="50%" cy="50%"></circle>

        </svg>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface IChart {
    id: string,
    name: string,
    color: string,
    value: number
}

const props = defineProps<{
    data: Array<IChart>
}>();

const count = props.data.length

function setChart() {
    let offset = 0
    props.data.forEach(d => {
        const elem = document.getElementById(d.id)
        if (elem) {
            
            elem.style.stroke = d.color
            elem.style.strokeDasharray = d.value + ' 100'
            elem.style.strokeDashoffset = '-' + offset
            offset += d.value
        }
    })

}

onMounted(() => {
    // Code to be executed when the component is mounted
    console.log(count);
    setChart();
});


</script>

<style scoped>
.unit {
    fill: none;
    stroke-width: 18;
    stroke-dasharray: 8 100;
    
}

.unit:nth-child(1) {
    stroke: #86cfa3;
    stroke-dasharray: 11 100;
    stroke-dashoffset: -8;
}

.unit:nth-child(2) {
    stroke: #a2c6e0;
}

.unit:nth-child(3) {
    stroke: #ffc7ec;
    stroke: #ffc7ec;
    stroke-dasharray: 11 100;
    stroke-dashoffset: -19;
}

.canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
}
</style>