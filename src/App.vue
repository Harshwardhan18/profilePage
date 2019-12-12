<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import header from './components/pageHeader/header.vue'
import queries from './graphQL/queries'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appHeader : header
  }
}
</script>

<style>
.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>
