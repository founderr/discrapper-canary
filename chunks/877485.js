"use strict";
n.r(t), n.d(t, {
  useSimplifiedProfileFriendingExperiment: function() {
    return r
  }
});
let i = (0, n("818083").createExperiment)({
    kind: "user",
    id: "2024-05_simplified_profile_friending",
    label: "Simplified Profile Friending Experiment",
    defaultConfig: {
      originalFriendingEnabled: !1,
      improvedFriendingEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Original friending",
      config: {
        originalFriendingEnabled: !0,
        improvedFriendingEnabled: !1
      }
    }, {
      id: 2,
      label: "Improved friending",
      config: {
        originalFriendingEnabled: !1,
        improvedFriendingEnabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: r = {}
    } = e;
    return i.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: r
    })
  }