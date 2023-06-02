import { defineStore } from 'pinia';
import { setToken, getToken, removeToken } from '@/tools/localStorage';
import router from '@/routes';
import { userLogin, userInfo, userMenus } from '@/api/user';

// 第一个参数是应用程序中 store 的唯一 id
export const useUser = defineStore('user', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => ({
		userInfo: {
			name: ''
		} as { name: string; [PropsName: string]: any },
		userMenus: []
	}),
	actions: {
		// 登录
		async login(params: LoginDataType) {
			const res: any = await userLogin(params).send();
			if (res.status === 200) {
				setToken(res?.title);
				this.userInfo = res.data;
				await this.getUserMenus();
				window.$message.success(`您好  ${res.data.name}`);
				router.push('/home');
			}
		},
		// 登出
		async logout() {
			removeToken();
			router.push('/login');
		},
		// 获取用户信息
		async getUserInfo() {
			if (getToken()) {
				const res: any = await userInfo().send();
				if (res.status === 200) {
					this.userInfo = res.data;
					this.getUserMenus();
				}
			}
		},
		// 获取菜单
		async getUserMenus() {
			const res: any = await userMenus({ type: 1 }).send();
			if (res.status === 200) {
				this.userMenus = res.data;
			}
		}
	}
});
