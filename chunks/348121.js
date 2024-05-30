"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("639119"),
  r = n("474936");

function s() {
  let e = (0, i.usePremiumTrialOffer)(),
    t = r.PremiumTypes.TIER_2;
  if (null != e) {
    let n = e.subscription_trial;
    (null == n ? void 0 : n.sku_id) === r.PremiumSubscriptionSKUs.TIER_0 ? t = r.PremiumTypes.TIER_0 : (null == n ? void 0 : n.sku_id) === r.PremiumSubscriptionSKUs.TIER_2 && (t = r.PremiumTypes.TIER_2)
  }
  return {
    isLoading: !1,
    suggestedPremiumType: t
  }
}