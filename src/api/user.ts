import { alovaInstance } from '.';

// 验证码
export const userValidCode = window._GlobalConfig._API_ROOT + '/User/ValidCode?ValidCodeID=';
// 登录
export const userLogin = (data: LoginDataType) => alovaInstance.Post('/User/Login', data);
// 用户信息
export const userInfo = () => alovaInstance.Get('/User/GetUser');
// 菜单
export const userMenus = (params: { type: number }) => alovaInstance.Get('/User/GetUserMenus', { params });
