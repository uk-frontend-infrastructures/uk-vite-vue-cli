import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import VueHook from 'alova/vue';
import { getToken, setToken } from '@/tools/localStorage';

// alova请求实例
export const alovaInstance = createAlova({
	baseURL: window._GlobalConfig?._API_ROOT,
	// VueHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
	statesHook: VueHook,
	// 请求适配器，推荐使用fetch
	requestAdapter: GlobalFetch(),
	// 全局请求拦截器
	beforeRequest: method => {
		method.config.headers = {
			'content-type': 'application/json;charset=UTF-8',
			Authorization: 'Bearer ' + getToken()
		};
	},
	// 全局响应拦截器
	responded: {
		// 请求成功
		onSuccess: async response => {
			if (response.status >= 400) {
				throw new Error(response.statusText);
			}
			const json: ResponseResult = await response.json();
			if (json.status !== 200) {
				window.$message.warning(json.title || '');
				// 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
				throw new Error(json.title);
			}
			if (json.newToken) setToken(json.newToken);
			return json;
		},
		// 请求失败拦
		onError: async err => {
			throw new Error(err);
		}
	}
});
