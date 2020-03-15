import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { Request } from 'express';

const options: Options = {
  target: 'http://example.com',
  changeOrigin: true,
  ws: false,
  pathRewrite: {
    '^/proxy/': '',
  },
  router(req: Request) {
    if (req.headers && typeof req.headers['proxy-url'] === 'string') {
      return req.headers['proxy-url'];
    }
    return '';
  }
};

export const proxyMiddleware = createProxyMiddleware(options);