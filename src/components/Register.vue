<template>
    <div>
        <el-container class="register_container">
            <el-card style=" width: 700px;margin: 50px auto;">
                <el-form ref="form" label-width="120px">
                    <!--<el-form-item label="First Name">-->
                        <!--<el-input v-model="user.password" type="text"></el-input>-->
                    <!--</el-form-item>-->
                    <!--<el-form-item label="Last Name">-->
                        <!--<el-input type="text"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item label="Email">
                        <el-input v-model="user.email" type="email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input v-model="user.password" type="password"></el-input>

                    </el-form-item>
                    <el-form-item label="Confirm Password">
                        <el-input v-model="user.confirmpassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="registerUser()" type="primary" class="my_btn" plain>Sign Up</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-container>


    </div>
</template>
<script>
    import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
    import ElRow from "element-ui/packages/row/src/row";
    import ElForm from "../../node_modules/element-ui/packages/form/src/form.vue";
    import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";
    import firebase from 'firebase'

    export default {

        components: {
            ElFormItem,
            ElForm,
            ElRow,
            ElInput},
        data(){
            return{
                user:{
                    password:"",
                    email:"",
                    confirmpassword:""
                }
            }
        },

        methods:{
            registerUser(){
                let vm=this;
                if(vm.user.password==vm.user.confirmpassword){
                    firebase.auth().createUserWithEmailAndPassword(vm.user.email, vm.user.password).then(
                        (user) => {
                            this.$router.replace('login')
                        },
                        (err) => {

                            vm.$notify.error({
                                title: 'Error',
                                message: err.message ,
                            });

                        }
                    );
                }else {
                    vm.$notify.error({
                        title: 'Error',
                        message: 'passwords do not match',
                    });
                }



            }
        }
    }
</script>
<style scoped>
.register_container{
    margin: 50px auto;
}
    .my_btn{
        width: 100%;
    }
</style>