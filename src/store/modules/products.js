const state={
    products:[
        {
        name:"TESLA FEATURE PHONE 3",
        id:(new Date()).getTime(),
        price:"1199.00",
        description: " 2.8 INCH - DUAL SIM - BLACK",
        imageUlr: "https://www.masoko.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/x/b/xbehf.png",
    }
    ,
        {
            name:"TESLA FEATURE PHONE 3",
            price:"1199.00",
            id:(new Date()).getTime()*3,
            description: " 2.8 INCH - DUAL SIM - BLACK",
            imageUlr: "https://www.masoko.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/x/b/xbehf.png",
        },
        {
            name:"TESLA FEATURE PHONE 3",
            price:"1199.00",
            id:(new Date()).getTime()*2,
            description: " 2.8 INCH - DUAL SIM - BLACK",
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
    }

}

const getters={
    products:state=>state.products,

}

const actions={
    addProduct(store, product){
        store.commit("ADD_PRODUCT",product);

    },
    deleteProduct(store,product){
        store.commit("DELETE_PRODUCT",product);
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
};