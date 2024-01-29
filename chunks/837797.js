"use strict";
s.r(t), s.d(t, {
  useResponseOnUserState: function() {
    return o
  }
});
var a = s("446674"),
  r = s("521012"),
  n = s("719923"),
  l = s("154889"),
  i = s("917247"),
  u = s("646718");

function o(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: o,
    onTier0TrialOffer: d,
    onTier2TrialOffer: c,
    onTier0TrialPeriod: _,
    onTier2TrialPeriod: E,
    onNonTier2Subscriber: I,
    onTier2Subscriber: T,
    onCustomCriteria: f
  } = e, S = (0, i.usePremiumTrialOffer)(), R = (0, l.usePremiumDiscountOffer)(), m = (0, a.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), A = n.default.getPremiumTypeFromSubscription(m);
  if (null != f) {
    let e = f();
    if (null != e) return e
  }
  return null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != S && (0, u.SubscriptionTrials)[S.trial_id].skus.includes(u.PremiumSubscriptionSKUs.TIER_2) ? null != c ? c : t : null != m && null != m.trialId && A === u.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != m && null != m.trialId && A === u.PremiumTypes.TIER_2 ? null != E ? E : t : null != R ? null != s ? s : t : null == A ? null != o ? o : t : A === u.PremiumTypes.TIER_0 || A === u.PremiumTypes.TIER_1 ? null != I ? I : t : A === u.PremiumTypes.TIER_2 ? null != T ? T : t : t
}