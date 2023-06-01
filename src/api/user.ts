// 用户服务
const UserApi = {
	Login: '/User/Login',
	ValidCode: window._GlobalConfig._API_ROOT + '/User/ValidCode?ValidCodeID='
};

export default UserApi;
