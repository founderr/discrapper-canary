"use strict";
n.r(t), n.d(t, {
  useTriggerDebuggingAA: function() {
    return r
  }
});
var i = n("862205");
let l = (0, i.createExperiment)({
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

function r(e) {
  let {
    autoTrackExposure: t = !1,
    location: n
  } = e;
  return l.useExperiment({
    location: n
  }, {
    autoTrackExposure: t
  })
}