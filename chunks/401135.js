"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("446674"),
  i = s("10514"),
  n = s("719923"),
  r = s("646718");

function l() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getForSkuAndInterval(r.PremiumSubscriptionSKUs.TIER_0, r.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, n.getFormattedPriceForPlan)(e) : "…"
}