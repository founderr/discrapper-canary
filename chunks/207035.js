"use strict";
t.r(n), t.d(n, {
  useOpenInPopoutExperiment: function() {
    return l
  }
});
let u = (0, t("818083").createExperiment)({
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
  return u.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled
}