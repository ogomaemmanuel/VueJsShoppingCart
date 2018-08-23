<template>
    <div>
        <el-container>
            <el-card :body-style="{ padding: '0px' }">
                <img :src="product.imageUlr" class="image">
                <div style="padding: 14px;">
                    <span>{{product.name}}</span>
                    <div class="bottom clearfix">
                        <div class="ratings">
                            <div @click="setRating(n)" v-for="(n, index) in 5">
                                <rating  class="button button-primary" :starValue="n" :userRating="userRating"></rating>
                            </div>

                        </div>
                       <p>price <time class="time">{{product.price | changeToKsh}}</time>  In stock <span v-text="product.qty"></span></p>

                        <el-button type="primary" @click="dialogFormVisible = true" class="btn">Add To Cart
                        </el-button>

                        <el-dialog title="Quantity" :visible.sync="dialogFormVisible">
                            <div class="">
                                <el-input type="number" v-model="qty" auto-complete="off"></el-input>
                            </div>
                            <span class="">{{qtyInputError}}</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="addToCart">Confirm</el-button>
                            </span>
                        </el-dialog>

                    </div>
                </div>
            </el-card>
        </el-container>
    </div>
</template>
<script>

    import currencyfilterMixin from '../../../src/mixins/currency-filter'
    import rating from  '../rating/rating.vue'

    export default {
        mixins: [currencyfilterMixin],
        props: ["product"],
        components:{rating},
        data() {
            return {
                dialogFormVisible: false,
                qty: 0,
                formLabelWidth: '120px',
                qtyInputError:"",
                userRating:0,
                isValid:false
            }

        },

        watch: {
            qty: {
                handler: function (newValue) {

                    if(this.qty<=0){
                        this.qtyInputError="Product Quantity should not be less than 0"
                        this.isValid=false;
                    }
                    else {
                        this.isValid=true
                    }

                    if(this.qty>this.product.qty){
                        this.qtyInputError="Product cannot add more than what is in the store"
                        this.isValid=false;
                    }
                    else {
                        this.isValid=true;
                    }


                }
            }
        },
        methods: {
            addToCart() {
                if(this.isValid){
                    let vm = this;
                    this.product.total = this.qty;
                    this.$store.dispatch("addToCart", this.product)
                        .then(() => {
                            this.$store.dispatch("updateQuantity",{product:vm.product,quantity:vm.qty});
                            vm.dialogFormVisible = false;
                        });
                }else {
                    this.notify("error","Product not added to cart")
                }
            },
            setRating(rating) {
                console.log("Rating",rating);
                this.userRating=rating;
            }
        },


    }

</script>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .ratings{
        display: flex;
        align-items: flex-start;
        margin-top: 5px;
        margin-bottom: 30px;

    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    /*.clearfix:before,*/
    /*.clearfix:after {*/
        /*display: table;*/
        /*content: "";*/
    /*}*/

    /*.clearfix:after {*/
        /*clear: both*/
    /*}*/
</style>


