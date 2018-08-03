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
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="editProduct()" type="primary">Update</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </el-container>
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
            editProduct(){
                let vm=this;
                this.product.id= (new Date()).getTime();
                this.$store.dispatch("editProduct",this.product).then(()=>{

                    vm.$notify.success({
                        title: 'Success',
                        message: 'Product Edit successful',
                    });
                   vm.$router.go(-1);
                });
            }
        }

    }

</script>
<style scoped>

</style>