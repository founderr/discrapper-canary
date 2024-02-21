"use strict";
l.r(t), l.d(t, {
  isIFrameModalUserEnabled: function() {
    return u
  }
});
var n = l("862205");
let a = (0, n.createExperiment)({
  kind: "user",
  id: "2023-07_iframe_modal",
  label: "iFrame Modal",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable iFrameModal",
    config: {
      enabled: !0
    }
  }]
});

function u() {
  return a.getCurrentConfig({
    location: "5c0a70_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}