<template>
    <div>
        <social_sharing url="https://vuejs.org/"
                        title="The Progressive JavaScript Framework"
                        description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                        quote="Vue is a progressive framework for building user interfaces."
                        hashtags="vuejs,javascript,framework"
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
        components:{social_sharing},
        data(){
            return{

            }
        }

    }

</script>
<style>
    span{
        margin: 10px;
    }

</style>

