<template>
    <div>
        <el-button @click="checkout" type="primary" icon="delete">Checkout</el-button>
        <!--<button ></button>-->
    </div>
</template>
<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {

        components: {ElButton},
        data(){
            return{
                amount:0,
            }

        },
        methods: {

            checkout () {
                let vm=this;
               console.log("Checkout cart total",this.amount)
                this.$checkout.open({
                    name: 'Vue Store!',
                    description: 'Thank you for shopping with us',
                    amount: this.amount,
                    panelLabel: 'Amount to Pay : {{amount}}',
                    token: (token) => {
                        vm.$store.dispatch('clearCart','');


                    }
                })
            },


        },
        watch:{

            '$store.getters.cartItems': function (newValue) {
                this.amount=
                    newValue.filter(catitem=>catitem.total>0)
                        .reduce((ac,cr)=>{ return Number(ac)+ Number((Number(cr.price ) * Number(cr.total)))},0)

                        }
            }

    }
</script>


