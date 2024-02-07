"use strict";
n.r(t), n.d(t, {
  useSubscriptionPlansLoaded: function() {
    return d
  },
  getSubscriptionPlansLoaded: function() {
    return c
  }
}), n("222007");
var i = n("446674"),
  r = n("605250"),
  l = n("357957"),
  s = n("10514"),
  a = n("521012"),
  o = n("646718");
new r.default("useSubscriptionPlansLoaded");
let u = e => {};

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
  return (0, i.useStateFromStores)([l.default, s.default, a.default], () => c(e, [l.default, s.default, a.default]), [e])
}

function c() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
    [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, s.default, a.default],
    d = n.paymentSourceIds,
    c = n.defaultPaymentSourceId,
    f = i.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !i.hasPaymentSourceForSKUIds(E, t)) return u("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != c && !i.hasPaymentSourceForSKUIds(c, t)) return u("default payment source ".concat(c, " not loaded for ").concat(t)), !1;
  for (let e of d)
    if (!i.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return u("isLoadedForSKUs ".concat(f)), f
}