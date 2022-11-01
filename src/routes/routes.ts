const HelloWorld = import('@/pages/HelloWorld.vue');
const NotFound = import('@/pages/NotFound.vue');

const routes = [
	{
		path: '/',
		component: HelloWorld
	},
	{
		path: '/:pathMatch(.*)',
		component: NotFound
	}
];

export default routes;
