"use strict";
s.r(t), s.d(t, {
  useCheapestMonthlyPrice: function() {
    return l
  }
});
var a = s("446674"),
  n = s("10514"),
  r = s("719923"),
  i = s("646718");

function l() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getForSkuAndInterval(i.PremiumSubscriptionSKUs.TIER_0, i.SubscriptionIntervalTypes.MONTH));
  return null != e ? (0, r.getFormattedPriceForPlan)(e) : "…"
}