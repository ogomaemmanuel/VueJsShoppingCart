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
                                <el-button @click="addProduct()"  type="primary">Add</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-container>
   </div>

</template>
<script>

    export default {
        name:'inventorycreate',
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
<style scoped>

</style>