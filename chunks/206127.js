"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return n
  }
});
var a = s("442837"),
  i = s("509545"),
  r = s("74538"),
  l = s("474936");

function n() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getForSkuAndInterval((0, r.castPremiumSubscriptionAsSkuId)(l.PremiumSubscriptionSKUs.TIER_0), l.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, r.getFormattedPriceForPlan)(e) : "…"
}