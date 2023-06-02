<script setup lang="ts">
import { useMessage } from 'naive-ui';
window.$message = useMessage(); // 在 setup 外使用 naive ui 的 message
</script>
<template>
	<div class="outer-base-content">
		<slot></slot>
	</div>
</template>
<style scoped>
.outer-base-content {
    width: 100%;
    height: 100%;
}
</style>
