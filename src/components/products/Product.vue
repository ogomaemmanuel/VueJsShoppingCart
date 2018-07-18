<template>
    <div>
        <el-container>
            <el-card :body-style="{ padding: '0px' }">
                <img :src="product.imageUlr" class="image">
                <div style="padding: 14px;">
                    <span>{{product.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{product.price | changeToKsh}}</time>

                        <el-button type="primary" @click="dialogFormVisible = true">Add To Cart
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

    export default {
        mixins: [currencyfilterMixin],

        props: ["product"],

        data() {
            return {
                dialogFormVisible: false,
                qty: 0,
                formLabelWidth: '120px',
                qtyInputError:"",
            }

        },

        watch: {
            qty: {
                handler: function (newValue) {

                    if(this.qty<=0){
                        this.qtyInputError="Product Quantity should not be less than 0"
                    }
                    else {
                        this.product.total = this.qty;
                        this.qtyInputError=null;
                    }


                }
            }
        },
        methods: {
            addToCart() {


                let vm = this;
                this.$store.dispatch("addToCart", this.product)
                    .then(() => {
                        vm.dialogFormVisible = false;
                    });
            }

        },

//        filters: {
//            changeToKsh: function (value) {
//                if (!value) return ''
//                value = value.toString()
//                return 'Ksh' + value
//            }
//        }

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

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>


