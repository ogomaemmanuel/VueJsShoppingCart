const state={
    products:[
        {
        name:"TESLA FEATURE PHONE 3",
        id:(new Date()).getTime(),
        price:"1199.00",
        qty:900,
        description: " 2.8 INCH - DUAL SIM - BLACK",
        imageUlr: "https://www.masoko.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/x/b/xbehf.png",
    }
    ,
        {
            name:"TESLA FEATURE PHONE 3",
            price:"1199.00",
            id:(new Date()).getTime()*3,
            description: " 2.8 INCH - DUAL SIM - BLACK",
            qty:13,
            imageUlr: "https://www.masoko.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/x/b/xbehf.png",
        },
        {
            name:"TESLA FEATURE PHONE 3",
            price:"1199.00",
            id:(new Date()).getTime()*2,
            description: " 2.8 INCH - DUAL SIM - BLACK",
            qty:43,
            imageUlr: "https://www.masoko.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/x/b/xbehf.png",
        }

    ]
}

const mutations={
    ADD_PRODUCT(state, newProduct){
        state.products.push(newProduct);
    },

    DELETE_PRODUCT(state, deletedProduct){
        state.products=state.products.filter(product=>product.id!==deletedProduct.id);
    },

    EDIT_PRODUCT(state, product){
        state.products=
            state.products.map(element => element.id ==
            product.id? {...element, product } : element);
    },

    UPDATE_QUANTITY(state, product){
        let newQty = product.qty-product.total;
        state.products =
            state.products.map(element => element.id ==
            product.id ? {...element, qty:newQty } : element);
    }

}

const getters={
    products:(state, getters, rootState, rootGetters)=>state.products,

}

const actions={
    addProduct({ state, commit, rootState,rootGetters },product){
        commit("ADD_PRODUCT",product);

    },
    deleteProduct({ state, commit, rootState,rootGetters },product){
        commit("DELETE_PRODUCT",product);
    },

    editProduct({ state, commit, rootState,rootGetters },product){
        commit("EDIT_PRODUCT",product);
    },
    updateQuantity({ state, commit, rootState,rootGetters },product){
        commit("UPDATE_QUANTITY",product);
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
};