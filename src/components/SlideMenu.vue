<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useUser from '@/store/user';
import MenuItems from './MenuItems.vue'

const userStore = useUser();
const { userMenus } = storeToRefs(userStore);
</script>

<template>
	<div class="menu-container">
		<menu-items :menus="userMenus" :level="1"></menu-items>
	</div>
</template>

<style lang="less" scoped>
.menu-container {
    width: 15rem;
    height: 100%;
    padding: 1rem;
    background-color: #fff;
    box-sizing: border-box;
    ul {
        list-style: none;
        >li {
            padding: 0.5rem 0;
        }
    }
}
</style>
