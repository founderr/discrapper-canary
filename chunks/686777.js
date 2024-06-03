"use strict";
n.r(t), n.d(t, {
  useIsEligibleForConcurrentQuests: function() {
    return a
  }
});
let s = (0, n("818083").createExperiment)({
    id: "2024-04_concurrent_quests",
    kind: "user",
    label: "Concurrent Quests",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: !1
      }
    }, {
      id: 1,
      label: "Concurrent Quests Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  }