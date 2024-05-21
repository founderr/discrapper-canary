"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("442837"),
  r = n("594174"),
  s = n("74538"),
  a = n("639119"),
  o = n("474936");

function l() {
  let e = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, a.usePremiumTrialOffer)(),
    n = null != t,
    l = null != e && (0, s.isPremium)(e),
    u = o.PremiumTypes.TIER_2;
  if (n) {
    let e = t.subscription_trial;
    (null == e ? void 0 : e.sku_id) === o.PremiumSubscriptionSKUs.TIER_0 ? u = o.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === o.PremiumSubscriptionSKUs.TIER_2 && (u = o.PremiumTypes.TIER_2)
  }
  return {
    isLoading: !l && !n,
    suggestedPremiumType: u
  }
}