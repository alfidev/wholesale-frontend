// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const createProxyMiddleware = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000/api',
      changeOrigin: true,
      logLevel: 'debug',
    }),
  );
};
