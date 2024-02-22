"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return u
  }
});
var a = s("446674"),
  i = s("521012"),
  n = s("719923"),
  r = s("154889"),
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
  } = e, S = (0, l.usePremiumTrialOffer)(), R = (0, r.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()), A = n.default.getPremiumTypeFromSubscription(m);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, o.SubscriptionTrials)[S.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && A === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == A ? null != u ? u : t : A === o.PremiumTypes.TIER_0 || A === o.PremiumTypes.TIER_1 ? null != I ? I : t : A === o.PremiumTypes.TIER_2 ? null != T ? T : t : t
}