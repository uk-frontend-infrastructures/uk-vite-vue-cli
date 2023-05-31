<script setup lang="ts">
import { reactive } from 'vue';
import { useUser } from '@/store/user';

const userStore = useUser();
const loginData = reactive<LoginDataType>({ account: 'admin', password: '111', code: '' });

// 登录
const login = () => {
    userStore.login(loginData)
};
</script>

<template>
	<div class="login-box">
		登录页
		<button @click="login">登录</button>
	</div>
</template>

<style lang="less" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
