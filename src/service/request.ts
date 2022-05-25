import { Toast } from 'antd-mobile';
import { extend } from 'umi-request';

const defaultHeaders = {
  // 请求header统一处理
  'Content-Type': 'application/json',
};

const request = extend({
  prefix: '/api',
  requestType: 'json',
  responseType: 'json',
  charset: 'utf8',
  headers: defaultHeaders,
  errorHandler(error) {
    // 错误统一处理
    if (
      (error.response.status < 200 || error.response.status >= 300) &&
      error.response.status !== 304
    ) {
      // 在这里处理错误信息
      Toast.show({ content: error.response.statusText });
    }
    // 没有权限，跳转到登录页
    if (error.response.status === 403) {
      window.location.href = '/login';
    }

    return {};
  },
});

// 添加token
request.interceptors.request.use((url, options) => {
  const header = { Authorization: `Bearer ${localStorage.getItem('token')}` };

  Object.assign(options.headers, header);

  return {
    url,
    options,
  };
});

export default request;
