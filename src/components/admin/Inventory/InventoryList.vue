<template>
    <div>
    <el-table
            :data="tableData"
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
                <!--<el-button @click="handleClick" type="text" size="small">Detail</el-button>-->
                <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        props:['tableData'],
        data() {
            return {

            }
        },
        methods:{

            deleteRow(index, row){

                this.$store.dispatch('deleteProduct',row);

            }
        }
    }
</script>