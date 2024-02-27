"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("446674"),
  i = s("10514"),
  r = s("719923"),
  n = s("646718");

function l() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getForSkuAndInterval(n.PremiumSubscriptionSKUs.TIER_0, n.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, r.getFormattedPriceForPlan)(e) : "…"
}