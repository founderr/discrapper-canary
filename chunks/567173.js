"use strict";
e("70102"), e("222007"), e("424973");

function n() {
  this._defaults = []
} ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(t) {
  n.prototype[t] = function() {
    for (var r = arguments.length, e = Array(r), n = 0; n < r; n++) e[n] = arguments[n];
    return this._defaults.push({
      fn: t,
      args: e
    }), this
  }
}), n.prototype._setDefaults = function(t) {
  this._defaults.forEach(function(r) {
    var e;
    t[r.fn].apply(t, function(t) {
      if (Array.isArray(t)) {
        for (var r = 0, e = Array(t.length); r < t.length; r++) e[r] = t[r];
        return e
      }
    }(e = r.args) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(e) || function() {
      throw TypeError("Invalid attempt to spread non-iterable instance")
    }())
  })
}, t.exports = n