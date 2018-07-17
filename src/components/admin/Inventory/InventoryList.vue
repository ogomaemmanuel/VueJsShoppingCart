<template>
    <div>
    <el-table
            :data="getInventoryItems"
            stripe
            style="width: 100%">
        <el-table-column
                prop="name"
                label="Name">
        </el-table-column>
        <el-table-column
                prop="price"
                label="Price">
        </el-table-column>
        <el-table-column>
            <template slot-scope="scope">
                <img :src="scope.row.imageUlr" style="margin-left: 10px; width: 80px; height: 100px"  />
            </template>
        </el-table-column>
        <el-table-column
                prop="qty"
                label="Quantity">
        </el-table-column>

        <el-table-column
                fixed="right"
                label="Operations">
            <template slot-scope="scope">
                <el-button @click.native.prevent="editRow(scope.$index, scope.row)" type="text" size="small">Edit</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        //props:['tableData'],
        data() {
            return {

            }
        },
        methods:{

            deleteRow(index, row){



                this.$confirm('Are you sure you want to delete this item').then(result=>{
                    if(result){
                        this.$store.dispatch('deleteProduct',row);
                    }
                })



            },


            editRow(index, row){

                this.$router.push({ name: 'inventoryedit', params: { product: row }})

               // $this.$router.push('inventoryedit',{'product'})

            }
        },

        computed:{

            getInventoryItems() {
                //console.log(this.$store.getters.products);
                return this.$store.getters.products;
            }
        },
    }
</script>