"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("567703"),
  a = n("386242"),
  o = n("18438"),
  i = n("559610");

function u(e, t) {
  (0, i.default)(2, arguments);
  var n = (0, a.default)(e),
    u = (0, r.default)(t),
    s = Math.floor(n.getMonth() / 3) + 1;
  return (0, o.default)(n, n.getMonth() + 3 * (u - s))
}