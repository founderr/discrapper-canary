"use strict";
i.r(n), i.d(n, {
  default: function() {
    return l
  }
});
var t = i("446674"),
  r = i("357957"),
  a = i("521012");

function l() {
  let e = (0, t.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
    n = (0, t.useStateFromStores)([r.default], () => {
      var n;
      return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = r.default.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
    });
  return n
}