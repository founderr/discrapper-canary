"use strict";
n.r(t), n.d(t, {
  isEligibleForKeywordFiltering: function() {
    return s
  },
  useIsEligibleForKeywordFiltering: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
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

function r(e) {
  let {
    location: t
  } = e;
  return i.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return i.getCurrentConfig({
    location: t
  }).enabled
}