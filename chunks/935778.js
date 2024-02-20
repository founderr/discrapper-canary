"use strict";
r("70102");
var n = Object.prototype.toString,
  o = Math.max,
  i = function(t, e) {
    for (var r = [], n = 0; n < t.length; n += 1) r[n] = t[n];
    for (var o = 0; o < e.length; o += 1) r[o + t.length] = e[o];
    return r
  },
  a = function(t, e) {
    for (var r = [], n = e || 0, o = 0; n < t.length; n += 1, o += 1) r[o] = t[n];
    return r
  },
  u = function(t, e) {
    for (var r = "", n = 0; n < t.length; n += 1) r += t[n], n + 1 < t.length && (r += e);
    return r
  };
t.exports = function(t) {
  var e, r = this;
  if ("function" != typeof r || "[object Function]" !== n.apply(r)) throw TypeError("Function.prototype.bind called on incompatible " + r);
  for (var l = a(arguments, 1), s = o(0, r.length - l.length), c = [], p = 0; p < s; p++) c[p] = "$" + p;
  if (e = Function("binder", "return function (" + u(c, ",") + "){ return binder.apply(this,arguments); }")(function() {
      if (this instanceof e) {
        var n = r.apply(this, i(l, arguments));
        return Object(n) === n ? n : this
      }
      return r.apply(t, i(l, arguments))
    }), r.prototype) {
    var f = function() {};
    f.prototype = r.prototype, e.prototype = new f, f.prototype = null
  }
  return e
}