"use strict";
n.d(t, {
  V: function() {
    return _
  },
  a: function() {
    return c
  }
}), n(47120);
var i = n(442837),
  r = n(710845),
  s = n(853872),
  o = n(509545),
  a = n(78839),
  l = n(474936);
new r.Z("useSubscriptionPlansLoaded");
let u = e => {};

function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ];
  return (0, i.e7)([s.Z, o.Z, a.ZP], () => c(e, [s.Z, o.Z, a.ZP]), [e])
}

function c() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ],
    [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.Z, a.ZP],
    _ = n.paymentSourceIds,
    c = n.defaultPaymentSourceId,
    d = i.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !i.hasPaymentSourceForSKUIds(E, t)) return u("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != c && !i.hasPaymentSourceForSKUIds(c, t)) return u("default payment source ".concat(c, " not loaded for ").concat(t)), !1;
  for (let e of _)
    if (!i.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return u("isLoadedForSKUs ".concat(d)), d
}