module.exports = (req, res) => {
  if (body) {
    req.body = JSON.parse(body);
  }
  const emited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
  if (!emited) {
    res.end();
  }
};