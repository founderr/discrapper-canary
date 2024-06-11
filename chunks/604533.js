"use strict";
n.r(t);
var r = n("176338"),
  i = n("754401"),
  a = n("370873"),
  o = Object.prototype,
  s = Function.prototype.toString,
  u = o.hasOwnProperty,
  c = s.call(Object);
t.default = function(e) {
  if (!(0, a.default)(e) || "[object Object]" != (0, r.default)(e)) return !1;
  var t = (0, i.default)(e);
  if (null === t) return !0;
  var n = u.call(t, "constructor") && t.constructor;
  return "function" == typeof n && n instanceof n && s.call(n) == c
}