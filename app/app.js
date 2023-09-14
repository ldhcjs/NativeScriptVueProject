import Vue from "nativescript-vue";
import Vuex from "vuex";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

Vue.use(Vuex);
Vue.use(RadSideDrawer);

import App from "./components/App";

Vue.config.silent = !__DEV__;

new Vue({
    render: (h) => h(App),
}).$start();
