import { GetterTree, ActionTree, MutationTree } from "vuex";
import { ProductsState } from "./ProductsTypes";
import MOCK_DATA from "../../Mock-Data/MOCK_DATA.json";

const state: ProductsState = {
  productsCard: MOCK_DATA,
  saveProducts: [],
  address: {},
};

const getters: GetterTree<any, any> = {
  getChange(state) {
    return state.productsCard;
  },
  getSave(state) {
    return state.saveProducts;
  },
  getAddress(state) {
    return state.address;
  },
};

const mutations: MutationTree<any> = {
  addItemSaveProduct(state, item) {
    state.saveProducts.push(item);
  },
  updateToAddress(state, item) {
    state.address = item;
  },
};

const actions: ActionTree<any, any> = {
  addToSaveProducts(context, item) {
    context.commit("addItemSaveProduct", item);
  },
  updateAdress(context, item) {
    context.commit("updateToAddress", item);
  },
};

export const productDetalis = {
  state,
  getters,
  actions,
  mutations,
};
