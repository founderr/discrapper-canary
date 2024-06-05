"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var n = s("442837"),
  a = s("853872"),
  l = s("78839");

function u() {
  let e = (0, n.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
  return (0, n.useStateFromStores)([a.default], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = a.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
  })
}