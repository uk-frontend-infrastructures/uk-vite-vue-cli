<script setup lang="ts">
import { useUser } from '@/store/user';
defineProps<{ msg: string }>();
const store = useUser()
</script>

<template>
	<div className="hello-world">
		<h1>Hello {{store.name}} ! This is your Vue App</h1>
		<div>
			<img src="/images/vue.svg" /> +
			<div className="vite-bg"></div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.hello-world {
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

        .vite-bg {
            width: 100px;
            height: 100px;
            margin: 0 20px;
            background-image: url(@/assets/images/vite.svg);
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;
        }
    }
}
</style>
