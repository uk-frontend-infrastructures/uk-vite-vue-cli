import * as VueRouter from 'vue-router';
import routes from './routes';
import { getToken } from '@/tools/localStorage';

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
	routes,
	strict: true
});

// 路由守卫
router.beforeEach(async (to, from, next) => {
	if (getToken()) {
		next();
	} else {
		if (to.name !== 'login') {
			next('/login');
		} else {
			next();
		}
	}
});

export default router;
