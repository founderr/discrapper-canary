"use strict";
n.r(t);
var r = n("421896"),
  i = n("318670"),
  a = n("193079"),
  o = n("97106"),
  s = n("257109"),
  u = n("175056"),
  c = n("532455"),
  l = n("676067"),
  d = "[object Arguments]",
  f = "[object Array]",
  p = "[object Object]",
  h = Object.prototype.hasOwnProperty;
t.default = function(e, t, n, m, g, _) {
  var b = (0, u.default)(e),
    v = (0, u.default)(t),
    y = b ? f : (0, s.default)(e),
    E = v ? f : (0, s.default)(t);
  y = y == d ? p : y, E = E == d ? p : E;
  var S = y == p,
    x = E == p,
    w = y == E;
  if (w && (0, c.default)(e)) {
    if (!(0, c.default)(t)) return !1;
    b = !0, S = !1
  }
  if (w && !S) return _ || (_ = new r.default), b || (0, l.default)(e) ? (0, i.default)(e, t, n, m, g, _) : (0, a.default)(e, t, y, n, m, g, _);
  if (!(1 & n)) {
    var T = S && h.call(e, "__wrapped__"),
      C = x && h.call(t, "__wrapped__");
    if (T || C) {
      var D = T ? e.value() : e,
        O = C ? t.value() : t;
      return _ || (_ = new r.default), g(D, O, n, m, _)
    }
  }
  return !!w && (_ || (_ = new r.default), (0, o.default)(e, t, n, m, g, _))
}