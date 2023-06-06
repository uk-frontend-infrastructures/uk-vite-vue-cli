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
					path: '/welcome',
					key: 'welcome',
					enName: 'weclome',
					zhName: '欢迎',
					buttons: [],
					status: true
				},
				{
					path: '/management',
					key: 'management',
					enName: 'management',
					zhName: '管理',
					buttons: [],
					status: true,
					children: [
						{
							path: '/management/user',
							key: 'user',
							enName: 'user',
							zhName: '用户管理',
							buttons: [
								{ name: '添加', key: 'add', status: true },
								{ name: '编辑', key: 'edit', status: true }
							],
							status: true
						},
						{
							path: '/management/role',
							key: 'role',
							enName: 'role',
							zhName: '角色管理',
							buttons: [
								{ name: '添加', key: 'add', status: true },
								{ name: '编辑', key: 'edit', status: false }
							],
							status: false
						}
					]
				}
			],
			code: 200,
			message: '',
			newToken: null
		};
	}
});
