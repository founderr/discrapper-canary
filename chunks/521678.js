"use strict";
n.r(t);
var r = n("175056"),
  i = n("906024"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  o = /^\w*$/;
t.default = function(e, t) {
  if ((0, r.default)(e)) return !1;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || (0, i.default)(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
}