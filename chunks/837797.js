"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("446674"),
  n = s("521012"),
  r = s("719923"),
  i = s("154889"),
  l = s("917247"),
  o = s("646718");

function u(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: u,
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: I,
    onTier2Subscriber: T,
    onCustomCriteria: f
  } = e, S = (0, l.usePremiumTrialOffer)(), R = (0, i.usePremiumDiscountOffer)(), A = (0, a.useStateFromStores)([n.default], () => n.default.getPremiumTypeSubscription()), m = r.default.getPremiumTypeFromSubscription(A);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != A && null != A.trialId && m === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != A && null != A.trialId && m === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == m ? null != u ? u : t : m === o.PremiumTypes.TIER_0 || m === o.PremiumTypes.TIER_1 ? null != I ? I : t : m === o.PremiumTypes.TIER_2 ? null != T ? T : t : t
}