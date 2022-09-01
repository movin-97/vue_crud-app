import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { productDetalis } from "./Modules/productsItem";

Vue.use(Vuex);

const store: StoreOptions<any>= {
  modules: {
    productDetalis
  },
};
export default new Vuex.Store(store);
