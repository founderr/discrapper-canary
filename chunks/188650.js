"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("226430"),
  i = n("951516"),
  a = n("227700");

function o(e, t, n) {
  (0, i.default)(2, arguments);
  var o = (0, r.default)(e, t) / 1e3;
  return (0, a.getRoundingMethod)(null == n ? void 0 : n.roundingMethod)(o)
}