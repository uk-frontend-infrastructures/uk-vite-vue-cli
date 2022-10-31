/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

interface Window {
	_GlobalConfig: {
		_API_ROOT: string;
		_ROOT_URL: string;
	};
}
