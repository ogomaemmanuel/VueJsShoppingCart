
<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"> <router-link :to="{ name: 'products' }">Products</router-link> </el-menu-item>

            <el-menu-item index="4"><router-link :to="{ name: 'inventory' }">Admin</router-link></el-menu-item>

            <div class="logout">
                <el-menu-item><checkout></checkout></el-menu-item>
                <el-menu-item  index="5">

                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-picture-outline"></i></template>
                        <el-menu-item @click="logout()" index="6-1">Logout</el-menu-item>
                        <!--<el-menu-item index="6-2">item two</el-menu-item>-->
                        <!--<el-menu-item index="2-3">item three</el-menu-item>-->

                    </el-submenu>

                </el-menu-item>

            </div>
<el-menu-item>
    <router-link :to="{name: 'cart'}"><img src="../assets/shopping-cart.png"/></router-link>
</el-menu-item>
        </el-menu>
        <div class="line"></div>
        <!--//<keep-alive>-->
            <router-view></router-view>
        <!--</keep-alive>-->


    </div>
</template>

<script>
    import firebase from 'firebase'
    import checkout from '../../src/components/checkout/checkout.vue'
    export default {
        components:{
            checkout
        },
        data() {
            return {
                activeIndex: '1',
                //activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

            logout(){
                let vm=this;
                firebase.auth().signOut().then(()=>{
                    vm.$router.push('login');
                })

            }
        },
        created(){
            this.$router.push('products');
      },


    }
</script>

<style scoped>

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .logout{
        float: right;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 0px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
