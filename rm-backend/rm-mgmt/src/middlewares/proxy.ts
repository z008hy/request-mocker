import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { Request } from 'express';

export const proxyMiddleware = createProxyMiddleware({
  target: '/',
  changeOrigin: true,
  ws: false,
  pathRewrite: {
    '^/proxy/': '',
  },
  router(req: Request) {
    if (req.headers && typeof req.headers['p-h'] === 'string') {
      return req.headers['p-h'];
    }
    return '';
  }
});
