import store from "../src/store/index"

describe('shopping list store', () => {
    describe('mutations', () => {
        test('#record adds passed value to items', () => {
            expect(store.getters.products.length).toEqual(3)
        })
    })
})