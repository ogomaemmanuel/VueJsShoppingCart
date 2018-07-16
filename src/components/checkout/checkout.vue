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
                console.log('Cart Total Amount Checkout',vm.$store.getters.cartItems.reduce((ac,cr)=> (Number(ac)+Number(Number(cr.price )* Number(cr.total))),1))
                // this.$checkout.close()
                // is also available.
                this.$checkout.open({
                    image: 'https://i.imgur.com/1PHlmFF.jpg',
                    locale: 'en',
                    currency: 'Ksh',
                    name: 'Blips an!',
                    description: 'An entire afternoon at Blips and Chitz!',
                    amount: vm.$store.getters.cartItems.reduce((ac,cr)=> Number(ac)+(Number(Number(cr.price )* Number(cr.total))),0).toString(),
                    panelLabel: 'Play Roy for {{amount}}',
                    token: (token) => {
                        vm.$store.dispatch('clearCart','');

                    }
                })
            },


        },




    }
</script>


