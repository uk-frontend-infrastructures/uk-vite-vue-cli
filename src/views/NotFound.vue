<script setup lang="ts"></script>

<template>
	<div class="not-found-page">
		<span>页面走丢了</span>
		<router-link to="/">返回主页</router-link>
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
}
</style>
