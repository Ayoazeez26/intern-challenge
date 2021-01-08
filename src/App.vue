<template>
  <div id="app">
    <Landing/>
    <font-awesome-icon :icon="['fas', 'robot']"/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Roboto', arial, sans-serif;
}

</style>
