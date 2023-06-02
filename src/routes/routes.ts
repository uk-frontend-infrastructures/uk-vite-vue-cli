const Login = () => import('@/views/Login.vue');
const Home = () => import('@/views/Home.vue');
const NotFound = () => import('@/views/NotFound.vue');

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
