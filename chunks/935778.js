"use strict";
n("70102");
var r = Object.prototype.toString,
  a = Math.max,
  o = function(e, t) {
    for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
    for (var a = 0; a < t.length; a += 1) n[a + e.length] = t[a];
    return n
  },
  i = function(e, t) {
    for (var n = [], r = t || 0, a = 0; r < e.length; r += 1, a += 1) n[a] = e[r];
    return n
  },
  s = function(e, t) {
    for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
    return n
  };
e.exports = function(e) {
  var t, n = this;
  if ("function" != typeof n || "[object Function]" !== r.apply(n)) throw TypeError("Function.prototype.bind called on incompatible " + n);
  for (var c = i(arguments, 1), l = a(0, n.length - c.length), u = [], d = 0; d < l; d++) u[d] = "$" + d;
  if (t = Function("binder", "return function (" + s(u, ",") + "){ return binder.apply(this,arguments); }")(function() {
      if (this instanceof t) {
        var r = n.apply(this, o(c, arguments));
        return Object(r) === r ? r : this
      }
      return n.apply(e, o(c, arguments))
    }), n.prototype) {
    var p = function() {};
    p.prototype = n.prototype, t.prototype = new p, p.prototype = null
  }
  return t
}