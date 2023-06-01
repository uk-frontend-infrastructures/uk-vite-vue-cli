<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useUser } from '@/store/user';
import UserApi from '@/api/user';

const userStore = useUser();
const loginData = reactive<LoginDataType>({ account: '', password: '', validCode: '', validCodeID: '' });

const JsNewGuid = () => {
    let curguid = "";
    for (let i = 1; i <= 32; i++) {
        const id = Math.floor(Math.random() * 16.0).toString(16);
        curguid += id;
        if ((i === 8) || (i === 12) || (i === 16) || (i === 20))
            curguid += "-";
    }
    loginData.validCodeID = curguid;
}

onMounted(() => {
    JsNewGuid();
});

// 登录
const login = () => {
    const resParams = {
        account: window.btoa(encodeURIComponent(loginData.account)),
        password: window.btoa(encodeURIComponent(loginData.password)),
        validCode: loginData.validCode,
        validCodeID: loginData.validCodeID
    }
    userStore.login(resParams)
};
</script>

<template>
	<div class="login-box">
		登录页
		<br />
		<ul>
			<li>账号：<input v-model="loginData.account" /></li>
			<li>密码：<input v-model="loginData.password" type="password" /></li>
			<li>
				验证码：<input v-model="loginData.validCode" /><img
					class="yzm"
					@click="JsNewGuid()"
					:src="UserApi.ValidCode + loginData.validCodeID"
					alt="验证码"
				/>
			</li>
		</ul>
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
