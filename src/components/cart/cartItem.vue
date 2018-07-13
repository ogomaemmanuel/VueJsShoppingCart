<template>
    <div>
        <el-container>
            <el-card :body-style="{ padding: '0px' }">
                <img :src="cartitem.imageUlr" class="image">
                <div style="padding: 14px;">
                    <span>{{cartitem.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{cartitem.price}}</time>


                        <el-row :gutter="24">
                            <el-col :span="12">
                                <el-input placeholder="Please input" v-model="cartitem.total"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button @click="incrementCartItem()" type="primary">
                                    <i class="el-icon-circle-plus"></i>
                                </el-button>
                            </el-col>
                            <el-col :span="6">

                                <el-button @click="decrementCartItem()" type="success">
                                    <i class="el-icon-remove"></i>
                                </el-button>
                            </el-col>

                        </el-row>
                        <el-row :gutter="20">

                            <el-button>
                                <i class="el-icon-share"></i>
                            </el-button>

                            <el-button @click="deleteCartItem()">
                                <i class="el-icon-delete"></i>
                            </el-button>



                        </el-row>

                    </div>
                </div>
            </el-card>
        </el-container>
    </div>
</template>

<script>
    export default {
        props: ['cartitem'],
        data() {
            return {}

        },
        methods: {
            updateCart() {

            },
            deleteFromCart() {

            },

            incrementCartItem(){
                this.$store.dispatch('incrementCartItem',this.cartitem);

            },

            decrementCartItem(){
                if(this.cartitem.total>0){
                    this.$store.dispatch('decrementCartItem',this.cartitem);
                }

            },
            deleteCartItem(){
                this.$confirm('Are you sure you want to delete this item').then(result=>{
                    if(result){
                        this.$store.dispatch('deleteCartItem',this.cartitem);
                    }
                })


            }
        }
    }

</script>

<style>
    .el-row{
        margin-bottom: 20px;

    }

</style>