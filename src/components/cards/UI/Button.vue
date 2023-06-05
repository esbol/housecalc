<template>
    <div class="container-btn">

        <slot />

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-accent-color);
    color: white;
    border: none;
    border-radius: 3px;
    width: 100%;
    height: 100%;
}
</style>