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
		name: 'Login',
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/:pathMatch(.*)',
		name: '404',
		component: NotFound
	}
];

export default routes;
