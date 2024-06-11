"use strict";
n.r(t);
var r = n("548015"),
  i = n("204188"),
  a = n("175056"),
  o = n("906024"),
  s = 1 / 0,
  u = r.default ? r.default.prototype : void 0,
  c = u ? u.toString : void 0;
t.default = function e(t) {
  if ("string" == typeof t) return t;
  if ((0, a.default)(t)) return (0, i.default)(t, e) + "";
  if ((0, o.default)(t)) return c ? c.call(t) : "";
  var n = t + "";
  return "0" == n && 1 / t == -s ? "-0" : n
}