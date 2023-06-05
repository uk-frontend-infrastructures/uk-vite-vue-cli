<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUser from '@/store/user';

const router = useRouter();
const userStore = useUser();
</script>

<template>
	<div class="header-box">
		页面头部 &nbsp;&nbsp;&nbsp;&nbsp;
		<button @click="router.go(-1)">返回</button>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<button @click="userStore.logout">退出</button>
	</div>
</template>

<style lang="less" scoped>
.header-box {
    width: 100%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
}
</style>
