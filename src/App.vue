<template>
  <Navbar></Navbar>
  <app-header></app-header>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue"; 

export default {
  components: {
    Navbar, 
  },
};
</script>

<style lang="scss">
body {
    padding:0;
    margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
