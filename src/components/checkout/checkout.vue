<template>
    <div>
        <el-button @click="checkout" type="primary" icon="delete">Checkout</el-button>
        <!--<button ></button>-->
    </div>
</template>
<script>
    export default {
        methods: {
            checkout () {
                // this.$checkout.close()
                // is also available.
                this.$checkout.open({
                    image: 'https://i.imgur.com/1PHlmFF.jpg',
                    locale: 'en',
                    currency: 'BZD',
                    name: 'Blips an!',
                    description: 'An entire afternoon at Blips and Chitz!',
                    amount: 9999999,
                    panelLabel: 'Play Roy for {{amount}}',
                    token: (token) => {
                       console.log("Stripe payment",token)
                    }
                })
            },
        }
    }
</script>


