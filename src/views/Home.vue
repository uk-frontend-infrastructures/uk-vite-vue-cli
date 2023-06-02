<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '@/store/user';

const userStore = useUser();
const { userInfo } = storeToRefs(userStore);

const _PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;
</script>

<template>
	<div class="home-box">
		<h1>{{ userInfo?.name }} 您好! 这是您的 Vue App</h1>
		<div>
			<img src="../assets/images/vite.svg" />
			+
			<img :src="_PUBLIC_URL + 'images/vue.svg'" />
		</div>
		<button @click="userStore.logout">退出</button>
		<router-view></router-view>
	</div>
</template>

<style lang="less" scoped>
.home-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    padding-top: 10vh;
    background-color: #000;
    text-align: center;
    color: #fff;

    >h1 {
        text-align: center;
    }

    >div {
        display: flex;
        align-items: center;
        margin-top: 5vh;

        >img {
            width: 100px;
            height: auto;
            margin: 0 20px;
        }
    }
}
</style>
