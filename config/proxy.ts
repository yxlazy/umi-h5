export default {
  '/api': {
    target: '', // api代理地址
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
};
