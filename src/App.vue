<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import header from './components/pageHeader/header.vue'
import footer from './components/pageFooter/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appHeader : header
  }
}
</script>

<style lang="scss">

</style>
