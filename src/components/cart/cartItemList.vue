<template>
    <div>
        <div v-for="cartitem in getCartItems">
            <div class="test">
                <cartitem v-bind:cartitem="cartitem"></cartitem>
            </div>
        </div>
    </div>
</template>
<script>
    import cartitem from './cartItem.vue'
    export default {
        components:{
            cartitem,

        },
        data(){
            return{

            }

        },
        methods:{

        },

        computed:{
            getCartItems(){
                return this.$store.getters.cartItems;
            }
        }
    }

</script>
<style>
    .test{
        float: left;
        width: 320px;

        margin: 10px;
    }
</style>