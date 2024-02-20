"use strict";
var r = n("459078"),
  a = n("911718"),
  o = n("589746"),
  i = a("%TypeError%"),
  s = a("%Function.prototype.apply%"),
  c = a("%Function.prototype.call%"),
  l = a("%Reflect.apply%", !0) || r.call(c, s),
  u = a("%Object.defineProperty%", !0),
  d = a("%Math.max%");
if (u) try {
  u({}, "a", {
    value: 1
  })
} catch (e) {
  u = null
}
e.exports = function(e) {
  if ("function" != typeof e) throw new i("a function is required");
  var t = l(r, c, arguments);
  return o(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
};
var p = function() {
  return l(r, s, arguments)
};
u ? u(e.exports, "apply", {
  value: p
}) : e.exports.apply = p