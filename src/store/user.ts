import { defineStore } from 'pinia';
import { setToken } from '@/tools/localStorage';
import router from '@/routes';

import { useRequest } from 'alova';
import alovaInstance from '@/api';
import UserApi from '@/api/user';

const { send: loginFun } = useRequest(params => alovaInstance.Post(UserApi.Login, params), {
	immediate: false
});

// 第一个参数是应用程序中 store 的唯一 id
export const useUser = defineStore('user', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => ({
		userInfo: {
			name: ''
		},
		menus: []
	}),
	actions: {
		async login(params: LoginDataType) {
			loginFun(params).then((res: any) => {
				if (res.status === 200) {
					setToken(res.title);
					this.userInfo = res.data;
					router.push('/home');
				}
			});
		},
		// 获取用户信息
		async getUserInfo() {
			//
		}
	}
});
