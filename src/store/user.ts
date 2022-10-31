import { defineStore } from 'pinia';

// 第一个参数是应用程序中 store 的唯一 id
export const useUser = defineStore('user', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => {
		return {
			name: 'admin',
			role: 'manager'
		};
	}
});
