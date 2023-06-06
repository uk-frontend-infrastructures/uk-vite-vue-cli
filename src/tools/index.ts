/**
 * 获取菜单权限
 * @param menus 所有菜单
 * @param curMenu 当前菜单key
 */
export const getMenuAuth = (menus: MenuType[], curMenu: string): boolean => {
	let auth = false;
	for (let i = 0; i < menus.length; i++) {
		const menu: MenuType = menus[i];
		if (menu.key === curMenu) {
			if (menu.status) {
				return true;
			} else {
				return false;
			}
		} else {
			if (menu.children && menu.children.length) {
				auth = getMenuAuth(menu.children, curMenu);
			}
		}
	}
	return auth;
};
