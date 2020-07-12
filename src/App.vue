<template>
<component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      layout: `div`,
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: olive;
  margin-top: 60px;
}
body {
  color: olive;
}

	
</style>
