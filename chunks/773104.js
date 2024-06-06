"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("442837"),
  r = s("78839"),
  i = s("74538"),
  n = s("104494"),
  l = s("639119"),
  o = s("474936");

function u(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: u,
    onTier0TrialOffer: c,
    onTier2TrialOffer: d,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: R,
    onTier2Subscriber: T,
    onCustomCriteria: S
  } = e, f = (0, l.usePremiumTrialOffer)(), I = (0, n.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), p = i.default.getPremiumTypeFromSubscription(m);
  if (null != S) {
    let e = S();
    if (null != e) return e
  }
  return null != f && (0, o.SubscriptionTrials)[f.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != c ? c : t : null != f && (0, o.SubscriptionTrials)[f.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != d ? d : t : null != m && null != m.trialId && p === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && p === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != I ? null != s ? s : t : null == p ? null != u ? u : t : p === o.PremiumTypes.TIER_0 || p === o.PremiumTypes.TIER_1 ? null != R ? R : t : p === o.PremiumTypes.TIER_2 ? null != T ? T : t : t
}