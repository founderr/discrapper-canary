"use strict";
s.r(t), s.d(t, {
  useIsEligibleForKeywordFiltering: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-04_keyword_filter_experiment",
  label: "Replace registered keywords with asterisks",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Keyword Filter",
    config: {
      enabled: !0
    }
  }]
});

function n(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}