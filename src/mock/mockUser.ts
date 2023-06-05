import { defineMock } from '@alova/mock';

// 验证账号与密码
const validAccountPwd = (account: string, pwd: string) => {
	if (account === 'admin' && pwd === '111') {
		return {
			status: true,
			message: '登录成功'
		};
	} else {
		return {
			status: false,
			message: '账号/密码错误'
		};
	}
};

export default defineMock({
	'[POST]/User/Login': ({ data }) => {
		const state = validAccountPwd(data.account, data.password);
		return {
			status: state.status,
			data: state.status ? new Date().getTime().toString() : null,
			code: 200,
			message: state.message,
			newToken: null
		};
	},
	'/User/GetUser': () => {
		return {
			status: true,
			data: {
				name: 'admin'
			},
			code: 200,
			message: '',
			newToken: null
		};
	},
	'/User/GetUserMenus': () => {
		return {
			status: true,
			data: [
				{
					path: '/home',
					key: 'home',
					name: '首页',
					status: true
				}
			],
			code: 200,
			message: '',
			newToken: null
		};
	}
});
