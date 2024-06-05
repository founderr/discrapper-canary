"use strict";
n.r(t), n.d(t, {
  calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
    return o
  }
}), n("411104"), n("47120");
var s = n("512722"),
  r = n.n(s),
  a = n("509545"),
  l = n("74538"),
  i = n("474936"),
  u = n("981631");

function o(e, t) {
  let n = a.default.get(e.planId);
  r()(null != n, "missing premium subscription plan");
  let s = a.default.getForSkuAndInterval((0, l.castPremiumSubscriptionAsSkuId)(i.PremiumSubscriptionSKUs.GUILD), n.interval, n.intervalCount);
  r()(null != s, "missing premium guild plan");
  let o = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    c = (e.status === u.SubscriptionStatusTypes.CANCELED ? 0 : (0, l.getNumPremiumGuildSubscriptions)(o)) + t,
    d = o.filter(e => e.planId !== s.id);
  if (c < 0) throw Error("Invalid adjustment");
  return 0 === c ? d : [...d, {
    planId: s.id,
    quantity: c
  }]
}