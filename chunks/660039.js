"use strict";
class t {
  constructor() {
    this._defaults = []
  }
  _setDefaults(e) {
    for (let t of this._defaults) e[t.fn](...t.args)
  }
}
for (let e of ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"]) t.prototype[e] = function() {
  for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
  return this._defaults.push({
    fn: e,
    args: n
  }), this
};
e.exports = t