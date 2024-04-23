"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("442837"),
  r = s("509545"),
  i = s("74538"),
  n = s("474936");

function l() {
  let e = (0, a.useStateFromStores)([r.default], () => r.default.getForSkuAndInterval((0, i.castPremiumSubscriptionAsSkuId)(n.PremiumSubscriptionSKUs.TIER_0), n.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, i.getFormattedPriceForPlan)(e) : "…"
}