<script setup lang="ts">
import { onMounted } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider } from 'naive-ui';
import { storeToRefs } from 'pinia'
import { useUser } from '@/store/user';

const userStore = useUser();
const { userInfo } = storeToRefs(userStore);

onMounted(() => {
	// 判断当前是否有用户信息，无则重新获取 (页面刷新，用户信息状态会重置，对用户信息做持久化)
	if (!userInfo.value?.name) {
		userStore.getUserInfo();
	}
});
</script>

<template>
	<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<router-view></router-view>
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped>
.n-config-provider {
	width: 100%;
	height: 100%;
}
</style>
