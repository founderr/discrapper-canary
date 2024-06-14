"use strict";
n.r(t), n.d(t, {
  getSimplifiedProfileFriendingExperimentConfig: function() {
    return a
  },
  useSimplifiedProfileFriendingExperiment: function() {
    return o
  }
});
var i = n("818083"),
  r = n("447452");
let s = (0, i.createExperiment)({
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
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: i = {}
    } = e;
    return s.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    })
  },
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: i = {}
    } = e, {
      updatedOnAllSurfaces: a
    } = (0, r.useSimplifiedProfileExperiment)({
      location: t,
      autoTrackExposure: n,
      trackExposureOptions: i
    }), {
      originalFriendingEnabled: o,
      improvedFriendingEnabled: l
    } = s.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    });
    return {
      originalFriendingEnabled: o,
      improvedFriendingEnabled: l || !o && a
    }
  }