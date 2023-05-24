<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">left</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username">

                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password>

                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" 
                        @click="login">登录</el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive ,ref} from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

let router = useRouter()
let useStore = useUserStore()
let loading = ref(false)

let loginForm = reactive({
    username: 'admin',
    password: '111111'
})

const login = async() => {
    //console.log("loginform",loginForm)
    loading.value = true
    try{
        await useStore.userLogin(loginForm);
        router.push('/');
        ElNotification({
            message: '登陆成功',
            type: 'success'
        })
        loading.value = false
    } catch(err) {
        //console.log(err)
        loading.value = false
        ElNotification({
            message: (err as Error).message,
            type: 'error'
        })
    }
}
</script>

<style lang="scss" scoped>
.login_container {
    width: 100%;
    height: 100vh;
    background: url(@/assets/images/background.jpg) no-repeat;
    background-size: cover; // 背景图片等比例缩放

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url(@/assets/images/login_form.png) no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            text-align: center;
            font-size: 40px;
            color: #fff;
        }

        h2 {
            text-align: center;
            font-size: 24px;
            color: #fff;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
        }
    }
}</style>