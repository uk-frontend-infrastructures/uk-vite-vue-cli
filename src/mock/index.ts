import GlobalFetch from 'alova/GlobalFetch';
import { createAlovaMockAdapter } from '@alova/mock';
import mockUser from './mockUser';

const mockAdapter = createAlovaMockAdapter([mockUser], {
	// 全局控制是否启用mock接口，默认为true
	enable: true,
	// 非模拟请求适配器，用于匹配mock接口时发送请求
	httpAdapter: GlobalFetch(),
	// mock接口响应延迟，单位毫秒
	delay: 100
});

export default mockAdapter;
