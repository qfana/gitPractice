const http = require('http');
const EventEmitter = require('events');
const path = require('path');
const bodyParse = require('./bodyParse');


module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(port, callback) {
    this.server.listen(port, callback);

  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {

      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach(method => {

        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          const handler = endpoint[method];
          this.middlewares.forEach(middleware => middleware(req, res));
          handler(req, res);
        });

      });

    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', () => {
        const emited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
        if (!emited) {
          res.end();
        }
        if (body) {
          req.body = JSON.parse(body);
        };
      });
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]: [${method}]`;
  }
};