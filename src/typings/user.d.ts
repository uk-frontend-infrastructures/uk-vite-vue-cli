// 登录
type LoginDataType = {
	account: string;
	password: string;
	validCode?: string; // 验证码
	validCodeID?: string; // 验证码id
};

// 菜单
interface MenuType {
	path: string; // 路由地址
	key: string;
	enName: string; // 英文名
	zhName: string; // 中文名称
	buttons: any[]; // 按钮权限
	status: boolean; // 是否有权限
	children?: MenuType[]; // 子菜单
}
