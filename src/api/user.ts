import { alovaInstance } from '.';
// 登录
export const userLogin = (data: LoginDataType) => alovaInstance.Post('/User/Login', data);
// 用户信息
export const userInfo = () => alovaInstance.Get('/User/GetUser');
// 菜单
export const userMenus = () => alovaInstance.Get('/User/GetUserMenus');
