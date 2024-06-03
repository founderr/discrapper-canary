"use strict";
n.r(t), n.d(t, {
  inBrowserAutofillExperiment: function() {
    return s
  }
});
let i = (0, n("818083").createExperiment)({
  id: "2023-07_checkout_optimization_browser_autofill",
  label: "Checkout Optimization Browser Autofill",
  kind: "user",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function s() {
  let {
    enabled: e
  } = i.getCurrentConfig({
    location: "5f89bb_3"
  }, {
    autoTrackExposure: !0
  });
  return e
}