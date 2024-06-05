"use strict";
n.r(t), n.d(t, {
  useOpenInPopoutExperiment: function() {
    return l
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2023-08-30_open-in-popout",
  label: "Open Channel in Popout",
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

function l(e) {
  return i.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}