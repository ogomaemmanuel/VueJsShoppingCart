const state = {
    cartItems: []
}

const getters = {
    cartItems: (state, getters, rootState, rootGetters) => state.cartItems,

}

const mutations = {
    ADD_TO_CART(state, newCartItem) {
           state.cartItems.push(newCartItem);
    },
    REMOVE_FROM_CART() {

    },
    // UPDATE_CART_ITEM(state, ){
    //
    // }

    INCREMENT_TOTAL(state, cartItem) {
        let productTotal = ((state.products.find(product => product.id = cartItem.id))[0] || {}).qty;
        if (productTotal > cartItem.total) {
            state.cartItems =
                state.cartItems.map(element => element.id ==
                cartItem.id ? {...element, total: Number(cartItem.total) + 1} : element);
        }
    },
    DECREMENT_TOTAL(state, cartItem) {
        state.cartItems =
            state.cartItems.map(element => element.id ==
            cartItem.id ? {...element, total: Number(cartItem.total) - 1} : element);

    },

    DELETE_CART_ITEM(state, cartItem) {
        state.cartItems = state.cartItems.filter(cartitem => cartitem.id !== cartItem.id);
    },
    CLEAR_CART(state, userId) {
        state.cartItems = [];
    }


}

const actions = {
    addToCart({ state, commit, rootState,rootGetters }, newCartItem) {
        console.log(rootGetters)
        commit("ADD_TO_CART", newCartItem);
    },
    removeFromCart({ state, commit, rootState,rootGetters }, id) {
        commit("REMOVE_FROM_CART", id);
    },

    // udateCartItem(store,id,updatedValue){
    //
    // }

    incrementCartItem({ state, commit, rootState ,rootGetters}, cartItem) {
        commit('INCREMENT_TOTAL', cartItem);

    },


    decrementCartItem({ state, commit, rootState,rootGetters }, cartItem) {
        commit('DECREMENT_TOTAL', cartItem);
    },

    deleteCartItem({ state, commit, rootState ,rootGetters}, cartItem) {
        commit('DELETE_CART_ITEM', cartItem);
    }
    ,
    clearCart({ state, commit, rootState,rootGetters }, userId) {
        commit('CLEAR_CART', userId);

    }


}

export default {
    state,
    getters,
    mutations,
    actions
}