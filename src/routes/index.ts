import * as VueRouter from 'vue-router';
import routes from './routes';
import { getToken } from '@/tools/localStorage';
import { storeToRefs } from 'pinia';
import useUser from '@/store/user';
import { getMenuAuth } from '@/tools';

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
	routes,
	strict: true
});

// 路由守卫
router.beforeEach(async (to, from, next) => {
	const userStore = useUser();
	const { userMenus } = storeToRefs(userStore);
	if (getToken()) {
		if (to.name !== 'login') {
			const _auth = getMenuAuth(userMenus.value || [], to?.name as string);
			if (_auth) {
				next();
			} else {
				window.$message.warning('暂无权限');
				next('/login');
			}
		} else {
			next();
		}
	} else {
		if (to.name !== 'login') {
			next('/login');
		} else {
			next();
		}
	}
});

export default router;
