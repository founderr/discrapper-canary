"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("442837"),
  i = s("78839"),
  r = s("74538"),
  l = s("104494"),
  n = s("639119"),
  o = s("474936");

function u(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: u,
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: C,
    onTier2Subscriber: f,
    onCustomCriteria: T
  } = e, I = (0, n.usePremiumTrialOffer)(), R = (0, l.usePremiumDiscountOffer)(), S = (0, a.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()), p = r.default.getPremiumTypeFromSubscription(S);
  if (null != T) {
    let e = T();
    if (null != e) return e
  }
  return null != I && (0, o.SubscriptionTrials)[I.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != I && (0, o.SubscriptionTrials)[I.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != S && null != S.trialId && p === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != S && null != S.trialId && p === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == p ? null != u ? u : t : p === o.PremiumTypes.TIER_0 || p === o.PremiumTypes.TIER_1 ? null != C ? C : t : p === o.PremiumTypes.TIER_2 ? null != f ? f : t : t
}