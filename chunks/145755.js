"use strict";
var r = n("599235"),
  i = n("790986"),
  o = n("441270"),
  s = n("912065").Buffer,
  a = n("785060"),
  c = n("291954"),
  u = n("622107"),
  l = s.alloc(128);

function d(e, t) {
  o.call(this, "digest"), "string" == typeof t && (t = s.from(t));
  var n = "sha512" === e || "sha384" === e ? 128 : 64;
  this._alg = e, this._key = t, t.length > n ? t = ("rmd160" === e ? new c : u(e)).update(t).digest() : t.length < n && (t = s.concat([t, l], n));
  for (var r = this._ipad = s.allocUnsafe(n), i = this._opad = s.allocUnsafe(n), a = 0; a < n; a++) r[a] = 54 ^ t[a], i[a] = 92 ^ t[a];
  this._hash = "rmd160" === e ? new c : u(e), this._hash.update(r)
}
r(d, o), d.prototype._update = function(e) {
  this._hash.update(e)
}, d.prototype._final = function() {
  var e = this._hash.digest();
  return ("rmd160" === this._alg ? new c : u(this._alg)).update(this._opad).update(e).digest()
}, e.exports = function(e, t) {
  return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new d("rmd160", t) : "md5" === e ? new i(a, t) : new d(e, t)
}