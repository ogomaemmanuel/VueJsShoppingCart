<template>

    <el-container>
        <el-card style=" width: 700px;margin: 50px auto;">
            <div>
                <el-form ref="form" label-width="120px">
                    <el-form-item label="Username">


                        <el-input v-model="user.username" type="text"></el-input>
                    </el-form-item>

                    <el-form-item label="Password">
                        <el-input v-model="user.password" type="password"></el-input>

                    </el-form-item>


                    <el-form-item>
                        <el-button @click="goToHome()" class="button" type="primary" plain>Login</el-button>

                    </el-form-item>
                    <el-form-item>
                        <el-button @click="goToSignUp()" class="button" type="primary" plain>Sign Up</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </el-container>


</template>
<script>
    import firebase from 'firebase'
    export default {
        data() {
            return {
                user: {
                    password: "",
                    username: ""
                }
            }
        },
        methods: {
            goToHome() {
                let vm=this;
                firebase.auth().signInWithEmailAndPassword(vm.user.username, vm.user.password)
                    .then((resp) => {
                        vm.$router.push({name: 'home'});
                    }).catch(loginError => {
                        vm.$notify.error({
                            title: 'Error',
                            message: loginError.message,
                        });
                })
            },

            goToSignUp() {
                console.log("redirect To sign up Page")
                this.$router.push({name: "register"});
            }

        }
    }
</script>
<style scoped>
    .button {
        width: 100%;
    }
</style>