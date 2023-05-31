import { defineStore } from 'pinia';
import { setToken } from '@/tools/localStorage';
import router from '@/routes';

// 第一个参数是应用程序中 store 的唯一 id
export const useUser = defineStore('user', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => ({
		name: '',
		role: 'manager',
		menus: []
	}),
	actions: {
		async login(params: LoginDataType) {
			this.name = params.account;
			setToken(new Date().getTime().toString());
			router.push({
				path: '/home'
			});
		},
		async getUserInfo() {
			//
		}
	}
});
