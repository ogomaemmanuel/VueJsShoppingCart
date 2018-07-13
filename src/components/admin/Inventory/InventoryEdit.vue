<template>

    <div>
        <el-container>
            <el-card style=" width: 100%;margin: 50px auto;">
                <div>
                    <el-form ref="form" label-width="120px">
                        <el-form-item label="Name">


                            <el-input v-model="product.name" type="text"></el-input>
                        </el-form-item>

                        <el-form-item label="price">
                            <el-input v-model="product.price" type="number"></el-input>

                        </el-form-item>
                        <el-form-item label="Quantity">
                            <el-input v-model="product.qty" type="number"></el-input>

                        </el-form-item>

                        <el-form-item label="Image">
                            <el-input v-model="product.imageUlr" type="text"></el-input>

                        </el-form-item>

                        <el-form-item>
                            <!--<el-select v-model="value" placeholder="Select">-->
                            <!--<el-option-->
                            <!--v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                            <!--</el-option>-->
                            <!--</el-select>-->

                        </el-form-item>
                        <el-form-item>
                            <el-button @click="addProduct()" class="button" type="primary" plain>Update</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </el-container>
       <h4>product Edit</h4>
    </div>

</template>
<script>

    export default {
        name:'inventoryedit',
        data(){
            return{
                product:{
                    name:"",
                    qty:"",
                    description:"",
                    price:"",
                    category:"",
                    imageUlr:"",

                }
            }
        },

        created() {
            this.product = this.$route.params.product;

        },
        methods:{
            addProduct(){
                let vm=this;
                this.product.id= (new Date()).getTime();
                this.$store.dispatch("addProduct",this.product).then(()=>{
                    vm.product={}
                });
            }
        }

    }

</script>
<style>

</style>