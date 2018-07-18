<template>
    <div>
        <el-button @click="checkout" type="primary" icon="delete">Checkout</el-button>
        <!--<button ></button>-->
    </div>
</template>
<script>
    export default {

        data(){
            return{
                cartTotalAmount:0,
            }

        },
        methods: {

            checkout () {
                let vm=this;
                this.$checkout.open({
                    image: 'https://cytonn.com/assets/img/logos/cytonn_logo.svg',
                    locale: 'en',
                    currency: 'Ksh',
                    name: 'Vue Store!',
                    description: '!',
                    amount: vm.$store.getters.cartItems.reduce((ac,cr)=> Number(ac)+(Number(Number(cr.price )* Number(cr.total))),0).toString(),
                    panelLabel: 'Amount to Pay : {{amount}}',
                    token: (token) => {
                        vm.$store.dispatch('clearCart','');

                    }
                })
            },


        },




    }
</script>


