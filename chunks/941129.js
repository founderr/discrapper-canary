"use strict";
a.r(t), a.d(t, {
  useIsSafetyConsumerEducationBlockMuteBucket: function() {
    return l
  },
  useIsSafetyConsumerEducationBlockMuteEnabled: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-01_consumer_education_launch",
  label: "Safety Consumer Education Launch - Block/Mute",
  defaultConfig: {
    bucket: 0,
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Mute",
    config: {
      bucket: 1,
      enabled: !0
    }
  }, {
    id: 2,
    label: "Block",
    config: {
      bucket: 2,
      enabled: !0
    }
  }]
});

function s() {
  return n.useExperiment({
    location: "b85a21_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}

function l() {
  return n.useExperiment({
    location: "b85a21_2"
  }, {
    autoTrackExposure: !1
  }).bucket
}