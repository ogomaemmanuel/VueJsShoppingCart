const state={
    cartItems:[]

}

const getters={
    cartItems:state=>state.cartItems,

}

const mutations={
    ADD_TO_CART(state, newCartItem){
        state.cartItems.push(newCartItem);
    },
    REMOVE_FROM_CART(){

    },
    // UPDATE_CART_ITEM(state, ){
    //
    // }

    INCREMENT_TOTAL(state, cartItem){

        state.cartItems=
            state.cartItems.map(element => element.id ==
            cartItem.id? {...element, total : Number(cartItem.total)+1} : element);

    },

    DECREMENT_TOTAL(state,cartItem){
        state.cartItems=
            state.cartItems.map(element => element.id ==
            cartItem.id? {...element, total : Number(cartItem.total)-1} : element);

    },

    DELETE_CART_ITEM(state, cartItem){
        state.cartItems=state.cartItems.filter(cartitem=>cartitem.id!==cartItem.id);
    }


}

const actions={
    addToCart(store, newCartItem){
        store.commit("ADD_TO_CART", newCartItem);
    },
    removeFromCart(store,id){
        store.commit("REMOVE_FROM_CART",id);
    },

    // udateCartItem(store,id,updatedValue){
    //
    // }

    incrementCartItem(store,cartItem){
        store.commit('INCREMENT_TOTAL',cartItem);

    },



    decrementCartItem(store,cartItem){
        store.commit('DECREMENT_TOTAL',cartItem);
    },

    deleteCartItem(store,cartItem){
        store.commit('DELETE_CART_ITEM',cartItem);
    }


}

export default {
    state,
    getters,
    mutations,
    actions
}