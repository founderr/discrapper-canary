s.d(n, {
  Z: function() {
return a;
  }
});
var t = s(442837),
  r = s(853872),
  l = s(78839);

function a() {
  let e = (0, t.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
  return (0, t.e7)([r.Z], () => {
var n;
return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = r.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null;
  });
}