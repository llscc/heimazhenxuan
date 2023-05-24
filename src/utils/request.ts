import axios from 'axios';
import { ElMessage } from 'element-plus';

let requset = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 10000,
});

requset.interceptors.request.use(
    (config) => {
        
        return config;
    }
)

requset.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let message = '';
        let status = error.response.status
        switch (status) {
            case 401:
                message = '登录过期，请重新登录';
                break;
            case 403:
                message = '没有权限，请联系管理员';
                break;
            case 404:
                message = '请求资源不存在';
                break;
            case 500:
                message = '服务端错误，请联系管理员';
                break;
            default:
                message = '网络出现问题，请稍后再试';
                break;
        }
        ElMessage(
            {
                message,
                type: 'error',
            })
        return Promise.reject(error);
    }
)

export default requset;