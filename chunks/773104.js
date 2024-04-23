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
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: T,
    onTier2Subscriber: I,
    onCustomCriteria: R
  } = e, f = (0, l.usePremiumTrialOffer)(), S = (0, n.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), A = i.default.getPremiumTypeFromSubscription(m);
  if (null != R) {
    let e = R();
    if (null != e) return e
  }
  return null != f && (0, o.SubscriptionTrials)[f.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != f && (0, o.SubscriptionTrials)[f.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != S ? null != s ? s : t : null == A ? null != u ? u : t : A === o.PremiumTypes.TIER_0 || A === o.PremiumTypes.TIER_1 ? null != T ? T : t : A === o.PremiumTypes.TIER_2 ? null != I ? I : t : t
}