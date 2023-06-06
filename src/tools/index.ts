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

/**
 * 获取按钮权限
 * @param menus 所有菜单
 * @param curMenu 当前菜单key
 * @param btnKey 当前按钮key
 */
export const getBtnAuth = (menus: MenuType[], curMenu: string, btnKey: string): boolean => {
	let auth = false;
	for (let i = 0; i < menus.length; i++) {
		const menu: MenuType = menus[i];
		if (menu.key === curMenu) {
			if (menu.status && menu.buttons && menu.buttons.length) {
				for (let j = 0; j < menu.buttons.length; j++) {
					if (menu.buttons[j].key === btnKey) {
						return menu.buttons[j].status;
					}
				}
			} else {
				return false;
			}
		} else {
			if (menu.children && menu.children.length) {
				auth = getBtnAuth(menu.children, curMenu, btnKey);
			}
		}
	}
	return auth;
};
