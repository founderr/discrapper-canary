"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("567703"),
  a = n("386242"),
  o = n("197410"),
  i = n("559610");

function u(e, t) {
  (0, i.default)(2, arguments);
  var n = (0, a.default)(e),
    u = (0, r.default)(t),
    s = n.getFullYear(),
    l = n.getDate(),
    c = new Date(0);
  c.setFullYear(s, u, 15), c.setHours(0, 0, 0, 0);
  var f = (0, o.default)(c);
  return n.setMonth(u, Math.min(l, f)), n
}