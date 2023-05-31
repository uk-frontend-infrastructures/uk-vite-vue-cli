// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlPlugin, { Options as HtmlPluginOptions } from 'vite-plugin-html-config';
import path from 'path';

const _BASE_URL = 'test';

export default defineConfig(({ mode }) => {
	if (mode === 'development') {
		//
	}

	const htmlPluginOption: HtmlPluginOptions = {
		favicon: '/favicon.ico',
		// headScripts: [{ src: `./config.js` }],
		style: ``
	};

	return {
		plugins: [vue(), htmlPlugin(htmlPluginOption)],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			} // 添加src文件夹'@'别名
		},
		server: {
			host: '0.0.0.0',
			port: 9000, // 开发服务器端口号
			open: true, // 默认打开
			hmr: true, // 开启热更新
			// 开发环境-服务代理
			proxy: {
				// '/api': {
				// 	target: 'http://xxx.xxx.xxx'
				// }
			}
		},
		base: _BASE_URL,
		build: {
			target: 'es2021'
		},
		optimizedeps: {
			esbuildoptions: {
				target: 'es2021'
			}
		}
	};
});
