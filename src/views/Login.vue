<script setup lang="ts">
import { ref, reactive } from 'vue';
import { NForm, NFormItem, NInput, NButton, FormInst } from 'naive-ui';
import { useUser } from '@/store/user';

const userStore = useUser();
const loginData = reactive<LoginDataType>({ account: '', password: '' });

const formRef = ref<FormInst | null>(null);


// 登录
const login = (e: MouseEvent) => {
    e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            const resParams = {
                account: loginData.account,
                password: loginData.password,
            }
            userStore.login(resParams)
          }
        })
};
</script>

<template>
	<div class="login-box">
		<div class="login-form-box">
			<n-form
				ref="formRef"
				:model="loginData"
				:rules="{
                account: {
                    required: true,
                    message: '请输入账号',
                    trigger: ['input', 'blur']
                },
                password: {
                    required: true,
                    message: '请输入密码',
                    trigger: ['input', 'blur']
                }
            }"
				label-placement="left"
				label-width="auto"
				require-mark-placement="right-hanging"
			>
				<n-form-item label="账号" path="account">
					<n-input v-model:value="loginData.account" placeholder="请输入账号:admin" />
				</n-form-item>
				<n-form-item label="密码" path="password">
					<n-input v-model:value="loginData.password" placeholder="请输入密码:111" />
				</n-form-item>
				<div class="login-btn">
					<n-button round type="primary" @click="login"> 登录 </n-button>
				</div>
			</n-form>
		</div>
	</div>
</template>

<style lang="less" scoped>
.login-box {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/login/bg.png);
    background-size: 100% 100%;

    .login-form-box {
        position: absolute;
        left: 32.3vw;
        top: 35.4vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29vw;
        height: 29.5vh;
        padding: 1rem;
        box-sizing: border-box;
        .login-btn {
            display: flex;
            justify-content: center;
        }
    }
}
</style>
