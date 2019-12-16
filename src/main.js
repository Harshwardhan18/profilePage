import Vue from "vue";
import App from "./App.vue";
import { apolloProvider } from "./graphQL/Apollo/apollo";
import VueRouter from "vue-router";
import { routes } from "./routes";
import BootstrapVue from "bootstrap-vue";
import "./assets/styles/page.scss";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.use(vueSmoothScroll);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

new Vue({
  el: "#app",
  router,
  apolloProvider,
  render: h => h(App)
});
