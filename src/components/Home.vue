<template>
    <div class="container">
        <CardContainer >
           <CardMain/>
        </CardContainer>
        <div class="breaker"></div>
        <CardContainer>
            <CardTotal />
        </CardContainer>

        <PopupContainer />
    </div>
</template>

<script setup lang="ts">
import CardContainer from './cards/CardContainer.vue';
import CardMain from './cards/CardMain.vue'
import CardTotal from './cards/CardTotal.vue';
import PopupContainer from './cards/Popups/PopupContainer.vue';

</script>

<style scoped>

.container{
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
    border: 0px solid red;
    
}
.breaker{
    width: 100%;
    height: 50px;
    background-color: #e6e6e6;
}


</style>