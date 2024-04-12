"use strict";
n.r(t), n.d(t, {
  calculateAdditionalPlansWithPremiumGuildAdjustment: function() {
    return r
  }
}), n("411104"), n("47120");
var i = n("512722"),
  l = n.n(i),
  s = n("509545"),
  a = n("74538"),
  u = n("474936"),
  o = n("981631");

function r(e, t) {
  let n = s.default.get(e.planId);
  l()(null != n, "missing premium subscription plan");
  let i = s.default.getForSkuAndInterval((0, a.castPremiumSubscriptionAsSkuId)(u.PremiumSubscriptionSKUs.GUILD), n.interval, n.intervalCount);
  l()(null != i, "missing premium guild plan");
  let r = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    c = (e.status === o.SubscriptionStatusTypes.CANCELED ? 0 : (0, a.getNumPremiumGuildSubscriptions)(r)) + t,
    d = r.filter(e => e.planId !== i.id);
  if (c < 0) throw Error("Invalid adjustment");
  return 0 === c ? d : [...d, {
    planId: i.id,
    quantity: c
  }]
}