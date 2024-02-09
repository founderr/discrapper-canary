"use strict";
n.r(t), n.d(t, {
  useIsInPremiumOfferExperience: function() {
    return d
  },
  useHasDiscountApplied: function() {
    return c
  }
});
var r = n("866227"),
  i = n.n(r),
  l = n("446674"),
  a = n("521012"),
  s = n("324878"),
  o = n("154889"),
  u = n("917247");

function d() {
  let e = (0, u.usePremiumTrialOffer)(),
    t = (0, s.useHasActiveTrial)(),
    n = (0, o.usePremiumDiscountOffer)(),
    r = c();
  return null != e || t || null != n || r
}
let c = () => {
  var e, t;
  let n = (0, l.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
    r = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at,
    s = null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.nitro_reactivation_discount_expires_at,
    o = null != r ? r : s;
  return null != o && i(Date.now()) <= i(o)
}