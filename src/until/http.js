/* eslint-disable */
import axios from 'axios'
if (process.env.NODE_ENV !== 'development') {
  axios.defaults.baseURL = '' //url
} else {
  axios.defaults.baseURL = '/'
}

axios.interceptors.request.use( 
  config => {
		//头部
		if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
			config.headers = {
				token: localStorage.getItem('token') || sessionStorage.getItem('token'),
				...config.headers
			}
		}
		return config
	},
	error => {
		return Promise.reject(error)
	})

//响应拦截
axios.interceptors.response.use(response => {
	//成功
	const code = response.data.code
	switch (code) { //不同响应代码处理
		case 0:
			return response.data
			break
		default:
			return Promise.reject(response)
	}
	return response;
}, error => {
	//失败
	console.log('失败')
	return Promise.reject(error)
})

export const init = () => {
	window.http = axios
}