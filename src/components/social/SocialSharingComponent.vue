<template>
    <div>
        <social_sharing  :url="path"
                        :title="product.name"
                        :description="product.description"
                        quote="Hey guys checkout this product, i believe you will like it"
                        hashtags="vuejshop,javascript,framework"
                        twitter-user="vuejs"
                        inline-template>
            <div>
                <network network="facebook">
                    <i class="fa fa-2x fa-facebook"></i>
                </network>
                <network network="googleplus">
                    <i class="fa fa-2x fa-google-plus"></i>
                </network>
                <network network="twitter">
                    <i class="fa fa-2x  fa-twitter"></i>
                </network>
            </div>
        </social_sharing>
    </div>

</template>

<script>
    import social_sharing from "vue-social-sharing"
    export default {
        props:["product"],
        components:{social_sharing},
        data(){
            return{

            }
        },

        computed:{
            path(){
                return window.location.href
            }
        }

    }

</script>
<style scoped>
    span{
        margin: 10px;
    }

</style>

