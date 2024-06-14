"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("250327"),
  i = n("226430"),
  a = n("951516"),
  o = n("227700");

function s(e, t, n) {
  (0, a.default)(2, arguments);
  var s = (0, i.default)(e, t) / r.millisecondsInHour;
  return (0, o.getRoundingMethod)(null == n ? void 0 : n.roundingMethod)(s)
}