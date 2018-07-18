<template>
    <div class="productList">

        <el-input placeholder="Search" icon="search" v-model="searchterm">

        </el-input>
        <div v-for="p in getProducts">
            <div class="test">
                <product :product="p"></product>
            </div>
        </div>
    </div>
</template>
<script>
   import product from './Product.vue'
    export default {
       data(){
           return{
               searchterm:"",
           }
       },

       components:{
            product,
        },

        computed:{

           getProducts() {
               if(this.searchterm==""){
                   return this.$store.getters.products;
               }
               else
                   return  this.$store.getters.products
                       .filter(product=>product.name.toLowerCase()
                           .indexOf(this.searchterm.toLowerCase())!==-1);

               //console.log(this.$store.getters.products);

            }
        },
        mounted() {
           console.log(this.getProducts, "these are the products");
        }
    }

</script>
<style scoped>
.test{
    float: left;
    width: 250px;

    margin: 10px;
}
    .productList{
        margin-top: 20px;
    }
</style>