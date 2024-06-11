"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("470079"),
  n = s("913527"),
  i = s.n(n),
  l = s("55935");
let r = i().duration(30, "days");

function o(e, t) {
  return a.useMemo(() => (0, l.dateFormat)(t ? null != e.outboundRedemptionEndDate ? i()(e.outboundRedemptionEndDate) : i()(e.endDate).add(r) : i()(e.endDate), "LL"), [e, t])
}