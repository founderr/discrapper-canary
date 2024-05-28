"use strict";
n.r(t), n.d(t, {
  isPaymentSourceEligibleForMultiMonthPlans: function() {
    return r
  }
}), n("47120");
var i = n("742280"),
  l = n("818083"),
  s = n("474936");
t.default = (0, l.createExperiment)({
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
      newPlans: [s.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, s.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
    }
  }, {
    id: 2,
    label: "3 Month Plan Only",
    config: {
      newPlans: [s.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
    }
  }]
});
let a = new Set([i.CountryCodes.US, i.CountryCodes.CA]);

function r(e) {
  return null == e || a.has(e.country)
}