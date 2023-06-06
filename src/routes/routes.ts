const Login = () => import('@/views/Login.vue');
const Welcome = () => import('@/views/Welcome.vue');
const Management = () => import('@/views/Management.vue');
const UserList = () => import('@/views/user-management/UserList.vue');
const RoleList = () => import('@/views/role-management/RoleList.vue');
const NotFound = () => import('@/views/NotFound.vue');

const routes = [
	{
		path: '/',
		redirect: '/welcome'
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/welcome',
		name: 'welcome',
		component: Welcome
	},
	{
		path: '/management',
		name: 'management',
		component: Management,
		children: [
			{
				path: 'user',
				name: 'user',
				component: UserList
			},
			{
				path: 'role',
				name: 'role',
				component: RoleList
			}
		]
	},
	{
		path: '/:pathMatch(.*)',
		name: 'NotFound',
		component: NotFound
	}
];

export default routes;
