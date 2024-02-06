"use strict";
n.r(t), n.d(t, {
  useTriggerDebuggingAA: function() {
    return l
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
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

function l(e) {
  let {
    autoTrackExposure: t = !1,
    location: n
  } = e;
  return r.useExperiment({
    location: n
  }, {
    autoTrackExposure: t
  })
}