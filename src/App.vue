<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{ name }}</h2>

    <display></display>
    <increment></increment>

  </div>
</template>

<script>

import Display from './components/Display.vue'
import Increment from './components/Increment.vue'

export default {
    data () {
      return {
        name : 'Vue.js and vuex'
      }
    },

    components: {
      display : Display,
      increment : Increment
    }
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>
