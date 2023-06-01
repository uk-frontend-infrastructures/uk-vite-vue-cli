<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider } from 'naive-ui'
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
