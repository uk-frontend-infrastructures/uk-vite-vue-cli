import * as VueRouter from 'vue-router';
import routes from './routes';
import { getToken } from '@/tools/localStorage';

console.log(import.meta.env.BASE_URL);

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
	routes
});

// 路由守卫
router.beforeEach(async (to, from) => {
	if (
		// 检查用户是否已登录
		getToken() &&
		// ❗️ 避免无限重定向
		to.name !== 'Login'
	) {
		// 将用户重定向到登录页面
		return { name: 'Login' };
	}
});
export default router;
