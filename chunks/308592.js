"use strict";
n.r(t), n.d(t, {
  useSubscriptionPlansLoaded: function() {
    return c
  },
  getSubscriptionPlansLoaded: function() {
    return d
  }
}), n("222007");
var u = n("446674"),
  r = n("605250"),
  i = n("357957"),
  a = n("10514"),
  l = n("521012"),
  s = n("646718");
new r.default("useSubscriptionPlansLoaded");
let o = e => {};

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...s.ACTIVE_PREMIUM_SKUS];
  return (0, u.useStateFromStores)([i.default, a.default, l.default], () => d(e, [i.default, a.default, l.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...s.ACTIVE_PREMIUM_SKUS],
    [n, u, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default, l.default],
    c = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = u.isLoadedForSKUs(t),
    h = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != h && !u.hasPaymentSourceForSKUIds(h, t)) return o("subscription payment source ".concat(h, " not loaded for ").concat(t)), !1;
  if (null != d && !u.hasPaymentSourceForSKUIds(d, t)) return o("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of c)
    if (!u.hasPaymentSourceForSKUIds(e, t)) return o("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return o("isLoadedForSKUs ".concat(f)), f
}