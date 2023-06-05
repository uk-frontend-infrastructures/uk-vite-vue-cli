import { defineStore } from 'pinia';
import { setToken, getToken, removeToken } from '@/tools/localStorage';
import router from '@/routes';
import { userLogin, userInfo, userMenus } from '@/api/user';

// 第一个参数是应用程序中 store 的唯一 id
const useUser = defineStore('user', {
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
			if (res.code === 200 && res.status) {
				setToken(res?.data);
				await this.getUserInfo();
				window.$message.success(`您好  ${params.account}`);
				router.push('/home');
			} else {
				window.$message.warning(res.message);
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
				if (res.code === 200) {
					this.userInfo = res.data;
					this.getUserMenus();
				}
			}
		},
		// 获取菜单
		async getUserMenus() {
			const res: any = await userMenus().send();
			if (res.code === 200) {
				this.userMenus = res.data;
			}
		}
	}
});

export default useUser;
