<template>
    <div class="productList">
        <el-row>
        <el-col :span="16">
            <div class="grid-content">
                <el-input  placeholder="Search" icon="search" v-model="searchterm">
                </el-input>
            </div>
        </el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <div class="grid-content">
                    <div v-for="dbproduct in getProducts">
                        <div class="test">
                            <product :product="dbproduct"></product>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <div class="columns small-4">
                        <cart-summary></cart-summary>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import product from './Product.vue'
    import Vue from 'vue';

    Vue.component('cart-summary', require('../cart/CartSummary.vue').default);
//    import cartsummary from "../cart/CartSummary.vue"
    export default {
        data() {
            return {
                searchterm: "",
            }
        },

        components: {
            product,
        },

        computed: {

            getProducts() {
                if (this.searchterm == "") {
                    return this.$store.getters.products;
                }
                else
                    return this.$store.getters.products
                        .filter(product => product.name.toLowerCase()
                            .indexOf(this.searchterm.toLowerCase()) !== -1);

                //console.log(this.$store.getters.products);

            }
        },
        mounted() {
            console.log(this.getProducts, "these are the products");
        }
    }

</script>
<style scoped>
    .test {
        display: flex;
        float: left;
        width: 30%;

        margin: 1px;
    }

    .productList {
        margin-top: 20px;
    }
</style>