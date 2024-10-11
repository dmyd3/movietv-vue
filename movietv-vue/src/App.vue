<template>
  <SideBar></SideBar>

  <div id="content">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <helloworld msg="Welcome to Your Vue.js App"></helloworld> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

#content {
  flex: 1;
  flex-grow: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  height: 100vh;
}

a[href] {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
</style>
