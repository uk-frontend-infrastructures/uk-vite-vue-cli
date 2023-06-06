<script setup lang="ts">
import { toRefs, defineProps } from 'vue';

const props = defineProps({ menus: Array, level: Number });
const { menus, level }: any = toRefs(props);
</script>

<template>
	<ul class="menu-ul" :class="'menu-' + level">
		<template v-for="menu in menus">
			<li v-if="menu.status" :key="menu.key">
				<div v-if="menu.children && !!menu.children.length">
					<span>{{ menu.zhName }}</span>
					<menu-items
						v-if="menu.children && !!menu.children.length"
						:menus="menu.children"
						:level="level + 1"
					></menu-items>
				</div>
				<router-link v-else :to="menu.path">{{ menu.zhName }}</router-link>
			</li>
		</template>
	</ul>
</template>

<style lang="less" scoped>
.menu-ul {
	padding-left: 0.5rem;
	list-style: none;

	>li {
		padding: 0.5rem 0;
	}
}
</style>
