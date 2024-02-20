"use strict";
var n = r("459078"),
  o = r("911718"),
  i = r("589746"),
  a = o("%TypeError%"),
  u = o("%Function.prototype.apply%"),
  l = o("%Function.prototype.call%"),
  s = o("%Reflect.apply%", !0) || n.call(l, u),
  c = o("%Object.defineProperty%", !0),
  p = o("%Math.max%");
if (c) try {
  c({}, "a", {
    value: 1
  })
} catch (t) {
  c = null
}
t.exports = function(t) {
  if ("function" != typeof t) throw new a("a function is required");
  var e = s(n, l, arguments);
  return i(e, 1 + p(0, t.length - (arguments.length - 1)), !0)
};
var f = function() {
  return s(n, u, arguments)
};
c ? c(t.exports, "apply", {
  value: f
}) : t.exports.apply = f