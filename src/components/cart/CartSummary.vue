<template>
    <div>
        <div>
            <el-table
                    :data="cartItems"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="Name">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="Price">
                </el-table-column>

                <el-table-column
                        prop="total"
                        label="Total">
                </el-table-column>

                <el-table-column
                        label="">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="increment(scope.$index, scope.row)" type="text" size="small">
                            <i class="el-icon-circle-plus"></i>
                        </el-button>
                        <el-button @click.native.prevent="decrement(scope.$index, scope.row)" type="text" size="small">
                            <i class="el-icon-remove"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div class="cartTotal">Ksh {{cartTotal}}</div>

        </div>
    </div>
</template>

<script>
    import { mapGetters ,mapActions} from 'vuex'
    export default {
        name:"cartsummary",
        data() {
            return {

            }
        },

        methods: {
            decrement: function (index,cartitem) {
                if(cartitem.total>0){
                    this.$store.dispatch('decrementCartItem',cartitem);
                }

            },

            increment: function (index,cartitem) {
                this.$store.dispatch('incrementCartItem',cartitem);

            }

        },
        computed: {
            ...mapGetters([
                'cartItems',
            ]),
            cartTotal(){
                return this.cartItems.reduce((ac ,cartItem)=> ac+(cartItem.price*cartItem.total),0)
            }
        }
    }

</script>

<style>
    .cartTotal{
        height: 20px;
        background-color: aquamarine;
    }

</style>