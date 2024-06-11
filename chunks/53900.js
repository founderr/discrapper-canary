"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("442837"),
  _ = s("853872"),
  n = s("78839");

function l() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription());
  return (0, a.useStateFromStores)([_.default], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = _.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
  })
}