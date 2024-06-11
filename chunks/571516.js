"use strict";
n.r(t);
var r = n("572657"),
  i = n("670097"),
  a = n("429296"),
  o = n("675717");
t.default = function(e, t, n) {
  if (!(0, o.default)(n)) return !1;
  var s = typeof t;
  return ("number" == s ? !!((0, i.default)(n) && (0, a.default)(t, n.length)) : "string" == s && t in n) && (0, r.default)(n[t], e)
}