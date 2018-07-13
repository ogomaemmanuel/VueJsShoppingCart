<template>
    <div>
        <el-row>
            <el-col :span="8">
                <InventoryCreate>
                </InventoryCreate>
            </el-col>
            <div class="inventory-table">
                <el-col   :span='16'>
                    <InvetoryList :tableData="getInventoryItems"></InvetoryList>
                </el-col>
            </div>

            <router-view></router-view>

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
    }

</script>
<style>
    inventory-table{
        padding-left: 10px;
    }



</style>