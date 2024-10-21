<template>
  <SideBar></SideBar>

  <div id="content">
    <!-- This html structure is needed to animate route changes -->
    <router-view v-slot="slotProps">
      <transition name="content" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
      movieColor: "rgb(95 192 255)",
      showColor: "orange",
    };
  },
  provide() {
    return {
      "movieColor": this.movieColor,
      "showColor": this.showColor,
    };
  },
}
</script>

<style>
html,
body {
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

@keyframes fade-in {
  0% {
    opacity: 0;
    filter: blur(7px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
  }
}

.content-enter-active {
  animation: fade-in 0.5s ease-in-out;
}

.content-leave-active {
  animation: fade-in 0.5s ease-in-out reverse;
}
</style>
