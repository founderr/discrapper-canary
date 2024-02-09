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
  a = n("357957"),
  i = n("10514"),
  o = n("521012"),
  l = n("646718");
new r.default("useSubscriptionPlansLoaded");
let s = e => {};

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS];
  return (0, u.useStateFromStores)([a.default, i.default, o.default], () => d(e, [a.default, i.default, o.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS],
    [n, u, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, i.default, o.default],
    c = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = u.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !u.hasPaymentSourceForSKUIds(E, t)) return s("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != d && !u.hasPaymentSourceForSKUIds(d, t)) return s("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of c)
    if (!u.hasPaymentSourceForSKUIds(e, t)) return s("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return s("isLoadedForSKUs ".concat(f)), f
}