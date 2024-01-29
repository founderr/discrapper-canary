"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return i
  }
});
var a = s("446674"),
  r = s("10514"),
  n = s("719923"),
  l = s("646718");

function i() {
  let e = (0, a.useStateFromStores)([r.default], () => r.default.getForSkuAndInterval(l.PremiumSubscriptionSKUs.TIER_0, l.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, n.getFormattedPriceForPlan)(e) : "…"
}