"use strict";
n.r(t), n.d(t, {
  StrangerDangerTeensExperiment: function() {
    return u
  },
  useIsEligibleForStrangerDangerTeens: function() {
    return r
  }
});
var a = n("862205");
let u = (0, a.createExperiment)({
  kind: "user",
  id: "2023-08_self_mod_stranger_danger_teens",
  label: "Stranger Danger Teens",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable stranger danger for teens",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  return u.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}