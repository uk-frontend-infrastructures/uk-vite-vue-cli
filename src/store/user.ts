import { defineStore } from 'pinia';
import { setToken, getToken, removeToken } from '@/tools/localStorage';
import router from '@/routes';
import { userLogin, userInfo, userMenus } from '@/api/user';

interface MenuType {
	path: string; // 路由地址
	key: string;
	enName: string; // 英文名
	zhName: string; // 中文名称
	buttons: any[]; // 按钮权限
	status: boolean; // 是否有权限
	children?: MenuType[]; // 子菜单
}

// 第一个参数是应用程序中 store 的唯一 id
const useUser = defineStore('user', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => ({
		userInfo: {
			name: ''
		} as { name: string; [PropsName: string]: any },
		userMenus: [] as MenuType[]
	}),
	actions: {
		// 登录
		async login(params: LoginDataType) {
			const res: any = await userLogin(params).send();
			if (res.code === 200 && res.status) {
				setToken(res?.data);
				await this.getUserInfo();
				window.$message.success(`您好  ${params.account}`);
				router.push('/');
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
