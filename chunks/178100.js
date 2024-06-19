t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(470079),
  i = t(913527),
  a = t.n(i),
  l = t(55935);
let r = a().duration(30, "days");

function o(e, s) {
  return n.useMemo(() => (0, l.vc)(s ? null != e.outboundRedemptionEndDate ? a()(e.outboundRedemptionEndDate) : a()(e.endDate).add(r) : a()(e.endDate), "LL"), [e, s])
}