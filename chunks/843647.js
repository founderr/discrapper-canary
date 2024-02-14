"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("446674"),
  r = n("697218"),
  l = n("10514"),
  a = n("719923"),
  s = n("716849"),
  o = n("676572"),
  u = n("942377"),
  d = n("917247"),
  c = n("646718");

function f(e) {
  let {
    autoTrackExposure: t,
    experiment: n,
    location: f
  } = e, m = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), _ = (0, d.usePremiumTrialOffer)(), E = null != _, T = null != m && (0, a.isPremium)(m);
  (0, s.useMaybeFetchPremiumLikelihood)(n);
  let {
    enabled: I,
    useExpectedValue: C,
    useLikelihood: p
  } = n.useExperiment({
    location: null != f ? f : "1"
  }, {
    autoTrackExposure: !T && !E && t
  }), {
    premiumLikelihood: P,
    fetched: S
  } = (0, i.useStateFromStoresObject)([o.default], () => {
    let e = o.default.getState();
    return {
      fetched: e.fetched,
      premiumLikelihood: e.premiumLikelihood
    }
  }), R = (0, i.useStateFromStores)([l.default], () => l.default.isLoadedForSKUs([c.PremiumSubscriptionSKUs.TIER_0, c.PremiumSubscriptionSKUs.TIER_2])), O = !T && I && !E && (C ? !S || !R : !S), M = c.PremiumTypes.TIER_2;
  if (E) {
    let e = _.subscription_trial;
    (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_0 ? M = c.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === c.PremiumSubscriptionSKUs.TIER_2 && (M = c.PremiumTypes.TIER_2)
  } else if (!T && !O && I) {
    if (C) {
      let {
        amount: e
      } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
        amount: t
      } = (0, a.getPrice)(c.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
      M = (0, u.getHigherExpectedValue)(P, e, t)
    } else p && (M = (0, u.getHighestLikelihood)(P))
  }
  return {
    isLoading: O,
    suggestedPremiumType: M
  }
}