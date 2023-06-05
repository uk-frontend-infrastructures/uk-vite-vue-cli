<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
	<div class="not-found-page">
		<span>页面走丢了</span>
		<a @click="router.go(-1)">返回上一页</a>
	</div>
</template>

<style lang="less" scoped>
.not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    >span {
        color: red;
    }
    >a {
        cursor: pointer;
    }
}
</style>
