const Login = () => import('@/pages/Login.vue');
const Home = () => import('@/pages/Home.vue');
const NotFound = () => import('@/pages/NotFound.vue');

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/:pathMatch(.*)',
		name: 'NotFound',
		component: NotFound
	}
];

export default routes;
