"use strict";
n.r(t), n.d(t, {
  isPaymentSourceEligibleForMultiMonthPlans: function() {
    return a
  }
}), n("47120");
var i = n("742280"),
  s = n("818083"),
  l = n("474936");
t.default = (0, s.createExperiment)({
  kind: "user",
  id: "2022-02_multi_month_plans",
  label: "Multi Month Plans",
  defaultConfig: {
    newPlans: []
  },
  treatments: [{
    id: 1,
    label: "3 and 6 Month Plans",
    config: {
      newPlans: [l.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
    }
  }, {
    id: 2,
    label: "3 Month Plan Only",
    config: {
      newPlans: [l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
    }
  }]
});
let r = new Set([i.CountryCodes.US, i.CountryCodes.CA]);

function a(e) {
  return null == e || r.has(e.country)
}