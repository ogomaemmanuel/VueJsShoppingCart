import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import product from './modules/products'
import users from './modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product,
        users,
        cart,
    }
});