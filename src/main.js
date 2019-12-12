import Vue from 'vue'
import App from './App.vue'
import {apolloProvider} from '../graphQL/Apollo/apollo'

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
