"use strict";
n.d(t, {
  O: function() {
    return r
  }
});
let i = (0, n(818083).B)({
    kind: "user",
    id: "2024-06_simplified_profile_panel_friending",
    label: "Simplified Profile Panel Friending Experiment",
    defaultConfig: {
      improvedPanelFriendingEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Improved friending",
      config: {
        improvedPanelFriendingEnabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: r = {}
    } = e;
    return i.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: r
    })
  }