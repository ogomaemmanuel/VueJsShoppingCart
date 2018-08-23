<template>
    <div>
        <div v-bind:class="{ checked: markRated }">
            <i class="fa fa-star"></i>
        </div>

    </div>
</template>
<script>
    export default {
        props: ["starValue", "userRating"],
        data() {
            return {
                markRated: false
        }
        },
        methods: {

        },
        watch:{
            'userRating': function (newvalue) {
                if (this.starValue <= newvalue) {
                    if(this.starValue>0){
                        this.markRated=true;
                    }
                }
                else {
                    this.markRated=false;
                }

            }
        }

    }
</script>
<style scoped>
    .checked{
        color: gold;
    }
</style>