<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import SlideMenu from '@/components/SlideMenu.vue';
</script>

<template>
	<div class="base-layout-container">
		<page-header></page-header>
		<div class="body-container">
			<slide-menu></slide-menu>
			<div class="page-container">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.base-layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .body-container {
        display: flex;
        flex: 1;
        overflow: hidden;
        background-color: #eee;
        .page-container {
            flex: 1;
            overflow: hidden;
            padding: 1rem;
            box-sizing: border-box;
        }
    }
}
</style>
