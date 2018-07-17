<template>
    <div>
        <el-row>
            <el-col :span="8">
                <InventoryCreate>
                </InventoryCreate>
            </el-col>
            <div class="inventory-table">
                <el-col   :span='16'>
                    <!--<InvetoryList :tableData="getInventoryItems"></InvetoryList>-->
                    <router-view></router-view>
                </el-col>
            </div>



        </el-row>

    </div>

</template>

<script>
    import InventoryCreate from './InventoryCreate.vue'
    import InvetoryList from './InventoryList.vue'

    export default {
        components: {
            InventoryCreate,
            InvetoryList

        },

        data() {
            return {}
        },

        computed:{

            getInventoryItems() {
                //console.log(this.$store.getters.products);
                return this.$store.getters.products;
            }
        },
        created(){
            this.$router.push('inventorylist');
        },
    }

</script>
<style>
    inventory-table{
        padding-left: 10px;
    }



</style>