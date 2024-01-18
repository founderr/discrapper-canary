"use strict";
r.r(t), r.d(t, {
  useTriggerDebuggingAA: function() {
    return i
  }
});
var n = r("862205");
let a = (0, n.createExperiment)({
  kind: "user",
  id: "2023-09_trigger_debugging_aa",
  label: "trigger debugging aa mobile",
  defaultConfig: {
    inUse: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      inUse: !0
    }
  }]
});

function i(e) {
  let {
    autoTrackExposure: t = !1,
    location: r
  } = e;
  return a.useExperiment({
    location: r
  }, {
    autoTrackExposure: t
  })
}