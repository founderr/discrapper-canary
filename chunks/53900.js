s.d(_, {
  Z: function() {
    return l
  }
});
var n = s(442837),
  I = s(853872),
  t = s(78839);

function l() {
  let e = (0, n.e7)([t.ZP], () => t.ZP.getPremiumTypeSubscription());
  return (0, n.e7)([I.Z], () => {
    var _;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null === (_ = I.Z.getPaymentSource(e.paymentSourceId)) || void 0 === _ ? void 0 : _.country : null
  })
}