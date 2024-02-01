"use strict";
var r = n("459078"),
  i = n("911718"),
  o = n("589746"),
  s = i("%TypeError%"),
  a = i("%Function.prototype.apply%"),
  c = i("%Function.prototype.call%"),
  u = i("%Reflect.apply%", !0) || r.call(c, a),
  l = i("%Object.defineProperty%", !0),
  d = i("%Math.max%");
if (l) try {
  l({}, "a", {
    value: 1
  })
} catch (e) {
  l = null
}
e.exports = function(e) {
  if ("function" != typeof e) throw new s("a function is required");
  var t = u(r, c, arguments);
  return o(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
};
var f = function() {
  return u(r, a, arguments)
};
l ? l(e.exports, "apply", {
  value: f
}) : e.exports.apply = f