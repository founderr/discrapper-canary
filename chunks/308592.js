"use strict";
r.r(t), r.d(t, {
  useSubscriptionPlansLoaded: function() {
    return c
  },
  getSubscriptionPlansLoaded: function() {
    return d
  }
}), r("222007");
var a = r("446674"),
  n = r("605250"),
  u = r("357957"),
  i = r("10514"),
  s = r("521012"),
  l = r("646718");
new n.default("useSubscriptionPlansLoaded");
let o = e => {};

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS];
  return (0, a.useStateFromStores)([u.default, i.default, s.default], () => d(e, [u.default, i.default, s.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS],
    [r, a, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, i.default, s.default],
    c = r.paymentSourceIds,
    d = r.defaultPaymentSourceId,
    f = a.isLoadedForSKUs(t),
    m = null === (e = n.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != m && !a.hasPaymentSourceForSKUIds(m, t)) return o("subscription payment source ".concat(m, " not loaded for ").concat(t)), !1;
  if (null != d && !a.hasPaymentSourceForSKUIds(d, t)) return o("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of c)
    if (!a.hasPaymentSourceForSKUIds(e, t)) return o("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return o("isLoadedForSKUs ".concat(f)), f
}