"use strict";
a.r(t), a.d(t, {
  useIsSafetyConsumerEducationReportingEnabled: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-04_consumer_education_launch__reporting",
  label: "Consumer Education Launch - Reporting",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Reporting",
    config: {
      bucket: 1,
      enabled: !0
    }
  }]
});

function s() {
  return n.useExperiment({
    location: "183c74_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}