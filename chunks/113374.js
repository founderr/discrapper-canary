"use strict";
n.r(t);
var r = n("926080"),
  i = n("97445"),
  a = n("175056"),
  o = n("429296"),
  s = n("725180"),
  u = n("17071");
t.default = function(e, t, n) {
  t = (0, r.default)(t, e);
  for (var c = -1, l = t.length, d = !1; ++c < l;) {
    var f = (0, u.default)(t[c]);
    if (!(d = null != e && n(e, f))) break;
    e = e[f]
  }
  return d || ++c != l ? d : !!(l = null == e ? 0 : e.length) && (0, s.default)(l) && (0, o.default)(f, l) && ((0, a.default)(e) || (0, i.default)(e))
}