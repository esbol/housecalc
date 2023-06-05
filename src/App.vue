<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Home from './components/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
});
</script>

<style>
* {
  box-sizing: border-box;
  --first-color: #339966;
  --second-color: #FFCC00;
  --three-color: #FF9933;
  --fore-color: #6666CC;
  
}
:root {
  --sidebar-title-bg-color: #e6e6e6e0;
  --sidebar-bg-color: #fbfbfb;
  --sidebar-text-color: #383838;
  --body-bg-color: rgb(206, 202, 202);
  --sidebar-selected-color: #1a73e8;
  --main-border-color: rgb(223, 223, 223);
  --main-accent-color: #1a73e8;
  --main-text-disabled-color: rgb(140, 140, 140);
  --main-text-color: #383838;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0;
}
</style>
