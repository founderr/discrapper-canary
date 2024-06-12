"use strict";
a.r(t), a.d(t, {
  allowDesktopRedirectPurchase: function() {
    return i
  },
  inBrowserAutofillExperiment: function() {
    return o
  }
});
var n = a("818083"),
  s = a("358085"),
  r = a("474936");
let l = (0, n.createExperiment)({
  id: "2023-07_checkout_optimization_browser_autofill",
  label: "Checkout Optimization Browser Autofill",
  kind: "user",
  defaultConfig: {
    enabled: !1,
    delay: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0,
      delay: !1
    }
  }, {
    id: 2,
    label: "Enabled with delay",
    config: {
      enabled: !0,
      delay: !0
    }
  }]
});

function o() {
  return l.getCurrentConfig({
    location: "5f89bb_3"
  }, {
    autoTrackExposure: !0
  })
}

function i(e, t) {
  return (0, s.isDesktop)() && null != e && [r.PremiumSubscriptionSKUs.TIER_0, r.PremiumSubscriptionSKUs.TIER_2].includes(e) && !t
}