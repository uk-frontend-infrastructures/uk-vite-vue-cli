enum RequestMethod {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

enum ResponseCode {
	200 = '请求成功',
	202 = '请求成功，请求已接受，但是还没有处理完成',
	400 = '参数错误',
	401 = '授权错误', // 通常用在 Token 缺失或失效，注意 401 会触发前端跳转到登录页
	403 = '操作被拒绝，通常发生在权限不足时，注意此时务必带上详细错误信息',
	404 = '未找到',
	500 = '服务器错误'
}

interface ResponseResult {
	status: boolean;
	data: any;
	code: number;
	message: string;
	newToken?: string;
}
