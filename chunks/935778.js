"use strict";
n("70102");
var r = Object.prototype.toString,
  i = Math.max,
  o = function(e, t) {
    for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
    for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
    return n
  },
  s = function(e, t) {
    for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
    return n
  },
  a = function(e, t) {
    for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
    return n
  };
e.exports = function(e) {
  var t, n = this;
  if ("function" != typeof n || "[object Function]" !== r.apply(n)) throw TypeError("Function.prototype.bind called on incompatible " + n);
  for (var c = s(arguments, 1), u = i(0, n.length - c.length), l = [], d = 0; d < u; d++) l[d] = "$" + d;
  if (t = Function("binder", "return function (" + a(l, ",") + "){ return binder.apply(this,arguments); }")(function() {
      if (this instanceof t) {
        var r = n.apply(this, o(c, arguments));
        return Object(r) === r ? r : this
      }
      return n.apply(e, o(c, arguments))
    }), n.prototype) {
    var f = function() {};
    f.prototype = n.prototype, t.prototype = new f, f.prototype = null
  }
  return t
}