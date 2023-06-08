<template>
    <div class="login-container">
        <el-form :model="userForm" style="float: right;padding-top: 20%;padding-right: 10%;">
            <el-form-item prop="username">
                <el-input v-model="userForm.username" prefix-icon="User" style="width: 250px;" placeholder="请输入用户名">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="userForm.password" prefix-icon="Key" style="width: 250px;" type="password"
                    placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%;">登录</el-button>
            </el-form-item>
        </el-form>


    </div>
</template>

<script>

    export default {
        name: "login",
        data() {
            return {
                userForm: {
                    username: "",
                    password: "",
                    checkcode: ""
                }
            }
        },
        methods: {},
        mounted() {

        },
        watch: {}
    }
</script>

<style scoped>
    .login-container {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-size: 100% 100%;
        background-image: url('../../assets/loginbg.jpg');
        /* background-color: rgb(18, 165, 42); */
        background-position: bottom;
        background-repeat: no-repeat;
    }
</style>