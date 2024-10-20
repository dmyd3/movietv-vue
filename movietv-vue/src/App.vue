<template>
  <SideBar></SideBar>

  <div id="content">
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
    },
    data() {
      return {
        movieColor: "rgb(35, 141, 177)",
        showColor: "orange",
      };
    },
    provide() {
      return {
        "movieColor": this.movieColor,
      };
    },
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
